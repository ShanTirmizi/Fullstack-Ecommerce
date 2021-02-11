import React from 'react'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'
import './CartPage.css'

const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
        <div className="cart__page__empty">
          <h2>Your cart is empty</h2>
          <Link to='/products' className='empty__btn'>
            Fill It
          </Link>
        </div>
    )
  }
  return (
    <main className='cart__main'>
      <PageHero title='Cart' />
      <div className='cart__page'>
        <CartContent />
      </div>
    </main>
  ) 
}


export default CartPage
