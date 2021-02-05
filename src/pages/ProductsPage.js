import React from 'react'
import styled from 'styled-components'
import { Filters, ProductList, Sort, PageHero } from '../components'
import {dogData} from '../utils/constants'

const ProductsPage = () => {
  // console.log(dogData)
  return (
    <main>
      <PageHero title='Home'/>
      <div className='page'>
        <div className='section-center products'>
          {/* <Filters /> */}
          <div>
            <Filters />
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  ) 
}

export default ProductsPage
