import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vanillaIceCreams: [
        {
            id: 1,
            name: "Classic Vanilla",
            title: "Creamy Vanilla Delight",
            price: 3000,
            stock: 20,
        },
        {
            id: 2,
            name: "French Vanilla",
            title: "Elegant French Vanilla",
            price: 3500,
            stock: 20,
        },
        {
            id: 3,
            name: "Vanilla Bean",
            title: "Rich Vanilla Bean Indulgence",
            price: 2000,
            stock: 20,
        },
        {
            id: 4,
            name: "Vanilla Custard",
            title: "Smooth Vanilla Custard Bliss",
            price: 1400,
            stock: 20,
        },
        {
            id: 5,
            name: "Vanilla Fudge",
            title: "Decadent Vanilla Fudge Fantasy",
            price: 2800,
            stock: 20,
        },
        {
            id: 6,
            name: "Vanilla Almond",
            title: "Crunchy Vanilla Almond Delight",
            price: 3300,
            stock: 20,
        },
        {
            id: 7,
            name: "Vanilla Swirl",
            title: "Sensational Vanilla Swirl Sensation",
            price: 5000,
            stock: 20,
        },
        {
            id: 8,
            name: "Vanilla Caramel",
            title: "Sweet Vanilla Caramel Euphoria",
            price: 1000,
            stock: 20,
        },
        {
            id: 9,
            name: "Vanilla Berry",
            title: "Berry-licious Vanilla Bliss",
            price: 1600,
            stock: 20,
        },
        {
            id: 10,
            name: "Vanilla Cookie Dough",
            title: "Cookie Dough Vanilla Extravaganza",
            price: 4100,
            stock: 20,
        },
    ]
}

const vanillaIceSlice = createSlice({
    name: "vanilla",
    initialState: initialState,
    reducers: {
        purchaseVanillaIceCream: (state, action) => {
            const { vanillaId, quantity } = action.payload;
            const iceCream = state.vanillaIceCreams.find((item) => item.id === vanillaId);

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

export default vanillaIceSlice.reducer;
export const { purchaseVanillaIceCream } = vanillaIceSlice.actions;