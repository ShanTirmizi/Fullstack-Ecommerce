import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import './CartContent.css'

const CartContent = () => {
  const { cart, clearCart } = useCartContext()

  return (
    <div className='cart__content'>
      <div className='cart__content__heading'>
        <h1>
          Ecom
        </h1>
        <h1>
          Cart
        </h1>
      </div>
      {/* <CartColumns /> */}
      {
        cart.map((item) => {
          return (
            <>
              <CartItem key={item.id} {...item} />
              <hr />
            </>
          ) 
        })
      }
      <hr />
      <div className="cart__shopping">
        <Link to='/products' className='cart__shopping__link'>
          continue shopping
        </Link>
        <button type='button' className='cart__shopping__btn clear__btn' onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </div>
  ) 
}

export default CartContent
