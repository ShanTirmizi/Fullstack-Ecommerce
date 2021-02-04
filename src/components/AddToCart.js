import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'
import './AddToCart.css'

const AddToCart = ({ item1 }) => {
  const { addToCart } = useCartContext()
  const { id, stock, colors } = item1
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
      {/* <div className="colors">
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
      </div> */}
      <div className='add__cart'>
        <AmountButtons amount={amount} increase={increase} decrease={decrease} />
        <Link to='/cart' className='add__cart__btn' onClick={() => addToCart(id, mainColor, amount, item1)}>
          Add To Cart
        </Link>
      </div>
    </div>
  ) 
}


export default AddToCart
