import React from 'react'
import { PageHero, StripeCheckout } from '../components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import './CheckoutPage.css'

const CheckoutPage = () => {
  const { cart } = useCartContext()
  return (
    <main>
      <PageHero title='Checkout' />
      <div className='page'>
        {
          cart.length < 1 ? (
            <div className='checkout__page__empty'>
              <h2>Your Cart Is Empty</h2>
              <Link to='/products' className='checkout__empty__btn'>Add Some Products</Link>
            </div>
          )  : <StripeCheckout />
        }
        <h1>checkout here</h1>
      </div>
    </main>
  ) 
}

export default CheckoutPage
