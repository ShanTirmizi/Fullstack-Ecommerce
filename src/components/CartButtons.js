import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items, clearCart } = useCartContext()
  const { loginWithRedirect, myUser, logout } = useUserContext()

  return (
    <div className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {
        myUser ? (
          <button onClick={() => {
            clearCart()
            logout({returnTo:window.location.origin})}
          }  type='button' className='auth-btn'>
            Logout <FaUserMinus />
          </button>
        ) : (
          <button onClick={loginWithRedirect} type='button' className='auth-btn'>
            Login <FaUserPlus />
          </button>
        )
      }
    </div>
  ) 
}

export default CartButtons
