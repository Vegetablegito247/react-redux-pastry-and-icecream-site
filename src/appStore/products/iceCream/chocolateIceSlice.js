import { createSlice } from "@reduxjs/toolkit";
import img1 from '../../productImg/iceCream/chocolate/ClassicChocolate.png';
import img2 from '../../productImg/iceCream/chocolate/DoubleDarkDelight.png';
import img3 from '../../productImg/iceCream/chocolate/MintChocolateChip.png';
import img4 from '../../productImg/iceCream/chocolate/RockyRoad.png';
import img5 from '../../productImg/iceCream/chocolate/WhiteChocolateRaspberry.png';
import img6 from '../../productImg/iceCream/chocolate/ChocolateFudgeBrownie.png';
import img7 from '../../productImg/iceCream/chocolate/ChocolatePeanutButter.png';
import img8 from '../../productImg/iceCream/chocolate/TripleChocolateSwirl.png';
import img9 from '../../productImg/iceCream/chocolate/SmoresSensation.png';
import img10 from '../../productImg/iceCream/chocolate/ChocolateHazelnutHeaven.png';

const initialState = {
    chocolateIceCream: [
        {
            id: 1,
            name: "Classic Chocolate",
            title: "Rich and Creamy Classic Chocolate Ice Cream",
            price: 2500,
            stock: 20,
            img: img1
        },
        {
            id: 2,
            name: "Double Dark Delight",
            title: "Indulgent Double Dark Chocolate Ice Cream",
            price: 2800,
            stock: 20,
            img: img2
        },
        {
            id: 3,
            name: "Mint Chocolate Chip",
            title: "Refreshing Mint Chocolate Chip Ice Cream",
            price: 2700,
            stock: 20,
            img: img3
        },
        {
            id: 4,
            name: "Rocky Road",
            title: "Decadent Rocky Road Chocolate Ice Cream",
            price: 3200,
            stock: 20,
            img: img4
        },
        {
            id: 5,
            name: "White Chocolate Raspberry",
            title: "Sweet White Chocolate Raspberry Swirl",
            price: 3100,
            stock: 20,
            img: img5
        },
        {
            id: 6,
            name: "Chocolate Fudge Brownie",
            title: "Loaded Chocolate Fudge Brownie Ice Cream",
            price: 3500,
            stock: 20,
            img: img6
        },
        {
            id: 7,
            name: "Chocolate Peanut Butter",
            title: "Creamy Chocolate Peanut Butter Bliss",
            price: 2900,
            stock: 20,
            img: img7
        },
        {
            id: 8,
            name: "Triple Chocolate Swirl",
            title: "Triple the Chocolate, Triple the Delight",
            price: 3800,
            stock: 20,
            img: img8
        },
        {
            id: 9,
            name: "S'mores Sensation",
            title: "Campfire-Inspired S'mores Chocolate Ice Cream",
            price: 3300,
            stock: 20,
            img: img9
        },
        {
            id: 10,
            name: "Chocolate Hazelnut Heaven",
            title: "Silky Chocolate Hazelnut Gelato",
            price: 2700,
            stock: 20,
            img: img10
        }
    ]
}

const chocolateIceSlice = createSlice({
    name: 'chocolate icecream',
    initialState: initialState,
    reducers: {
        purchaseChocolateIceCream: (state, action) => {
            const { chocolateId, quantity } = action.payload;
            const iceCream = state.chocolateIceCream.find((item) => item.id === chocolateId);

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

export default chocolateIceSlice.reducer;
export const { purchaseChocolateIceCream } = chocolateIceSlice.actions;