import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import './CartContent.css'

const CartContent = () => {
  const { cart, clearCart } = useCartContext()

  return (
    <div className='cart__content'>
      {
        cart.map((item) => {
          return (
            <>
              <CartItem key={item.id} {...item} />
            </>
          ) 
        })
      }
      <div className="cart__shopping">
        <Link to='/products' className='cart__shopping__btn'>
          <button>
             continue shopping
          </button>
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
