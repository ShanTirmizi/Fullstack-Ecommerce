import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import { useUserContext } from '../context/user_context'
import {BottomNavigation, BottomNavigationAction, makeStyles, AppBar} from '@material-ui/core'
import { BsFillPersonPlusFill, BsPersonDashFill } from "react-icons/bs";
import './Navbar.css'
import { FaMoneyCheck } from "react-icons/fa"
import { useCartContext } from '../context/cart_context'



const useStyles = makeStyles({
  root: {
    color: 'var(--color-6)',
  },
  navbar: {
    backgroundColor: 'none',
  }
})
const Nav = () => {
  const classes = useStyles()
    const { clearCart } = useCartContext()
  const { myUser, loginWithRedirect, logout } = useUserContext()
  const [ value, setValue] = useState(0)
  return (
    <AppBar position="fixed" color="transparent" style={{top: "auto", bottom: '0'}}>
      <BottomNavigation
        style={{height: '5rem', display: 'flex', justifyContent: 'space-evenly', backgroundColor: 'var(--color-1)'}}
        className={classes.navbar}
        value={value}
        onChange={(event, newValue) => {
        setValue(newValue);
        }}
        showLabels
       >
       {
         links.map((link) => {
          const { id, text, url,icon } = link
          return (
            <>
              <Link  to={url} className='navbar__info'>
                <BottomNavigationAction key={id}   className={classes.root}
                style={{fontSize: '1.5rem'}} icon={icon} />
                <p className='navbar__info__p'>
                  {text}
                </p>
              </Link>
            </>

          )
         })
       }
       {
         myUser ? (
          <Link to='/checkout' className='navbar__info'>
            <BottomNavigationAction className={classes.root}
              style={{fontSize: '1.5rem'}} icon={<FaMoneyCheck />}/>
              <p className='navbar__info__p'>
                Checkout
              </p>
          </Link>
         ) : (
          <Link onClick={loginWithRedirect} className='navbar__info'>
            <BottomNavigationAction className={classes.root}
              style={{fontSize: '1.5rem'}} icon={<FaMoneyCheck />}/>
              <p className='navbar__info__p'>
                Checkout
              </p>
          </Link>
         )
       }

          {
            myUser ? (
            <Link  onClick={() => {
            clearCart()
            logout({returnTo:window.location.origin})}
          } className='navbar__info'>
              <BottomNavigationAction className={classes.root}
              style={{fontSize: '1.5rem'}} icon={<BsPersonDashFill />}/>
              <p className='navbar__info__p'>
                Logout
              </p>
            </Link>
            ) : (
              <Link className='navbar__info' onClick={loginWithRedirect}>
                <BottomNavigationAction className={classes.root}
                style={{fontSize: '1.5rem'}} icon={<BsFillPersonPlusFill />}/>
                <p className='navbar__info__p'>
                  Login
                </p>
            </Link>
            )
          }
      </BottomNavigation>
    </AppBar>
  ) 
}

export default Nav
