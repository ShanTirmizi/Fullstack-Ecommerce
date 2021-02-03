import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const  { products_loading: loading, products_error: error, featured_products: featured, } = useProductsContext()

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <div className='section'>
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {
          featured.map((product) => {
            return <Product key={product.id} {...product} />
          })
        }
      </div>
      <Link to='/products' className='btn'>
        all products
      </Link>
    </div>
  ) 
}

export default FeaturedProducts