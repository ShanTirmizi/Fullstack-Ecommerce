import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Sorry, this page does not exists</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </div>
  ) 
}

export default ErrorPage
