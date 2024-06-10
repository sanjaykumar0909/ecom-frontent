import { ReactNode, createContext, useContext, useState } from "react";
import * as types from "../types/store"
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

const ShoppingCartContext= createContext({} as types.ShoppingCartType)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:{children: ReactNode}){
   const [cartItems, setCartItems] = useState<types.CartItem[]>([])
   const [isOpen, setCart]= useState<boolean>(false)

//    const totQuantity= cartItems.reduce((tot, cur)=> tot+cur.quantity, 0)
    const [totPrice, setTotPrice] = useState<number>(0);

   const getItemQuantity= (id: number)=> cartItems.find(i=> i.id === id)?.quantity || 0
   const incQuantity= (id:number)=> {
    setCartItems(curItems =>{
        if (curItems.find(item=> id === item.id) == null){
            return [...curItems, {id, quantity:1}]
        }else{
            return curItems.map(item =>{
                if (item.id === id){
                    return {...item, quantity: item.quantity+1}
                }else return item
            })
        }
    })
   }

   const decQuantity = (id: number)=>{
    setCartItems(curItems => {
        console.log(curItems);
        
        const itemIndex = curItems.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
          if (curItems[itemIndex].quantity === 1) {
            return curItems.filter(item => item.id !== id);
          } else {
            return curItems.map(item => 
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
          }
        }
        return curItems;
      });
   }
   const removeItem= (id:number) =>{
    console.log('exe')
    setCartItems((curItems)=>{
        return curItems.filter(item=> item.id !== id)
    })
   }
    return<>
        <ShoppingCartContext.Provider value={{totPrice, setTotPrice, cartItems, isOpen, getItemQuantity, incQuantity, decQuantity, removeItem, setCart}}>
            {children}
            <ShoppingCart />
        </ShoppingCartContext.Provider>
    </>
}