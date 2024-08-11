// src/Offcanvas.js
import React, { useState } from 'react';
import { roundDecimal } from '../../utils/RoundDecimal';
import './ShoppingCart.scss';
import { useShoppingCart } from '../../context/ShoppingContext';
import { useProductContext } from '../../context/ProductContext';

type CartItemType ={id: number | undefined, title: string | undefined, img: string | undefined, price: string | undefined, quant: number }

export default function ShoppingCart(){
    const {isOpen, setCart, cartItems} = useShoppingCart()
    const {data}= useProductContext()
    return (
        <div>
            <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">Cart</h5>
                    <button className="btn-close" onClick={()=> setCart(prev=> !prev)}>&times;</button>
                </div>
                <div className="offcanvas-body">
                    <p>Modify and finalize your products</p>
                    {cartItems.map(item=>{
                        let p1= data.find(d=>d.id === item.id);
                        let pass = {
                            id: p1?.id,
                            title: p1?.title,
                            img: p1?.image,
                            price: p1?.price,
                            quant: item.quantity
                        }
                        return <CartItem {...pass}/>;
                    })}
                    <div className="total-price">
                        <h2>Total:</h2>
                        <h4>${cartItems.reduce((totPrice, cur)=>{
                            let curItem= data.find(d=>d.id === cur.id)
                            return roundDecimal(totPrice + parseFloat(curItem?.price ? curItem.price : "-1") * cur.quantity, 2)
                        }, 0)}</h4>
                    </div>
                    <button className='buy'>Proceed to buy</button>
                </div>
            </div>
        </div>
    );
}
function CartItem({id, title, img, price, quant}: CartItemType){
    const {removeItem}= useShoppingCart()
    return<>
        <div className="cart-item">
            <div>
                <img src={img} alt="" />
                <div className="cart-item-desc">
                    <h3>{title} x {quant}</h3>
                    <p>${price}</p>
                </div>
            </div>
            <div>
                <h2>${parseFloat(price? price : "-1") * quant}</h2>
                <button onClick={()=> removeItem(id || -1)}>X</button>
            </div>
        </div>
    </>
}
