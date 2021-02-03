import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext()
  const { id, stock, colors } = product
  const [mainColor, setMainColor] = useState(colors[0])
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
      <div className="colors">
        <span> colors :</span>
        <div>
          {
            colors.map((color, index) => {
              return (
                <button onClick={() => setMainColor(color)} key={index} style={{ background: color }} 
                  className={`${mainColor === color ? 'color-btn active' : 'color-btn'}`}
                  >{
                    mainColor === color ? <FaCheck /> : null
                    }
                </button>
              ) 
            })
          }
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons amount={amount} increase={increase} decrease={decrease} />
        <Link to='/cart' className='btn' onClick={() => addToCart(id, mainColor, amount, product)}>
          add to cart
        </Link>
      </div>
    </div>
  ) 
}


export default AddToCart
