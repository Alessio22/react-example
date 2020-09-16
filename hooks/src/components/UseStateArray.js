import React, {useState} from 'react'

function UseStateArray() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length + 1,
            value: `Item ${items.length + 1}`
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default UseStateArray
