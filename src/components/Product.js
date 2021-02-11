import React from 'react'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({ images, name, price, id }) => {
  return (
    <div className="product__container">
      <Link  style={{ textDecoration: 'none', color: 'var(--color-2)'}} to={`/products/${id}`} className='link'>
        <div>
          <img  src={images[0].url} alt={name} />
        </div>
        <footer className="product__container__footer">
          <h5>{name}</h5>
          <h5>{formatPrice(price)}</h5>
        </footer>
      </Link>
    </div>
  ) 
}

export default Product
