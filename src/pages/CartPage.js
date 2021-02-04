import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <div className='cart__page__empty'>
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to='/products' className='empty__btn'>
            fill it
          </Link>
        </div>
      </div>
    )
  }
  return (
    <main>
      {/* <PageHero title='cart' /> */}
      <div className='cart__page'>
        <CartContent />
      </div>
    </main>
  ) 
}


export default CartPage
