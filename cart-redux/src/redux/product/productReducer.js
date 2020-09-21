import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from "./productActions";

const initialState = {loading: true, products: [], error: {}}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST: return initialState;
        case FETCH_PRODUCTS_SUCCESS: return {loading: false, products: action.data, error: ''};
        case FETCH_PRODUCTS_ERROR: return {...state, loading: false, error: action.error};
        default: return state;
    }
}