// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./navbar.scss"
import userLogo from "../../assets/user-solid.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useShoppingCart } from '../../context/ShoppingContext'
import { useAuthContext } from '../../context/AuthContext'

export default function Navbar() {
  const {cartItems, setCart}= useShoppingCart()
  const navigate= useNavigate()
  const auth= useAuthContext()

  return (<>
    <div className='navbar'>
        <div className="navs">
            <div className="nav"><Link className='link-comp' to={'/'}>Home</Link></div>
            <div className="nav"><Link className='link-comp' to={'/store'}>Store</Link></div>
            <div className="nav"><Link className='link-comp' to={'/about'}>About</Link></div>
        </div>
        <div className="nav-right">
          <div className="user" onClick={()=>navigate('/login')}>
            <FontAwesomeIcon icon={faUser} />
          <h3>{auth.user || "Login"}</h3>
          </div>
          <div className="cart" onClick={()=>setCart(prev=>!prev)}>
            <FontAwesomeIcon className='cart-icon' icon={faShoppingCart} />
            {cartItems.reduce((tot, cur)=> tot+cur.quantity, 0)}
          </div>
        </div>
    </div>
    <br />
    <div style={{height: "72px"}}></div>
    </>)
}
