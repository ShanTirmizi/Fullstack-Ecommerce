import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'
import styled from 'styled-components'
import CartButtons from './CartButtons'
import { useUserContext } from '../context/user_context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext()

  return (
    <div>
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <img src={logo} alt='logo' />
          <button className='close-btn' type='button' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {
            links.map(({ id, text, url }) => {
              return (
                <li key={id}>
                  <Link to={url} onClick={closeSidebar}>{text}</Link>
                </li>
              )
            })
          }
          {
            myUser && (
              <li>
                <Link to='/checkout' onClick={closeSidebar}>checkout</Link>
             </li>
            )
          }

        </ul>
        <CartButtons />
      </aside>
    </div>
  )
}

export default Sidebar
