import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'
import './Filters.css'

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  console.log(companies)
  const colors = getUniqueValues(all_products, 'colors')
  // console.log(colors)
  return (
    <div className="content__top">
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* <div className='heading'>
            <h1>Ecom</h1>
            <div className="form__control__search">
              <input
                type='text'
                name='text'
                placeholder='search'
                className='search__input'
                value={text}
                onChange={updateFilters}
              />
            </div>
          </div>  */}
          {/* <div className='form__control'>
            <h5>category</h5>
            <div>
              {
                categories.map((cat, index) => {
                  return (
                    <button key={index}
                      onClick={updateFilters}
                      type='button'
                      name='category'
                      className={`${
                        category === cat.toLowerCase() ? 'active' : null
                      }`}>{cat}
                    </button>
                  ) 
                })
              }
            </div>
          </div> */}
          <div className='form__cat_price'>
            <div className="form__control">
              <h3 className="form__control__cat">Category</h3>
              <select name='company' value={company} onChange={updateFilters} className='company'>
                {
                  companies.map((com, index) => {
                    return (
                      <option key={index} value={com}>{com}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className="form__control top__price">
              <div className="form__control__price">
                <h3>Price</h3>
                <h3 className='price'>{formatPrice(price)}</h3>
              </div>
              <input
                type='range'
                name='price'
                className="form__control__slider"
                onChange={updateFilters}
                min={min_price}
                max={max_price}
                value={price}
                />
            </div>
          </div>
          {/* <div className="form__control shipping">
            <label htmlFor='shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              onChange={updateFilters}
              checked={shipping} />
          </div> */}
        </form>
        {/* <button type='button' className='clear__btn' onClick={clearFilters}>{' '} clear filters</button> */}
      </div>
    </div>
  ) 
}

export default Filters
