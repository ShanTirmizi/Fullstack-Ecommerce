import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: ''}] }) => {
  const [main, setMain] = useState(images[0].url)
  // console.log(main)
  return (
    <div>
      <img src={main} alt='main pic' className='main' />
      <div className="gallery">
        {
          images.map((image, index) => {
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
