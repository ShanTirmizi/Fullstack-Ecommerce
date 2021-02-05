import React, { useState } from 'react'
import styled from 'styled-components'
import './ProductImages.css'

const ProductImages = ({ images = [{ url:''}] }) => {
  const [main, setMain] = useState(images[0].url)
  // console.log(main)
  return (
    <div className='product__images'>
      <img src={main} alt='main' className='product__main' />
      <div className="product__secondary">
        {
          images.slice(0, 3).map((image, index) => {
            return (
              <img src={image.url} alt={image.filename} key={index} onClick={() => setMain(images[index])}
                className={`${image.url === main.url && 'active'}`} />
            )
          })
        }
      </div>
    </div>
  ) 
}

export default ProductImages
