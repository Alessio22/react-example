import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cart/cartActions'
import ProductItemComponent from './ProductItemComponent'

function CartComponent() {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cart.map(p => (
                    <ProductItemComponent key={p.id} product={p}>
                        (x{p.quantity})
                        <button onClick={() => dispatch(removeFromCart(p))}>Remove from cart</button>
                    </ProductItemComponent>
                ))}
            </ul>
        </div>
    )
}

export default CartComponent
