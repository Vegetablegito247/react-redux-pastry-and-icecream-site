import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mintChocolateChipIceCream: [
        {
            id: 1,
            name: "Classic Mint Chocolate Chip",
            title: "The Timeless Favorite: Creamy Mint with Chocolate Chips",
            price: 3000,
            stock: 20
        },
        {
            id: 2,
            name: "Double Chocolate Mint Delight",
            title: "Rich Chocolate Ice Cream Infused with Mint Flavor and Chunks of Dark Chocolate",
            price: 4000,
            stock: 20
        },
        {
            id: 3,
            name: "Minty Brownie Bliss",
            title: "Mint Ice Cream Swirled with Fudge and Brownie Bits",
            "price": 4500,
            stock: 20
        },        {
            id: 4,
            name: "Mint Chip Cookie Dough",
            title: "Mint Ice Cream Loaded with Chocolate Chips and Gobs of Cookie Dough",
            price: 5000,
            stock: 20
        },
        {
            id: 5,
            name: "Peppermint Patty Perfection",
            title: "Cooling Peppermint Ice Cream with Chunks of Dark Chocolate and a Hint of Mint",
            price: 5500,
            stock: 20
        },
        {
            id: 6,
            name: "Minty Oreo Crush",
            title: "Mint Ice Cream with Crushed Oreo Cookies for a Sweet and Refreshing Treat",
            price: 6000,
            stock: 20
        },
        {
            id: 7,
            name: "Mint Chocolate Chip Cheesecake",
            title: "Mint Chocolate Chip Ice Cream with Swirls of Creamy Cheesecake",
            price: 7000,
            stock: 20
        },
        {
            id: 8,
            name: "White Mint Chocolate Chip", 
            title: "A Unique Twist: White Chocolate Chips in Refreshing Mint Ice Cream",
            price: 7500,
            stock: 20
        },
        {
            id: 9,
            name: "Minty Chocolate Almond Crunch",
            title: "Mint Ice Cream Loaded with Chocolate Chunks and Crunchy Almonds",
            price: 8000,
            stock: 20
        },
        {
            id: 10,
            name: "Dark Chocolate Mint Avalanche",
            title: "Intense Dark Chocolate Infused with Cool Mint for a Chocoholic's Dream",
            price: 9000,
            stock: 20
        }
    ]
}

const mintChocolateChipIceSlice = createSlice({
    name: 'mint chocolate chip',
    initialState: initialState,
    reducers: {
        purchaseMintChocolateIceCream: (state, action) => {
            const { mintId, quantity } = action.payload;
            const iceCream = state.mintChocolateChipIceCream.find((item) => item.id === mintId);

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

export default mintChocolateChipIceSlice.reducer;
export const { purchaseMintChocolateIceCream } = mintChocolateChipIceSlice.actions;