import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <div>
      <div className='section-center'>
        <h3>
          <Link to='/'>Ecom</Link> / {title}

          {/* {
            product && <Link to='/products'>/Products</Link>
          } */}
        </h3>
      </div>
    </div>
  ) 
}

export default PageHero
