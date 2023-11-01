import { createSlice } from '@reduxjs/toolkit';

const initialStates = {
    chocolatePastries: [
        {
            id: 1,
            name: "Double Chocolate Eclair",
            title: "Decadent Chocolate Eclair",
            price: 3000,
            stock: 18
        },
        {
            id: 2,
            name: "Choco-Hazelnut Croissant",
            title: "Hazelnut Delight Croissant",
            price: 2800,
            stock: 16
        },
        {
            id: 3,
            name: "Molten Lava Cake",
            title: "Warm Chocolate Volcano",
            price: 4000,
            stock: 14
        },
        {
            id: 4,
            name: "Chocolate Mousse Tart",
            title: "Silky Chocolate Mousse Tart",
            price: 3200,
            stock: 20
        },
        {
            id: 5,
            name: "Triple Chocolate Brownie",
            title: "Ultimate Brownie Bliss",
            price: 2500,
            stock: 17
        },
        {
            id: 6,
            name: "White Chocolate Raspberry Puff",
            title: "Raspberry-Chocolate Delight",
            price: 3500,
            stock: 19
        },
        {
            id: 7,
            name: "Chocolate Almond Twist",
            title: "Almond Chocolate Swirl",
            price: 2700,
            stock: 15
        },
        {
            id: 8,
            name: "Choco-Orange Tart",
            title: "Zesty Chocolate Orange Tart",
            price: 3300,
            stock: 12
        },
        {
            id: 9,
            name: "Dark Chocolate Caramel Slice",
            title: "Caramel Chocolate Indulgence",
            price: 3800,
            stock: 13
        },
        {
            id: 10,
            name: "Chocolate Peanut Butter Cupcake",
            title: "Peanut Butter Chocolate Bliss",
            price: 2600,
            stock: 20
        },
        {
            id: 11,
            name: "Choco-Cherry Danish",
            title: "Cherry Chocolate Swirl Danish",
            price: 2900,
            stock: 16
        },
        {
            id: 12,
            name: "Mint Chocolate Whoopie Pie",
            title: "Minty Chocolate Treat",
            price: 3100,
            stock: 18
        },
        {
            id: 13,
            name: "Chocolate Macaron Tower",
            title: "Elegant Macaron Delight",
            price: 4500,
            stock: 10
        },
        {
            id: 14,
            name: "Chocolate-Orange Scone",
            title: "Citrus Chocolate Scone",
            price: 2700,
            stock: 14
        },
        {
            id: 15,
            name: "Dark Chocolate Cheesecake",
            title: "Rich Chocolate Cheesecake",
            price: 3900,
            stock: 11
        },
        {
            id: 16,
            name: "Chocolate Caramel Éclair",
            title: "Caramel Chocolate Eclair",
            price: 3200,
            stock: 17
        },
        {
            id: 17,
            name: "Raspberry-Chocolate Croissant",
            title: "Raspberry Chocolate Twist",
            price: 3000,
            stock: 16
        },
        {
            id: 18,
            name: "Double Chocolate Biscotti",
            title: "Crunchy Chocolate Biscotti",
            price: 2500,
            stock: 19
        },
        {
            id: 19,
            name: "Chocolate Almond Macaron",
            title: "Almond Chocolate Delight",
            price: 2800,
            stock: 15
        },
        {
            id: 20,
            name: "Chocolate Banana Bread",
            title: "Banana-Chocolate Bliss",
            price: 2900,
            stock: 14
        }
    ]
}

const chocolateSlices = createSlice({
    name: 'chocolates',
    initialState: initialStates,
    reducers: {
        purchaseChocolate: (state, action) => {
            const { chocolateId, quantity } = action.payload;
            const pastry = state.chocolatePastries.find((item) => item.id === chocolateId);

            if (pastry) {
                if (pastry.stock >= quantity) {
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

export default chocolateSlices.reducer;
export const { purchaseChocolate } = chocolateSlices.actions;