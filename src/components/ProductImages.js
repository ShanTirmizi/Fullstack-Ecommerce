import React, { useState } from 'react'
import './ProductImages.css'
import { useParams } from 'react-router-dom';
import {dogData} from '../utils/constants'


const ProductImages = ({ images = [{ url:''}] }) => {
  let { id } = useParams();
  const mainData = dogData.find((x) => x.id === id)
  const mainImg = mainData.images[0]

  const [main, setMain] = useState(mainImg)


  return (
    <div className='product__images'>
      <img src={main.url === '' ?  images[0].url : main.url} alt='main pic' className='product__main' />
      <div className="product__secondary">
        {
          images.slice(0,3).map((image, index) => {
            return (
              <img src={image.url} alt={image.filename} key={image.id} onClick={() => setMain(images[index])}
                className={`${image.url === main.url && 'active'}`} />
            )
          })
        }
      </div>
    </div>
  ) 
}

export default ProductImages
