import { createSlice } from "@reduxjs/toolkit";
import img1 from '../../productImg/pastry/strawberry/StrawberryShortcake.png';
import img2 from '../../productImg/pastry/strawberry/StrawberryCheesecake.png';
import img3 from '../../productImg/pastry/strawberry/StrawberryDanish.png';
import img4 from '../../productImg/pastry/strawberry/StrawberryMacaron.png';
import img5 from '../../productImg/pastry/strawberry/StrawberryTarts.png';
import img6 from '../../productImg/pastry/strawberry/StrawberryMousseCake.png';
import img7 from '../../productImg/pastry/strawberry/StrawberryCupcakes.png';
import img8 from '../../productImg/pastry/strawberry/StrawberryEclairs.png';
import img9 from '../../productImg/pastry/strawberry/StrawberryCinnamonRoll.png';
import img10 from '../../productImg/pastry/strawberry/StrawberryCreamPuff.png';
import img11 from '../../productImg/pastry/strawberry/StrawberryCroissant.png';
import img12 from '../../productImg/pastry/strawberry/StrawberryTiramisu.png';
import img13 from '../../productImg/pastry/strawberry/StrawberryMuffins.png';
import img14 from '../../productImg/pastry/strawberry/StrawberryBreadPudding.png';
import img15 from '../../productImg/pastry/strawberry/StrawberryChocolateTart.png';
import img16 from '../../productImg/pastry/strawberry/StrawberryAlmondCake.png';
import img17 from '../../productImg/pastry/strawberry/StrawberryCoconutMacaroon.png';
import img18 from '../../productImg/pastry/strawberry/StrawberryLemonadeTart.png';
import img19 from '../../productImg/pastry/strawberry/StrawberryPecanPie.png';
import img20 from '../../productImg/pastry/strawberry/StrawberryOatmealCookies.png';

const initialState = {
    strawberryPastries: [
        {
            id: 1,
            name: 'Strawberry Shortcake',
            title: 'Heavenly Strawberry Shortcake Delight',
            price: 5000,
            stock: 20,
            img: img1
        },
        {
            id: 2,
            name: 'Strawberry Cheesecake',
            title: 'Creamy Strawberry Cheesecake Indulgence',
            price: 6500,
            stock: 20,
            img: img2
        },
        {
            id: 3,
            name: 'Strawberry Danish',
            title: 'Flaky Strawberry-Filled Danish Pastry',
            price: 3500,
            stock: 20,
            img: img3
        },
        {
            id: 4,
            name: 'Strawberry Macaron',
            title: 'Delicate Strawberry Macaroon Bliss',
            price: 4500,
            stock: 20,
            img: img4
        },
        {
            id: 5,
            name: 'Strawberry Tarts',
            title: 'Fresh Strawberry Tarts Perfection',
            price: 5500,
            stock: 20,
            img: img5
        },
        {
            id: 6,
            name: 'Strawberry Mousse Cake',
            title: 'Strawberry Mousse Cake Sensation',
            price: 7000,
            stock: 20,
            img: img6
        },
        {
            id: 7,
            name: 'Strawberry Cupcakes',
            title: 'Bite-sized Strawberry Cupcake Joy',
            price: 3000,
            stock: 20,
            img: img7
        },
        {
            id: 8,
            name: 'Strawberry Eclairs',
            title: 'Strawberry-Filled Eclair Delight',
            price: 4000,
            stock: 20,
            img: img8
        },
        {
            id: 9,
            name: 'Strawberry Cinnamon Roll',
            title: 'Warm Strawberry Cinnamon Roll Comfort',
            price: 3200,
            stock: 20,
            img: img9
        },
        {
            id: 10,
            name: 'Strawberry Cream Puff',
            title: 'Creamy Strawberry Cream Puff Fantasy',
            price: 4800,
            stock: 20,
            img: img10
        },
        {
            id: 11,
            name: 'Strawberry Croissant',
            title: 'Flaky Strawberry Croissant Delight',
            price: 3700,
            stock: 20,
            img: img11
        },
        {
            id: 12,
            name: 'Strawberry Tiramisu',
            title: 'Strawberry Tiramisu Temptation',
            price: 6200,
            stock: 20,
            img: img12
        },
        {
            id: 13,
            name: 'Strawberry Muffins',
            title: 'Homemade Strawberry Muffin Joy',
            price: 2500,
            stock: 20,
            img: img13
        },
        {
            id: 14,
            name: 'Strawberry Bread Pudding',
            title: 'Warm Strawberry Bread Pudding Comfort',
            price: 4200,
            stock: 20,
            img: img14
        },
        {
            id: 15,
            name: 'Strawberry Chocolate Tart',
            title: 'Strawberry Chocolate Tart Indulgence',
            price: 5500,
            stock: 20,
            img: img15
        },
        {
            id: 16,
            name: 'Strawberry Almond Cake',
            title: 'Almond-Infused Strawberry Cake Delight',
            price: 7000,
            stock: 20,
            img: img16
        },
        {
            id: 17,
            name: 'Strawberry Coconut Macaroon',
            title: 'Coconut-Strawberry Macaroon Bliss',
            price: 4500,
            stock: 20,
            img: img17
        },
        {
            id: 18,
            name: 'Strawberry Lemonade Tart',
            title: 'Tangy Strawberry Lemonade Tart Joy',
            price: 5200,
            stock: 20,
            img: img18
        },
        {
            id: 19,
            name: 'Strawberry Pecan Pie',
            title: 'Pecan-Strawberry Pie Perfection',
            price: 6800,
            stock: 20,
            img: img19
        },
        {
            id: 20,
            name: 'Strawberry Oatmeal Cookies',
            title: 'Chewy Strawberry Oatmeal Cookies Delight',
            price: 3000,
            stock: 20,
            img: img20
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
        },
        resetStraw: (state) => {
            return initialState
        }
    }
})

export default strawBerrySlice.reducer;
export const { purchaseStrawberry, resetStraw } = strawBerrySlice.actions;