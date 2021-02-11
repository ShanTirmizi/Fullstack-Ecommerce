import React from 'react'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <div className='page section section-center'>
        <img src={aboutImg} alt='pic' />
        <artice>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>lorem lorem lorem lorem lorem loremloremlorem lorem 
          lorem lorem lorem loremlorem loremlorem lorem lorem lorem lorem 
          loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
        </artice>
      </div>
    </main>
  ) 
}

export default AboutPage
