import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

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
  const colors = getUniqueValues(all_products, 'colors')
  // console.log(colors)
  return (
    <div>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updateFilters}
             />
          </div>
          <div className='form-control'>
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
          </div>
          <div className="form-control">
            <h5>company</h5>
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
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {
                colors.map((col, index) => {
                  if (col === 'all') {
                    return (
                      <button key={index}
                        name='color'
                        onClick={updateFilters}
                        data-color='all'
                        className={`${
                          color === 'all' ? 'all-btn active' : 'all-btn' 
                         }`}>all</button>
                    )
                  }
                  return (
                    <button key={index} 
                    name='color'
                    style={{background: col}}
                    className={`${
                      color === col ? 'color-btn active' : 'color-btn'
                    }`} 
                    data-color={col}
                    onClick={updateFilters} >
                      {color === col ? <FaCheck /> : null}
                    </button>
                  )
                })
              }
            </div>
          </div>
          <div className="form-control">
            <h5>price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price' 
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
              />
          </div>
          <div className="form-control shipping">
            <label htmlFor='shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              onChange={updateFilters}
              checked={shipping} />
          </div>
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>{' '} clear filters</button>
      </div>
    </div>
  ) 
}

export default Filters
