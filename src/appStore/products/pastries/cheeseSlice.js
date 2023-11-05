import { createSlice } from "@reduxjs/toolkit";
import img1 from '../../productImg/pastry/cheese/ClassicCheeseDanish.png';
import img2 from '../../productImg/pastry/cheese/SavoryCheddarTwist.png';
import img3 from '../../productImg/pastry/cheese/ParmesanPuffPastry.png';
import img4 from '../../productImg/pastry/cheese/Brie-StuffedCroissant.png';
import img5 from '../../productImg/pastry/cheese/GoudaBaconRoll.png';
import img6 from '../../productImg/pastry/cheese/BlueCheeseDelight.png';
import img7 from '../../productImg/pastry/cheese/FetaandSpinachParcel.png';
import img8 from '../../productImg/pastry/cheese/MozzarellaTwirl.png';
import img9 from '../../productImg/pastry/cheese/SwissCheeseBraid.png';
import img10 from '../../productImg/pastry/cheese/CheddarJalapeñoPocket.png';
import img11 from '../../productImg/pastry/cheese/CamembertTart.png';
import img12 from '../../productImg/pastry/cheese/ProvolonePinwheel.png';
import img13 from '../../productImg/pastry/cheese/RoquefortDanish.png';
import img14 from '../../productImg/pastry/cheese/ChèvreandHoneyRoll.png';
import img15 from '../../productImg/pastry/cheese/AsiagoKnot.png';
import img16 from '../../productImg/pastry/cheese/GruyèrePillow.png';
import img17 from '../../productImg/pastry/cheese/HavartiDanish.png';
import img18 from '../../productImg/pastry/cheese/SmokedGoudaSwirl.png';
import img19 from '../../productImg/pastry/cheese/Fontina-StuffedTwist.png';
import img20 from '../../productImg/pastry/cheese/MascarponeDelight.png';

const initialState = {
    cheesePastries: [
        {
            id: 1,
            name: "Classic Cheese Danish",
            title: "Flaky Danish with Creamy Cheese Filling",
            price: 2500,
            stock: 15,
            img: img1
        },
        {
            id: 2,
            name: "Savory Cheddar Twist",
            title: "Twisted Pastry with Sharp Cheddar",
            price: 2700,
            stock: 18,
            img: img2
        },
        {
            id: 3,
            name: "Parmesan Puff Pastry",
            title: "Crispy Puff Pastry with Parmesan",
            price: 3000,
            stock: 20,
            img: img3
        },
        {
            id: 4,
            name: "Brie-Stuffed Croissant",
            title: "Buttery Croissant with Creamy Brie",
            price: 3200,
            stock: 17,
            img: img4
        },
        {
            id: 5,
            name: "Gouda & Bacon Roll",
            title: "Rolled Pastry with Gouda and Bacon",
            price: 2900,
            stock: 16,
            img: img5
        },
        {
            id: 6,
            name: "Blue Cheese Delight",
            title: "Flaky Pastry with Tangy Blue Cheese",
            price: 2700,
            stock: 19,
            img: img6
        },
        {
            id: 7,
            name: "Feta and Spinach Parcel",
            title: "Spinach-Filled Pastry with Crumbled Feta",
            price: 3100,
            stock: 15,
            img: img7
        },
        {
            id: 8,
            name: "Mozzarella Twirl",
            title: "Twisted Pastry with Melty Mozzarella",
            price: 2500,
            stock: 20,
            img: img8
        },
        {
            id: 9,
            name: "Swiss Cheese Braid",
            title: "Braided Pastry with Swiss Cheese",
            price: 2800,
            stock: 18,
            img: img9
        },
        {
            id: 10,
            name: "Cheddar Jalapeño Pocket",
            title: "Spicy Pocket Pastry with Cheddar",
            price: 3300,
            stock: 16,
            img: img10
        },
        {
            id: 11,
            name: "Camembert Tart",
            title: "Tart with Creamy Camembert",
            price: 2900,
            stock: 17,
            img: img11
        },
        {
            id: 12,
            name: "Provolone Pinwheel",
            title: "Rolled Pastry with Provolone",
            price: 2700,
            stock: 20,
            img: img12
        },
        {
            id: 13,
            name: "Roquefort Danish",
            title: "Danish with Intense Roquefort",
            price: 3100,
            stock: 15,
            img: img13
        },
        {
            id: 14,
            name: "Chèvre and Honey Roll",
            title: "Rolled Pastry with Chèvre and Honey",
            price: 3200,
            stock: 18,
            img: img14
        },
        {
            id: 15,
            name: "Asiago Knot",
            title: "Knotted Pastry with Asiago",
            price: 2800,
            stock: 19,
            img: img15
        },
        {
            id: 16,
            name: "Gruyère Pillow",
            title: "Pillow-Shaped Pastry with Gruyère",
            price: 3300,
            stock: 20,
            img: img16
        },
        {
            id: 17,
            name: "Havarti Danish",
            title: "Danish with Creamy Havarti",
            price: 2900,
            stock: 17,
            img: img17
        },
        {
            id: 18,
            name: "Smoked Gouda Swirl",
            title: "Swirled Pastry with Smoky Gouda",
            price: 3100,
            stock: 15,
            img: img18
        },
        {
            id: 19,
            name: "Fontina-Stuffed Twist",
            title: "Twisted Pastry with Fontina",
            price: 3200,
            stock: 18,
            img: img19
        },
        {
            id: 20,
            name: "Mascarpone Delight",
            title: "Flaky Pastry with Creamy Mascarpone",
            price: 2800,
            stock: 19,
            img: img20
        }
    ]
}

const cheeseSlice = createSlice({
    name: 'cheese',
    initialState: initialState,
    reducers: {
        purchaseCheese: (state, action) => {
            const { cheeseId, quantity } = action.payload;
            const pastry = state.cheesePastries.find((item) => item.id === cheeseId);

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
        resetCheese: (state) => {
            return initialState
        }
    }
})

export default cheeseSlice.reducer;
export const { purchaseCheese, resetCheese } = cheeseSlice.actions;