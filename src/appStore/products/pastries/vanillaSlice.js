import { createSlice } from "@reduxjs/toolkit";
import img1 from '../../productImg/pastry/vanilla/VanillaBeanCheesecake.png';
import img2 from '../../productImg/pastry/vanilla/VanillaCupcake.png';
import img3 from '../../productImg/pastry/vanilla/VanillaCreamPuff.png';
import img4 from '../../productImg/pastry/vanilla/VanillaStrawberryShortcake.png';
import img5 from '../../productImg/pastry/vanilla/VanillaCustardTart.png';
import img6 from '../../productImg/pastry/vanilla/VanillaMacaron.png';
import img7 from '../../productImg/pastry/vanilla/VanillaMille-Feuille.png';
import img8 from '../../productImg/pastry/vanilla/VanillaRicePudding.png';
import img9 from '../../productImg/pastry/vanilla/VanillaCremeBrulee.png';
import img10 from '../../productImg/pastry/vanilla/VanillaAlmondDanish.png';
import img11 from '../../productImg/pastry/vanilla/VanillaPannaCotta.png';
import img12 from '../../productImg/pastry/vanilla/VanillaEclairs.png';
import img13 from '../../productImg/pastry/vanilla/VanillaWhoopiePie.png';
import img14 from '../../productImg/pastry/vanilla/VanillaTiramisu.png';
import img15 from '../../productImg/pastry/vanilla/VanillaBreadPudding.png';
import img16 from '../../productImg/pastry/vanilla/VanillaPecanPie.png';
import img17 from '../../productImg/pastry/vanilla/VanillaCherryStrudel.png';
import img18 from '../../productImg/pastry/vanilla/VanillaCoconutMacaroon.png';
import img19 from '../../productImg/pastry/vanilla/VanillaOrangeBlossomCake.png';
import img20 from '../../productImg/pastry/vanilla/VanillaCaramelSlice.png';

const initialState = {
    vanillaPastries: [
        {
            id: 1,
            name: 'Vanilla Bean Cheesecake',
            title: 'Creamy Vanilla Bean Delight',
            price: 1800,
            stock: 30,
            img: img1
        },
        {
            id: 2,
            name: 'Vanilla Cupcake',
            title: 'Vanilla Bliss in a Cup',
            price: 1500,
            stock: 30,
            img: img2
        },
        {
            id: 3,
            name: 'Vanilla Cream Puff',
            title: 'Elegant Vanilla Cream Puff',
            price: 2000,
            stock: 30,
            img: img3
        },
        {
            id: 4,
            name: 'Vanilla Strawberry Shortcake',
            title: 'Strawberry-Vanilla Perfection',
            price: 2500,
            stock: 25,
            img: img4
        },
        {
            id: 5,
            name: 'Vanilla Custard Tart',
            title: 'Velvety Vanilla Custard Indulgence',
            price: 3000,
            stock: 30,
            img: img5
        },
        {
            id: 6,
            name: 'Vanilla Macaron',
            title: 'Delicate Vanilla Macaroon',
            price: 4000,
            stock: 30,
            img: img6
        },
        {
            id: 7,
            name: 'Vanilla Mille-Feuille',
            title: 'Layered Vanilla Elegance',
            price: 5000,
            stock: 30,
            img: img7
        },
        {
            id: 8,
            name: 'Vanilla Rice Pudding',
            title: 'Warm Vanilla Rice Comfort',
            price: 2000,
            stock: 30,
            img: img8
        },
        {
            id: 9,
            name: 'Vanilla Creme Brulee',
            title: 'French Vanilla Creme Brulee',
            price: 3700,
            stock: 30,
            img: img9
        },
        {
            id: 10,
            name: 'Vanilla Almond Danish',
            title: 'Almond-Vanilla Danish Delight',
            price: 2300,
            stock: 30,
            img: img10
        },
        {
            id: 11,
            name: 'Vanilla Panna Cotta',
            title: 'Smooth Vanilla Panna Cotta',
            price: 6000,
            stock: 30,
            img: img11
        },
        {
            id: 12,
            name: 'Vanilla Eclairs',
            title: 'Vanilla-Filled Eclair Temptation',
            price: 5500,
            stock: 30,
            img: img12
        },
        {
            id: 13,
            name: 'Vanilla Whoopie Pie',
            title: 'Soft Vanilla Whoopie Treat',
            price: 3000,
            stock: 30,
            img: img13
        },
        {
            id: 14,
            name: 'Vanilla Tiramisu',
            title: 'Tiramisu with a Vanilla Twist',
            price: 3000,
            stock: 30,
            img: img14
        },
        {
            id: 15,
            name: 'Vanilla Bread Pudding',
            title: 'Homemade Vanilla Bread Comfort',
            price: 4800,
            stock: 30,
            img: img15
        },
        {
            id: 16,
            name: 'Vanilla Pecan Pie',
            title: 'Pecan-Vanilla Pie Delight',
            price: 5200,
            stock: 30,
            img: img16
        },
        {
            id: 17,
            name: 'Vanilla Cherry Strudel',
            title: 'Cherry-Vanilla Strudel Joy',
            price: 2900,
            stock: 30,
            img: img17
        },
        {
            id: 18,
            name: 'Vanilla Coconut Macaroon',
            title: 'Coconut-Vanilla Macaroon Delight',
            price: 8000,
            stock: 20,
            img: img18
        },
        {
            id: 19,
            name: 'Vanilla Orange Blossom Cake',
            title: 'Citrusy Vanilla Cake Bliss',
            price: 6000,
            stock: 25,
            img: img19
        },
        {
            id: 20,
            name: 'Vanilla Caramel Slice',
            title: 'Sweet Vanilla Caramel Delight',
            price: 2000,
            stock: 30,
            img: img20
        }
    ]
}

const vanillaSlice = createSlice({
    name: 'vanilla',
    initialState: initialState,
    reducers: {
        purchaseVanilla: (state, action) => {
            const { vanillaId, quantity } = action.payload;
            const pastry = state.vanillaPastries.find((item) => item.id === vanillaId);

            if (pastry) {
                if (pastry.stock >= quantity) {
                    pastry.stock -= quantity;
                    console.log('order successful');
                }
                else {
                    console.log('Out of stock');
                }
            }
        },
        resetVanilla: (state) => {
            return initialState
        }
    }
})

export default vanillaSlice.reducer;
export const { purchaseVanilla, resetVanilla } = vanillaSlice.actions;