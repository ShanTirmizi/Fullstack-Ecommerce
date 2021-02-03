import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import CartTotals from './CartTotals'

const Nav = () => {
  const { openSidebar } = useProductsContext()
  const { myUser } = useUserContext()
  return (
    <div>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {
            links.map((link) => {
              const { id, text, url } = link
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              )
            })
          }
          {
            myUser && (
              <li>
                <Link to='/checkout'>checkout</Link>
              </li>
            )
          }
        </ul>
        <CartButtons />
      </div>
    </div>
  ) 
}

export default Nav
