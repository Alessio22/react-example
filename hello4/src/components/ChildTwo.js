import React from 'react'

const ChildTwo = React.forwardRef((props, ref) => {
    return (
        <div>
            <input ref={ref}/>
        </div>
    )
})

export default ChildTwo
