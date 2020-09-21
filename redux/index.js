const axios = require('axios')
const redux = require('redux')
const loggerMiddleware = require('redux-logger').createLogger()
const thunkMiddleware = require('redux-thunk').default

// cake
const BUY_CAKE = 'BUY_CAKE'
const SELL_CAKE = 'SELL_CAKE'

const buyCake = (amount) => ({ type: BUY_CAKE, amount })
const sellCake = (amount) => ({ type: SELL_CAKE, amount })

const cakeinitialState = { numberOfCake: 0 }

const cakeReducer = (state = cakeinitialState, { type, amount }) => {
    console.log('CAKE DISPATCH ' + type);
    switch (type) {
        case BUY_CAKE: return { ...state, numberOfCake: state.numberOfCake + amount }
        case SELL_CAKE: return { ...state, numberOfCake: state.numberOfCake - amount }
        default: return state;
    }
}

// users
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

const fetchusersRequest = () => {
    return { type: FETCH_USERS_REQUEST }
}
const fetchusersSuccess = (users) => {
    return { type: FETCH_USERS_SUCCESS, users }
}
const fetchusersError = (error) => {
    return { type: FETCH_USERS_ERROR, error }
}

const usersInitialState = {
    loading: false,
    users: [],
    error: ''
}
const usersReducer = (state = usersInitialState, { type, users, error }) => {
    switch (type) {
        case FETCH_USERS_REQUEST: return { ...state, loading: true, users: [], error: '' }
        case FETCH_USERS_SUCCESS: return { ...state, loading: false, users, error: '' }
        case FETCH_USERS_ERROR: return { ...state, loading: false, users: [], error }
        default: return state;
    }
}

const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    users: usersReducer
})

const fetchusers = () => {
    return (dispatch) => {
        dispatch(fetchusersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => dispatch(fetchusersSuccess(response.data.map(p => p.id))))
            .catch(error => dispatch(fetchusersError(error)))
    }
}


const store = redux.createStore(rootReducer, redux.applyMiddleware(loggerMiddleware, thunkMiddleware))

console.log('initial state', store.getState());

store.dispatch(buyCake(10))
console.log('post dispatch buyCake', store.getState());

store.dispatch(sellCake(5))
console.log('post dispatch sellCake', store.getState());

store.dispatch(fetchusers())