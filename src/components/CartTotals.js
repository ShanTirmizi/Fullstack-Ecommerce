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
            <h4>
            Subtotal : 
            </h4>
            <h4>
              {formatPrice(total_amount)}
            </h4>
          </div>
          <div className='cart__total__shipping cart__total__sep'>
            <h4>
              Shipping fee : 
            </h4>
            <h4>
              {formatPrice(shipping_fee)}
            </h4>
          </div>
          <div className='cart__total__order cart__total__sep'>
            <h4>
              Order total :{' '}
            </h4>
            <h4>
              {formatPrice(total_amount + shipping_fee)}
            </h4>
          </div>
        </article>
        {
          myUser ? (
            <Link to='/checkout' className='cart__total__btn__check cart__link'>
            <button>
              Proceed To Checkout
            </button>
            </Link>
          ) : (
            <button onClick={loginWithRedirect} type='button' className='cart__total__btn'>Login</button>
          )
        }
      </div>
    </div>
  ) 
}

export default CartTotals
