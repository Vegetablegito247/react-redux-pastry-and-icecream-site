import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cookiesAndCreamIcecream: [
        {
            id: 1,
            name: "Classic Cookies & Cream",
            title: "Creamy Delight",
            price: 3000,
            stock: 20
        },
        {
            id: 2,
            name: "Double Chocolate Cookie Fudge",
            title: "Chocoholic's Dream",
            price: 4000,
            stock: 20
        },
        {
            id: 3,
            name: "Mint Chocolate Chip Cookie",
            title: "Minty Cookie Bliss",
            price: 3500,
            stock: 20
        },
        {
            id: 4,
            name: "Peanut Butter Oreo Swirl",
            title: "Nutty Oreo Swirl",
            price: 4500,
            stock: 20
        },
        {
            id: 5,
            name: "Strawberry Shortcake Cookie",
            title: "Berry Cookie Fantasy",
            price: 3200,
            stock: 20
        },
        {
            id: 6,
            name: "Salted Caramel Cookie Crunch",
            title: "Caramel Crunch Delight",
            price: 3800,
            stock: 20
        },
        {
            id: 7,
            name: "Coffee Toffee Cookie Blast",
            title: "Coffee Cookie Extravaganza",
            price: 5000,
            stock: 20
        },
        {
            id: 8,
            name: "White Chocolate Macadamia Nut",
            title: "White Delight Supreme",
            price: 4200,
            stock: 20
        },
        {
            id: 9,
            name: "Cinnamon Snickerdoodle Crunch",
            title: "Cinnamon Cookie Bliss",
            price: 3700,
            stock: 20
        },
        {
            id: 10,
            name: "Rocky Road Cookie Explosion",
            title: "Choc-Rock Cookie Blast",
            price: 4800,
            stock: 20
        }
    ]
}

const cookiesAndCreamIceSlice = createSlice({
    name: 'cookies and cream',
    initialState: initialState,
    reducers: {
        purchaseCookiesIceCream: (state, action) => {
            const { cookieId, quantity } = action.payload;
            const iceCream = state.cookiesAndCreamIcecream.find((item) => item.id === cookieId);

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

export default cookiesAndCreamIceSlice.reducer;
export const { purchaseCookiesIceCream } = cookiesAndCreamIceSlice.actions;