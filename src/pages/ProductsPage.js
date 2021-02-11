import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'
import {dogData} from '../utils/constants'
import './ProductsPage.css'

const ProductsPage = () => {
  // console.log(dogData)
  return (
    <main>
      {/* <PageHero title='Home'/> */}
      <div className='page'>
        <div className='section-center products'>
          {/* <Filters /> */}
          <div>
            <div className="page__top">
              <Filters className="page__filters" />
              <Sort className="page__sort" />
            </div>
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  ) 
}

export default ProductsPage


