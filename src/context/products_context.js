import React, { useContext, useEffect, useReducer, useState } from 'react';
import reducer from '../reducers/products_reducer';
import { dogData as url } from '../utils/constants';
import axios from 'axios';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [ecomProducts, setEcomProducts] = useState([]);
  const [productPost, setProductPost] = useState({
    name: '',
  });

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: url });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: url });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };
  const fetchProductsApi = async () => {
    try {
      // const response = await fetch('http://localhost:3001/api/product');
      // const data = await response.json();
      axios.get('http://localhost:3001/api/product').then((res) => {
        setEcomProducts(res.data);
      });
      // console.log(data);
      // setEcomProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postProductApi = async () => {
    try {
      axios.post('http://localhost:3001/api/product', {
        name: productPost.name,
      });
    } catch (error) {}
  };
  const deleteProductsApi = async (id) => {
    try {
      // const response = await fetch('http://localhost:3001/api/product');
      // const data = await response.json();
      axios.delete(`http://localhost:3001/api/product/${id}`);
      // console.log(data);
      // setEcomProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(url);
    fetchProductsApi();
  }, []);

  console.log(ecomProducts, 'weerk');

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
        ecomProducts,
        postProductApi,
        setProductPost,
        productPost,
        deleteProductsApi,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
