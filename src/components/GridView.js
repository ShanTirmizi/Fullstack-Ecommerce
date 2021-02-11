import React from 'react'
import Product from './Product'
import './GridView.css'

const GridView = ({ products }) => {
  return (
      <div className="products__container">
        {
          products.map((product) => {
            return <Product className="products__container__product" key={product.id} {...product} />
          })
        }
      </div>
  ) 
}

export default GridView
