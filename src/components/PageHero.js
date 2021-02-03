import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <div>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>
          {
            product && <Link to='/products'>/Products</Link>
          }
          / {title}
        </h3>
      </div>
    </div>
  ) 
}

export default PageHero
