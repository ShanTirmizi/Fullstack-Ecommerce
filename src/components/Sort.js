import React from 'react';
import { useFilterContext } from '../context/filter_context';
import './Sort.css';

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <div className="sortby">
      <form className="sortby__content">
        <label htmlFor="sort">Sort by </label>
        <select
          name="sort"
          id="sort"
          className="sort__input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-a">Name (A-Z)</option>
          <option value="name-z">Name (Z-A)</option>
        </select>
      </form>
      <p className="sortby__amount">{products.length} products found</p>
    </div>
  );
};

export default Sort;
