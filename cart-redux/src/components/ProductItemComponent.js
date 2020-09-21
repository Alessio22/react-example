import React from 'react'

function ProductItemComponent(props) {
    if (!props.product) return null;
    return (
        <li>
            {props.product.name}
            {props.children}
        </li>
    )
}

export default ProductItemComponent
