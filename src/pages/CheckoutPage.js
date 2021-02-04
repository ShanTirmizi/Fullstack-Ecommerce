import React from 'react'
import { PageHero, StripeCheckout } from '../components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { cart } = useCartContext()
  return (
    <main>
      <PageHero title='checkout' />
      <div className='page'>
        {
          cart.length < 1 ? (
            <div>
              <h2>your cart is empty</h2>
              <Link to='/products' className='btn'>add some products</Link>
            </div>
          )  : <StripeCheckout />
        }
        <h1>checkout here</h1>
      </div>
    </main>
  ) 
}

export default CheckoutPage
