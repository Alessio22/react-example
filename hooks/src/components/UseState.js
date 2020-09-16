import React, {useState} from 'react'

function UseState() {
    const initialState = 0
    const [count, setCount] = useState(initialState)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1);
            setCount((prevCount) => prevCount + 1);
        }
    }

    return (
        <div>
            Count {count}
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default UseState
