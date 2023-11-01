import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    strawberryPastries: [
        {
            id: 1,
            name: 'Strawberry Shortcake',
            title: 'Heavenly Strawberry Shortcake Delight',
            price: 5000,
            stock: 20,
        },
        {
            id: 2,
            name: 'Strawberry Cheesecake',
            title: 'Creamy Strawberry Cheesecake Indulgence',
            price: 6500,
            stock: 20,
        },
        {
            id: 3,
            name: 'Strawberry Danish',
            title: 'Flaky Strawberry-Filled Danish Pastry',
            price: 3500,
            stock: 20,
        },
        {
            id: 4,
            name: 'Strawberry Macaron',
            title: 'Delicate Strawberry Macaroon Bliss',
            price: 4500,
            stock: 20,
        },
        {
            id: 5,
            name: 'Strawberry Tarts',
            title: 'Fresh Strawberry Tarts Perfection',
            price: 5500,
            stock: 20,
        },
        {
            id: 6,
            name: 'Strawberry Mousse Cake',
            title: 'Strawberry Mousse Cake Sensation',
            price: 7000,
            stock: 20,
        },
        {
            id: 7,
            name: 'Strawberry Cupcakes',
            title: 'Bite-sized Strawberry Cupcake Joy',
            price: 3000,
            stock: 20,
        },
        {
            id: 8,
            name: 'Strawberry Eclairs',
            title: 'Strawberry-Filled Eclair Delight',
            price: 4000,
            stock: 20,
        },
        {
            id: 9,
            name: 'Strawberry Cinnamon Roll',
            title: 'Warm Strawberry Cinnamon Roll Comfort',
            price: 3200,
            stock: 20,
        },
        {
            id: 10,
            name: 'Strawberry Cream Puff',
            title: 'Creamy Strawberry Cream Puff Fantasy',
            price: 4800,
            stock: 20,
        },
        {
            id: 11,
            name: 'Strawberry Croissant',
            title: 'Flaky Strawberry Croissant Delight',
            price: 3700,
            stock: 20,
        },
        {
            id: 12,
            name: 'Strawberry Tiramisu',
            title: 'Strawberry Tiramisu Temptation',
            price: 6200,
            stock: 20,
        },
        {
            id: 13,
            name: 'Strawberry Muffins',
            title: 'Homemade Strawberry Muffin Joy',
            price: 2500,
            stock: 20,
        },
        {
            id: 14,
            name: 'Strawberry Bread Pudding',
            title: 'Warm Strawberry Bread Pudding Comfort',
            price: 4200,
            stock: 20,
        },
        {
            id: 15,
            name: 'Strawberry Chocolate Tart',
            title: 'Strawberry Chocolate Tart Indulgence',
            price: 5500,
            stock: 20,
        },
        {
            id: 16,
            name: 'Strawberry Almond Cake',
            title: 'Almond-Infused Strawberry Cake Delight',
            price: 7000,
            stock: 20,
        },
        {
            id: 17,
            name: 'Strawberry Coconut Macaroon',
            title: 'Coconut-Strawberry Macaroon Bliss',
            price: 4500,
            stock: 20,
        },
        {
            id: 18,
            name: 'Strawberry Lemonade Tart',
            title: 'Tangy Strawberry Lemonade Tart Joy',
            price: 5200,
            stock: 20,
        },
        {
            id: 19,
            name: 'Strawberry Pecan Pie',
            title: 'Pecan-Strawberry Pie Perfection',
            price: 6800,
            stock: 20,
        },
        {
            id: 20,
            name: 'Strawberry Oatmeal Cookies',
            title: 'Chewy Strawberry Oatmeal Cookies Delight',
            price: 3000,
            stock: 20,
        },
    ]
}

const strawBerrySlice = createSlice({
    name: 'strawberry',
    initialState: initialState,
    reducers: {
        purchaseStrawberry: (state, action) => {
            const { strawberryId, quantity } = action.payload;
            const pastry = state.strawberryPastries.find((item) => item.id === strawberryId)

            if(pastry) {
                if(pastry.stock >= quantity) {
                    pastry.stock -= quantity;
                    console.log('order successful');
                }
                else {
                    console.log('Out of stock');
                }
            }
        }
    }
})

export default strawBerrySlice.reducer;
export const { purchaseStrawberry } = strawBerrySlice.actions;