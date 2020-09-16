import React, { useState, useMemo } from 'react'

function UseMemo() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const isEven = () => {
        let i = 0;
        while (i < 1000000000) i++;
        return count1 % 2 === 0;
    };

    // const isEven = useMemo(() => {
    //     let i = 0;
    //     while (i < 1000000000) i++;
    //     return count1 % 2 === 0;
    // }, [count1]);

    return (
        <div>
            <p>{count1} - {isEven() ? 'Even' : 'Odd'}</p>
            {/* <p>{count1} - {isEven ? 'Even' : 'Odd'}</p> */}
            <button onClick={() => setCount1(count1 + 1)}>Increment 1</button>
            <p>{count2}</p>
            <button onClick={() => setCount2(count2 + 1)}>Increment 2</button>
        </div>
    )
}

export default UseMemo
