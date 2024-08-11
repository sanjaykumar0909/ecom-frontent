import React, { useState } from 'react'
import "./Product.scss"
import * as types from "../../types/store"
import { useShoppingCart } from '../../context/ShoppingContext'
export default function Product({id, title, price, image, description}: types.Product){
    let [isClicked, click]= useState<boolean>(false)

    return<>
    <div className={`product ${isClicked ? 'clicked' : ''}`} onClick={()=> click(c=> !c)}>
        <div className="product-title">{title}</div>
        <div className="product-image"><img src={image} alt="" /></div>
        
        <div className="product-price">
            <div>Price:</div>
            <b>{price}$</b>
        </div>
        <hr />
        {isClicked && <Desc desc={description} pid={id} isClicked={isClicked}/>}
    </div>
    </>
}

function Desc({desc, pid}:{desc: string| undefined, pid: number, isClicked: boolean}){
    const {getItemQuantity, incQuantity, decQuantity, removeItem} = useShoppingCart()
    return<>
    <div className="description">
        <h3>Description:</h3>
        <p>{desc}</p>
        <hr />
    </div>
    <div className="mod-cart" onClick={event=> event.stopPropagation()}>
        <div className="mod">
            <div onClick={()=> decQuantity(pid)}>-</div>
            <div>{getItemQuantity(pid)} in cart</div>
            <div onClick={()=> incQuantity(pid)}>+</div>
        </div>
        <div className="delete-item" onClick={()=> removeItem(pid)}>
            Delete item
        </div>
    </div>
    </>
}