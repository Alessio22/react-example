import React from 'react'
import { useSelector } from 'react-redux'

function HeaderComponent() {
    const numOfProducts = useSelector((state) => state.cart.reduce((acc, item) => (acc + item.quantity), 0))

    return (
        <nav>
            Cart ({numOfProducts})
        </nav>
    )
}

export default HeaderComponent
