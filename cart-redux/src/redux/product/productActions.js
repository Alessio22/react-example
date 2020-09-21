const axios = require('axios')

export const FETCH_PRODUCTS_REQUEST = '[PRODUCT] FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = '[PRODUCT] FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = '[PRODUCT] FETCH_PRODUCTS_ERROR';

const fetchProductsRequest = () => {
    return { type: FETCH_PRODUCTS_REQUEST }
}
const fetchProductsSuccess = (data) => {
    return { type: FETCH_PRODUCTS_SUCCESS, data: data }
}
const fetchProductsError = (error) => {
    return { type: FETCH_PRODUCTS_ERROR, error: error }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => dispatch(fetchProductsSuccess(response.data)))
            .catch(error => dispatch(fetchProductsError(error.toJSON())))
    }
}