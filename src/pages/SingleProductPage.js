import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { dogData as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './SingleProductPage.css'

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory()
  // const item1 = url.find((x) => x.id === id)
  const { single_product_loading: loading, single_product_error: error, single_product: item1, fetchSingleProduct, } = useProductsContext()
  // console.log('url id >>>>',url[0])
  const Crypto = url.find((x) => x.id === id)
  console.log('Crypto',Crypto)

  useEffect(() => {
    fetchSingleProduct(Crypto)
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
  }, [error])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const { name, price, description, stock, stars, reviews, id: sku, company, images } = item1
  
  console.log(item1)
  return (
    <div>
      {/* <PageHero title={name} item1={item1} /> */}
      <div className='single__product__heading'>
        <Link to='/products' className='single__product__link'>
          <h3>Back to products</h3> 
        </Link>
        <h3 className='single__product__name'>{name}</h3>

      </div>
      <div className="single__product__center">
        {/* <Link to='/products' className='btn'>
          back to products
        </Link> */}
        <div className="single__product__img">
          <ProductImages images={images} />
          <section className='content'>
            {/* <h2>{name}</h2> */}
            <div className='single__product__price'>
              <h4>Price</h4>
              <h4> {formatPrice(price)}</h4>
            </div>
            <Stars stars={stars} reviews={reviews}/>
            <hr />
            <h4 className='desc'>Description:</h4>
            <br/>
            <p className='desc'>{description}</p>
            <div className='single__product__info'>
              <p className='info'>
                <span>Available : </span>
                {stock > 0 ? 'In stock' : 'out of stock'}
              </p>
              <p className='info'>
                <span>SKU : </span>
                {sku}
              </p>
              <p className='info'>
                <span>Brand : </span>
                {company}
              </p>
            </div>
            <hr />
            <br />
            {stock > 0 && <AddToCart item1={item1} />}
          </section>
        </div>
      </div>
      <br />
    </div>
  ) 
}

export default SingleProductPage
