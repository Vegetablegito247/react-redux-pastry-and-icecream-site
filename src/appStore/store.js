import { configureStore } from "@reduxjs/toolkit";
import chocolateReducer from "./products/pastries/chocolateSlice";
import vanillaReducer from "./products/pastries/vanillaSlice";
import strawBerryReducer from "./products/pastries/strawBerrySlice";
import fruitReducer from "./products/pastries/fruitSlice";
import cheeseReducer from "./products/pastries/cheeseSlice";
import mintChocolateChipIceReducer from "./products/iceCream/mintChocolateChipIceSlice";
import cookiesAndCreamIceReducer from "./products/iceCream/cookiesAndCreamIceSlice";
import vanillaIceReducer from "./products/iceCream/vanillaIceSlice";
import chocolateIceReducer from "./products/iceCream/chocolateIceSlice";
import strawberryIceReducer from "./products/iceCream/strawberryIceSlice";

import cartReducer from "./products/cart/cartSlice";


const store = configureStore({
    reducer: {
        chocolatePastry: chocolateReducer,
        vanillaPastry: vanillaReducer,
        strawberryPastry: strawBerryReducer,
        fruitPastry: fruitReducer,
        cheesePastry: cheeseReducer,
        mintIceCream: mintChocolateChipIceReducer,
        cookieIceCream: cookiesAndCreamIceReducer,
        vanillaIceCream: vanillaIceReducer,
        chocolateIceCream: chocolateIceReducer,
        strawberryIceCream: strawberryIceReducer,
        cart: cartReducer
    },
});

export default store;