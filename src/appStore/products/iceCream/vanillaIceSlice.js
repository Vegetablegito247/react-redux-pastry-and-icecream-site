import { createSlice } from "@reduxjs/toolkit";
import img1 from '../../productImg/iceCream/vanilla/ClassicVanilla.png';
import img2 from '../../productImg/iceCream/vanilla/FrenchVanilla.png';
import img3 from '../../productImg/iceCream/vanilla/VanillaBean.png';
import img4 from '../../productImg/iceCream/vanilla/VanillaCustard.png';
import img5 from '../../productImg/iceCream/vanilla/VanillaFudge.png';
import img6 from '../../productImg/iceCream/vanilla/VanillaAlmond.png';
import img7 from '../../productImg/iceCream/vanilla/VanillaSwirl.png';
import img8 from '../../productImg/iceCream/vanilla/VanillaCaramel.png';
import img9 from '../../productImg/iceCream/vanilla/VanillaBerry.png';
import img10 from '../../productImg/iceCream/vanilla/VanillaCookieDough.png';

const initialState = {
    vanillaIceCreams: [
        {
            id: 1,
            name: "Classic Vanilla",
            title: "Creamy Vanilla Delight",
            price: 3000,
            stock: 20,
            img: img1
        },
        {
            id: 2,
            name: "French Vanilla",
            title: "Elegant French Vanilla",
            price: 3500,
            stock: 20,
            img: img2
        },
        {
            id: 3,
            name: "Vanilla Bean",
            title: "Rich Vanilla Bean Indulgence",
            price: 2000,
            stock: 20,
            img: img3
        },
        {
            id: 4,
            name: "Vanilla Custard",
            title: "Smooth Vanilla Custard Bliss",
            price: 1400,
            stock: 20,
            img: img4
        },
        {
            id: 5,
            name: "Vanilla Fudge",
            title: "Decadent Vanilla Fudge Fantasy",
            price: 2800,
            stock: 20,
            img: img5
        },
        {
            id: 6,
            name: "Vanilla Almond",
            title: "Crunchy Vanilla Almond Delight",
            price: 3300,
            stock: 20,
            img: img6
        },
        {
            id: 7,
            name: "Vanilla Swirl",
            title: "Sensational Vanilla Swirl Sensation",
            price: 5000,
            stock: 20,
            img: img7
        },
        {
            id: 8,
            name: "Vanilla Caramel",
            title: "Sweet Vanilla Caramel Euphoria",
            price: 1000,
            stock: 20,
            img: img8
        },
        {
            id: 9,
            name: "Vanilla Berry",
            title: "Berry-licious Vanilla Bliss",
            price: 1600,
            stock: 20,
            img: img9
        },
        {
            id: 10,
            name: "Vanilla Cookie Dough",
            title: "Cookie Dough Vanilla Extravaganza",
            price: 4100,
            stock: 20,
            img: img10
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
        },
        resetVanIce: (state) => {
            return initialState
        }
    }
})

export default vanillaIceSlice.reducer;
export const { purchaseVanillaIceCream, resetVanIce } = vanillaIceSlice.actions;