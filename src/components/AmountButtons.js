import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'
import './AmountButtons.css'

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className='amount__btsn'>
      <button type='button' className='amount__btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount__btn' onClick={increase}>
        <FaPlus />
      </button>
    </div>
  ) 
}

export default AmountButtons
