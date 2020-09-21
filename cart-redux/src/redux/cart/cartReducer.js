import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartActions"

const addToCart = (state, product) => {
    const newState = [...state];
    newState.itemCount++
    const productInCart = newState.find(i => i.id === product.id)
    if (productInCart) {
        productInCart.quantity++;
    } else {
        newState.push({ ...product, quantity: 1 })
    }
    return newState
}

const removeFromCart = (state, product) => {
    const newState = [...state];
    newState.itemCount--
    const idx = newState.findIndex(i => i.id === product.id)
    newState[idx].quantity--;
    if (newState[idx].quantity === 0) {
        newState.splice(idx, 1)
    }
    return newState
}

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART: return addToCart(state, action.product);
        case REMOVE_FROM_CART: return removeFromCart(state, action.productId);
        default: return state;
    }
}