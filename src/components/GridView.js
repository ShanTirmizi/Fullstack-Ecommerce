import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({ products }) => {
  return (
    <div>
      <div className="products-container">
        {
          products.map((product) => {
            return <Product key={product.id} {...product} />
          })
        }
      </div>
    </div>
  ) 
}

export default GridView
