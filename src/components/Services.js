import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <div>
      <div className="section-center">
        <article className="header">
          <h3>
            custom furniture <br />
            built only for you
          </h3>
          <p>
            Ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>
        </article>
        <div className="services-center">
          {
            services.map((service) => {
              const { id, icon, title, text } = service;
              return (
                <article key={id} className='service'>
                  <span className='icon'>{icon}</span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              )
            })
          }
        </div>
      </div>
    </div>
  ) 
}

export default Services
