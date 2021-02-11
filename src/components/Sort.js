import React from 'react'
import { useFilterContext } from '../context/filter_context'
import './Sort.css'

const Sort = () => {
  const { filtered_products: products, grid_view, setGridView, setListView, sort, updateSort } = useFilterContext()

  return (
    <div className='sortby'>
      <form className='sortby__content'>
        <label htmlFor='sort'>Sort by </label>
        <select name='sort' id='sort' className='sort__input' value={sort} onChange={updateSort}>
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
      <p className='sortby__amount'>{products.length} products found</p>
    </div>
  )
}

export default Sort
