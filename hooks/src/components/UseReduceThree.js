import React, { useReducer } from 'react'

const initialState = 0
const countReducer = (state, action) => {
    switch (action) {
        case 'increment':return state + 1
        case 'decrement':return state - 1
        case 'reset':return initialState
        default:return state
    }
};

function UseReduceThree() {
    const [count, countDispatch] = useReducer(countReducer, initialState)
    const [count2, countDispatch2] = useReducer(countReducer, initialState)

    return (
        <div>
            <p>Count {count}</p>
            <button onClick={() => countDispatch('increment')}>Increment</button>
            <button onClick={() => countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
            <p>Count {count2}</p>
            <button onClick={() => countDispatch2('increment')}>Increment 2</button>
            <button onClick={() => countDispatch2('decrement')}>Decrement 2</button>
            <button onClick={() => countDispatch2('reset')}>Reset 2</button>
        </div>
    )
}

export default UseReduceThree
