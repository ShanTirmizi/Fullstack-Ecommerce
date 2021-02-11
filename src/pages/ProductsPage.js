import React from 'react'
import { Filters, ProductList, Sort, Search } from '../components'
import './ProductsPage.css'

const ProductsPage = () => {
  // console.log(dogData)
  return (
    <main>
      <div className='page'>
        <div className='section-center products'>
          <div>
            <Search className="page__search" />
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


