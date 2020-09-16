import React, { useState } from 'react'
import Form2 from './Form2'
import List2 from './List2'

function Todos2() {
    const [items, setItems] = useState([
        { id: 1, text: "primo" },
        { id: 2, text: "secondo" },
        { id: 3, text: "terzo" },
    ])

    const onSave = (itemToAdd) => {
        console.log("onSave", itemToAdd);
        setItems([...items, itemToAdd]);
    }

    const onRemove = (itemToRemove) => {
        console.log("onRemove", itemToRemove);
        const index = items.findIndex(item => item.id === itemToRemove.id)
        const newList = [...items]
        newList.splice(index, 1)
        setItems(newList);
    }

    return (
        <div>
            <Form2 onSave={onSave} />
            <List2 items={items} onRemove={onRemove} />
        </div>
    )
}

export default Todos2
