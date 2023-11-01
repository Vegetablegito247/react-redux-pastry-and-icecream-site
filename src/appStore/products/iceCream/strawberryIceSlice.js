import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    strawberryIceCream: [
        {
            id: 1,
            name: "Strawberry Sensation",
            title: "Creamy Strawberry Delight",
            price: 5000,
            stock: 20
        },
        {
            id: 2,
            name: "Strawberry Swirl",
            title: "Velvety Strawberry Swirl Fantasy",
            price: 4000,
            stock: 20
        },
        {
            id: 3,
            name: "Strawberry Cheesecake",
            title: "Divine Strawberry Cheesecake Bliss",
            price: 6000,
            stock: 20
        },
        {
            id: 4,
            name: "Strawberry Shortcake",
            title: "Classic Strawberry Shortcake Magic",
            price: 3500,
            stock: 20
        },
        {
            id: 5,
            name: "Strawberry Dream",
            title: "Whimsical Strawberry Dream Delight",
            price: 4500,
            stock: 20
        },
        {
            id: 6,
            name: "Strawberry Fields",
            title: "Sunny Strawberry Fields Adventure",
            price: 5500,
            stock: 20
        },
        {
            id: 7,
            name: "Strawberry Chocolate Chunk",
            title: "Decadent Strawberry Chocolate Indulgence",
            price: 7000,
            stock: 20
        },
        {
            id: 8,
            name: "Strawberry Mint Fusion",
            title: "Refreshing Strawberry Mint Delicacy",
            price: 3000,
            stock: 20
        },
        {
            id: 9,
            name: "Strawberry Almond Bliss",
            title: "Nutty Strawberry Almond Pleasure",
            price: 8000,
            stock: 20
        },
        {
            id: 10,
            name: "Strawberry Coconut Paradise",
            title: "Tropical Strawberry Coconut Escape",
            price: 6500,
            stock: 20
        }
    ]
}

const strawberryIceSlice = createSlice({
    name: 'strawberry icecream',
    initialState: initialState,
    reducers: {
        purchaseStrawberryIceCream: (state, action) => {
            const { strawberryId, quantity } = action.payload;
            const iceCream = state.strawberryIceCream.find((item) => item.id === strawberryId);

            if (iceCream) {
                if (iceCream.stock >= quantity) {
                    iceCream.stock -= quantity;
                    console.log('order successful');
                }
                else {
                    console.log('Out of stock');
                }
            }
        }
    }
})

export default strawberryIceSlice.reducer;
export const { purchaseStrawberryIceCream } = strawberryIceSlice.actions