import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import './Filters.css'

const Filters = () => {
  const {
    filters: {
      company,
      min_price,
      price,
      max_price,
    },
    updateFilters,
    all_products,
  } = useFilterContext()

  const companies = getUniqueValues(all_products, 'company')
  return (
    <div className="content__top">
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
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
        </form>
      </div>
    </div>
  ) 
}

export default Filters
