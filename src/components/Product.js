import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({ images, name, price, id }) => {
  return (
    <div className="product__container">
      <Link to={`/products/${id}`} className='link'>
        <div>
          <img  src={images[0].url} alt={name} />
            {/* <FaSearch /> */}
        </div>
        <footer>
          <h5>{name}</h5>
          <p>{formatPrice(price)}</p>
        </footer>
      </Link>
    </div>
  ) 
}

export default Product
