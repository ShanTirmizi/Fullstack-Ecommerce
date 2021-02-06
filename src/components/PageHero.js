import React from 'react'
import { Link } from 'react-router-dom'
import './PageHero.css'

const PageHero = ({ title, product }) => {
  return (
    <div>
      <div className='page__heading'>
        <h1>
          <Link to='/' style={{textDecoration: 'none', color: 'var(--color-6)'}}>Ecom</Link>
          {/* {
            product && <Link to='/products'>/Products</Link>
          } */}
        </h1>
        <h1>
          {title}
        </h1>
      </div>
    </div>
  ) 
}

export default PageHero
