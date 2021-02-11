import React from 'react'
import './Search.css'
import { useFilterContext } from '../context/filter_context'


const Search = () => {
    const {
        filters: {
          text,
        },
        updateFilters,
      } = useFilterContext()
    return (
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='heading'>
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
          </div>
        </form>
    )
}

export default Search
