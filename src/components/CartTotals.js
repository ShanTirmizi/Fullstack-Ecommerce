import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import './CartTotals.css'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()
  const { myUser, loginWithRedirect } = useUserContext()

  return (
    <div >
      <div className='cart__total'>
        <article className='cart__total__info'>
          <div className='cart__total__subtotal cart__total__sep'>
            <h5>
            subtotal : 
            </h5>
            <h5>
              {formatPrice(total_amount)}
            </h5>
          </div>
          <div className='cart__total__shipping cart__total__sep'>
            <h5>
              shipping fee : 
            </h5>
            <h5>
              {formatPrice(shipping_fee)}
            </h5>
          </div>
          <div className='cart__total__order cart__total__sep'>
            <h4>
              order total :{' '}
            </h4>
            <h4>
              {formatPrice(total_amount + shipping_fee)}
            </h4>
          </div>
        </article>
        {
          myUser ? (
            <Link to='/checkout' className='cart__total__btn'>
            <button>
              Proceed To Checkout
            </button>
            </Link>
          ) : (
            <button onClick={loginWithRedirect} type='button' className='cart__total__btn'>login</button>
          )
        }
      </div>
    </div>
  ) 
}

export default CartTotals
