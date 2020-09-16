import React, {useState} from 'react'
import UseEffectThree from './UseEffectThree'

function UseEffectFour() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {display && <UseEffectThree />}
        </div>
    )
}

export default UseEffectFour
