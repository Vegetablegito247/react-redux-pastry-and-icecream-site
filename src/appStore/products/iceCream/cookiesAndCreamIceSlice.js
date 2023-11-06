import { createSlice } from "@reduxjs/toolkit";
import img1 from '../../productImg/iceCream/cookie/ClassicCookiesCream.png'
import img2 from '../../productImg/iceCream/cookie/DoubleChocolateCookieFudge.png'
import img3 from '../../productImg/iceCream/cookie/MintChocolateChipCookie.png'
import img4 from '../../productImg/iceCream/cookie/PeanutButterOreoSwirl.png'
import img5 from '../../productImg/iceCream/cookie/StrawberryShortcakeCookie.png'
import img6 from '../../productImg/iceCream/cookie/SaltedCaramelCookieCrunch.png'
import img7 from '../../productImg/iceCream/cookie/CoffeeToffeeCookieBlast.png'
import img8 from '../../productImg/iceCream/cookie/WhiteChocolateMacadamiaNut.png'
import img9 from '../../productImg/iceCream/cookie/CinnamonSnickerdoodleCrunch.png'
import img10 from '../../productImg/iceCream/cookie/RockyRoadCookieExplosion.png'

const initialState = {
    cookiesAndCreamIcecream: [
        {
            id: 1,
            name: "Classic Cookies & Cream",
            title: "Creamy Delight",
            price: 3000,
            stock: 20,
            img: img1
        },
        {
            id: 2,
            name: "Double Chocolate Cookie Fudge",
            title: "Chocoholic's Dream",
            price: 4000,
            stock: 20,
            img: img2
        },
        {
            id: 3,
            name: "Mint Chocolate Chip Cookie",
            title: "Minty Cookie Bliss",
            price: 3500,
            stock: 20,
            img: img3
        },
        {
            id: 4,
            name: "Peanut Butter Oreo Swirl",
            title: "Nutty Oreo Swirl",
            price: 4500,
            stock: 20,
            img: img4
        },
        {
            id: 5,
            name: "Strawberry Shortcake Cookie",
            title: "Berry Cookie Fantasy",
            price: 3200,
            stock: 20,
            img: img5
        },
        {
            id: 6,
            name: "Salted Caramel Cookie Crunch",
            title: "Caramel Crunch Delight",
            price: 3800,
            stock: 20,
            img: img6
        },
        {
            id: 7,
            name: "Coffee Toffee Cookie Blast",
            title: "Coffee Cookie Extravaganza",
            price: 5000,
            stock: 20,
            img: img7
        },
        {
            id: 8,
            name: "White Chocolate Macadamia Nut",
            title: "White Delight Supreme",
            price: 4200,
            stock: 20,
            img: img8
        },
        {
            id: 9,
            name: "Cinnamon Snickerdoodle Crunch",
            title: "Cinnamon Cookie Bliss",
            price: 3700,
            stock: 20,
            img: img9
        },
        {
            id: 10,
            name: "Rocky Road Cookie Explosion",
            title: "Choc-Rock Cookie Blast",
            price: 4800,
            stock: 20,
            img: img10
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
        },
        resetCookIce: (state) => {
            return initialState
        }
    }
})

export default cookiesAndCreamIceSlice.reducer;
export const { purchaseCookiesIceCream, resetCookIce } = cookiesAndCreamIceSlice.actions;