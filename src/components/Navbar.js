import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import CartTotals from './CartTotals'
import {BottomNavigation, BottomNavigationAction, makeStyles, AppBar} from '@material-ui/core'
import { BsFillAlarmFill, BsFillAspectRatioFill, BsFillBagFill } from "react-icons/bs";
import './Navbar.css'

const useStyles = makeStyles({
  root: {
    // justifyContent: 'space-between',
  },
  navbar: {
    margin: '0 1rem',
    borderRadius: '20rem',
    backgroundColor: 'none',
  }
})
const Nav = () => {
  const classes = useStyles()

  
  const { openSidebar } = useProductsContext()
  const { myUser } = useUserContext()
  const [ value, setValue] = useState(0)
  return (
    // <div>
    //   <div className='nav-center'>
    //     <div className='nav-header'>
    //       <Link to='/'>
    //         <img src={logo} alt='logo' />
    //       </Link>
    //       <button type='button' className='nav-toggle' onClick={openSidebar}>
    //         <FaBars />
    //       </button>
    //     </div>
    //     <ul className='nav-links'>
    //       {
    //         links.map((link) => {
    //           const { id, text, url } = link
    //           return (
    //             <li key={id}>
    //               <Link to={url}>{text}</Link>
    //             </li>
    //           )
    //         })
    //       }
    //       {
    //         myUser && (
    //           <li>
    //             <Link to='/checkout'>checkout</Link>
    //           </li>
    //         )
    //       }
    //     </ul>
    //     <CartButtons />
    //   </div>
    // </div>
        //     <ul className='nav-links'>
    //       {
    //         links.map((link) => {
    //           const { id, text, url } = link
    //           return (
    //             <li key={id}>
    //               <Link to={url}>{text}</Link>
    //             </li>
    //           )
    //         })
    //       }
    //       {
    //         myUser && (
    //           <li>
    //             <Link to='/checkout'>checkout</Link>
    //           </li>
    //         )
    //       }
    //     </ul>
    // <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}}>
    //   <BottomNavigation
    //     style={{height: '20vh', display: 'flex', justifyContent: 'space-evenly'}}
    //     className={classes.navbar}
    //     value={value}
    //     onChange={(event, newValue) => {
    //     setValue(newValue);
    //     }}
    //     showLabels
    //     // className={classes.root}
    //    >
    //     <BottomNavigationAction   className={classes.root}
    //       style={{fontSize: '10vh'}} label="Recents" icon={<BsFillAlarmFill />} />
    //     <BottomNavigationAction   className={classes.root}
    //       style={{fontSize: '10vh'}} label="Favorites" icon={<BsFillAspectRatioFill />} />
    //     <BottomNavigationAction    className={classes.root}
    //       style={{fontSize: '10vh'}} label="Nearby" icon={<BsFillBagFill />} />
    //   </BottomNavigation>
    // </AppBar>
    <AppBar position="fixed" color="transparent" style={{top: "auto", bottom: '1rem'}}>
      <BottomNavigation
        style={{height: '5rem', display: 'flex', justifyContent: 'space-evenly', backgroundColor: 'blue'}}
        className={classes.navbar}
        value={value}
        onChange={(event, newValue) => {
        setValue(newValue);
        }}
        showLabels
        // className={classes.root}
       >
       {
         links.map((link) => {
          const { id, text, url,icon } = link
          return (
            <Link to={url} className='navbar__info'>
              <BottomNavigationAction key={id}   className={classes.root}
              style={{fontSize: '1rem'}} icon={icon} />
              <p className='navbar__info__p'>
                {text}
              </p>
            </Link>
          )
         })
       }
      </BottomNavigation>
    </AppBar>
  ) 
}

export default Nav
