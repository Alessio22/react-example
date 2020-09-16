import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}
const countReducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement': return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2': return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2': return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset': return initialState
        default: return state
    }
};

function UseReducerTwo() {
    const [count, countDispatch] = useReducer(countReducer, initialState)

    return (
        <div>
            {JSON.stringify(count)}
            <p>Count {count.firstCounter}</p>
            <button onClick={() => countDispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => countDispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => countDispatch({ type: 'increment', value: 5 })}>Increment x 5</button>
            <button onClick={() => countDispatch({ type: 'decrement', value: 5 })}>Decrement x 5</button>
            <button onClick={() => countDispatch({ type: 'reset' })}>Reset</button>
            <p>Count2 {count.secondCounter}</p>
            <button onClick={() => countDispatch({ type: 'increment2', value: 1 })}>Increment2</button>
            <button onClick={() => countDispatch({ type: 'decrement2', value: 1 })}>Decrement2</button>
            <button onClick={() => countDispatch({ type: 'increment2', value: 5 })}>Increment2 x 5</button>
            <button onClick={() => countDispatch({ type: 'decrement2', value: 5 })}>Decrement2 x 5</button>
            <button onClick={() => countDispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default UseReducerTwo
