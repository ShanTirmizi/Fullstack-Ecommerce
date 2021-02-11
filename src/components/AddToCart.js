import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'
import './AddToCart.css'

const AddToCart = ({ item1 }) => {
  const { addToCart } = useCartContext()
  const { id, stock } = item1
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let amount = oldAmount + 1
      if (amount > stock) {
        amount = stock
      }
      return amount
    })
  }

  const decrease = () => {
    setAmount((oldAmount) => {
      let amount = oldAmount - 1
      if (amount < 1) {
        amount = 1
      }
      return amount
    })
  }
  return (
    <div>
      <div className='add__cart'>
        <AmountButtons amount={amount} increase={increase} decrease={decrease} />
        <Link to='/cart' className='add__cart__btn' onClick={() => addToCart(id, amount, item1)}>
          Add To Cart
        </Link>
      </div>
    </div>
  ) 
}


export default AddToCart
