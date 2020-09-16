import React, { useReducer } from 'react'

const initialState = 0
const countReducer = (state, action) => {
    let newState;
    switch (action) {
        case 'increment': newState = state + 1; break;
        case 'decrement': newState = state - 1; break;
        case 'reset': newState = initialState; break;
        default: newState = state; break;
    }
    return newState
};

function UseReduceOne() {
    const [count, countDispatch] = useReducer(countReducer, initialState)

    return (
        <div>
            <p>Count {count}</p>
            <button onClick={() => countDispatch('increment')}>Increment</button>
            <button onClick={() => countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default UseReduceOne
