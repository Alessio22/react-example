import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cart/cartActions'
import { fetchProducts } from '../redux/product/productActions'
import ProductItemComponent from './ProductItemComponent'

function ProductsComponent() {
    const productsState = useSelector((state) => state.products)
    console.log(productsState);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            <h1>Products</h1>
            {productsState.loading && <p>Loading...</p>}
            {!productsState.loading && productsState.error && <p style={{ color: "red" }}>Error: {productsState.error.message}</p>}
            {!productsState.loading && !productsState.error && (
                <ul>
                    {productsState.products.map(p => (
                        <ProductItemComponent key={p.id} product={p}>
                            <button onClick={() => dispatch(addToCart(p))}>Add to cart</button>
                        </ProductItemComponent>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ProductsComponent
