import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import './CartItem.css'
const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext()
  const increase = () => {
    toggleAmount(id, 'inc')
  }
  const decrease = () => {
    toggleAmount(id, 'dec')
  }
  return (
    <div className="cart__item">
      <div className="cart__item__content">
        <img className="cart__item__content__img" src={image} alt={name} />
        <div className="cart__item__content__info">
          <h5 className='name'>{name}</h5>
          {/* <p className='color'>
            color : <span style={{ background: color }}></span>
          </p> */}
          <h5 className='price__small'>{formatPrice(price)}</h5>
        </div>
      </div>
      {/* <h5 className='price'>{formatPrice(price)}</h5> */}
      <div className="cart__item__end">
        <div className="cart__item__end__amount">
          <AmountButtons className="cart__item__end__amount__btn" amount={amount} increase={increase} decrease={decrease} />
          <div className="cart__item__end__total">
            <h5>Total: </h5>
            <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
          </div>
        </div>
        <button onClick={() => removeItem(id)} className='cart__item__end__button' type='button'>
          <FaTrash />
        </button>
      </div>
    </div>
  ) 
}

export default CartItem
