import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <div>
      <div className="section-center">
        <h3>Join out newsletter</h3>
        <div className="content">
          <p>
            Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <form 
              action="https://formspree.io/f/xqkgjzrz"
              method="POST"
              className='contact-form'>
            <input
              type='email'
              name="_replyto"
              className='form-input'
              placeholder='enter email' />
            <button type='submit' className='submit-btn'>subscribe</button>
          </form>
        </div>
      </div>
    </div>
  ) 
}

export default Contact
