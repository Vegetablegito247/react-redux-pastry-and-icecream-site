import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const { item, quantity } = action.payload;
            const itemInCart = state.cartItems.find((cartItem) => cartItem.id === item.id);

            if(itemInCart) {
                itemInCart.quantity += quantity;
            }
            else{
                state.cartItems.push({...item, quantity})
            }
        }
    }
})

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;