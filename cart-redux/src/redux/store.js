import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './cart/cartReducer'
import { productReducer } from './product/productReducer'

export default createStore(
    combineReducers({
        products: productReducer,
        cart: cartReducer
    }),
    composeWithDevTools(
        applyMiddleware(createLogger(), thunkMiddleware)
    )
)