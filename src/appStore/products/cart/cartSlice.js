import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const { item, quantity } = action.payload;
            const itemInCart = state.cartItems.find((cartItem) => cartItem.id === item.id);

            if (itemInCart) {
                itemInCart.quantity += quantity;
                state.totalPrice += item.price * quantity;
            }
            else {
                state.cartItems.push({ ...item, quantity });
                state.totalPrice += item.price * quantity;
            }
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            const itemToRemove = state.cartItems.find((item) => item.id === itemId);

            if (itemToRemove) {
                state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
                state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
            }
        },
        increment: (state, action) => {
            const itemId = action.payload;
            const itemInCart = state.cartItems.find((cartItem) => cartItem.id === itemId);

            if (itemInCart) {
                itemInCart.quantity++;
                state.totalPrice += itemInCart.price;
            };
        },
        decrement: (state, action) => {
            const itemId = action.payload;
            const itemInCart = state.cartItems.find((cartItem) => cartItem.id === itemId);

            if (itemInCart && itemInCart.quantity > 1) {
                itemInCart.quantity -= 1;
                state.totalPrice -= itemInCart.price;
            };
        },
        resetCart: (state) => {
            // Reset the state to its initial values
            return initialState;
        }
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increment, decrement, resetCart } = cartSlice.actions;