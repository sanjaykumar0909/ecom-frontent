import * as types from "../types/store";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext= createContext({} as {data: types.Products})

export function useProductContext(){
    return useContext(ProductContext)
}

export function ProductProvider({children}:{children: ReactNode}) {
    let [data, setData]= useState<types.Products>([])
  
    useEffect(()=>{
      let fetch= async ()=>{
        let products: types.Products = await fetchData()
        products= products.map(d=>({...d, title: d.title?.substring(0,10)}))
        setData(products)
        console.log(products);
      }
      fetch()
    },[])
    return (
      <ProductContext.Provider value={{data}}>
        {children}
      </ProductContext.Provider>
    )
}

async function fetchData(): Promise<types.Products>{
    try{
      const resp= await axios.get('https://fakestoreapi.com/products?limit=5')
      console.log(resp);
      
      return resp.data
    }catch(e){
      console.log(e);
      return []
    }
  }