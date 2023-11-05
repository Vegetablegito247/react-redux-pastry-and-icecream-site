import { createSlice } from '@reduxjs/toolkit';
import img1 from '../../productImg/pastry/chocolate/DoubleChocolateEclair.png';
import img2 from '../../productImg/pastry/chocolate/Choco-HazelnutCroissant.png';
import img3 from '../../productImg/pastry/chocolate/MoltenLavaCake.png';
import img4 from '../../productImg/pastry/chocolate/ChocolateMousseTart.png';
import img5 from '../../productImg/pastry/chocolate/TripleChocolateBrownie.png';
import img6 from '../../productImg/pastry/chocolate/WhiteChocolateRaspberryPuff.png';
import img7 from '../../productImg/pastry/chocolate/ChocolateAlmondTwist.png';
import img8 from '../../productImg/pastry/chocolate/Choco-OrangeTart.png';
import img9 from '../../productImg/pastry/chocolate/DarkChocolateCaramelSlice.png';
import img10 from '../../productImg/pastry/chocolate/ChocolatePeanutButterCupcake.png';
import img11 from '../../productImg/pastry/chocolate/Choco-CherryDanish.png';
import img12 from '../../productImg/pastry/chocolate/MintChocolateWhoopiePie.png';
import img13 from '../../productImg/pastry/chocolate/ChocolateMacaronTower.png';
import img14 from '../../productImg/pastry/chocolate/Chocolate-OrangeScone.png';
import img15 from '../../productImg/pastry/chocolate/DarkChocolateCheesecake.png';
import img16 from '../../productImg/pastry/chocolate/ChocolateCaramelÉclair.png';
import img17 from '../../productImg/pastry/chocolate/Raspberry-ChocolateCroissant.png';
import img18 from '../../productImg/pastry/chocolate/DoubleChocolateBiscotti.png';
import img19 from '../../productImg/pastry/chocolate/ChocolateAlmondMacaron.png';
import img20 from '../../productImg/pastry/chocolate/ChocolateBananaBread.png';

const initialStates = {
    chocolatePastries: [
        {
            id: 1,
            name: "Double Chocolate Eclair",
            title: "Decadent Chocolate Eclair",
            price: 3000,
            stock: 18,
            img: img1
        },
        {
            id: 2,
            name: "Choco-Hazelnut Croissant",
            title: "Hazelnut Delight Croissant",
            price: 2800,
            stock: 16,
            img: img2
        },
        {
            id: 3,
            name: "Molten Lava Cake",
            title: "Warm Chocolate Volcano",
            price: 4000,
            stock: 14,
            img: img3
        },
        {
            id: 4,
            name: "Chocolate Mousse Tart",
            title: "Silky Chocolate Mousse Tart",
            price: 3200,
            stock: 20,
            img: img4
        },
        {
            id: 5,
            name: "Triple Chocolate Brownie",
            title: "Ultimate Brownie Bliss",
            price: 2500,
            stock: 17,
            img: img5
        },
        {
            id: 6,
            name: "White Chocolate Raspberry Puff",
            title: "Raspberry-Chocolate Delight",
            price: 3500,
            stock: 19,
            img: img6
        },
        {
            id: 7,
            name: "Chocolate Almond Twist",
            title: "Almond Chocolate Swirl",
            price: 2700,
            stock: 15,
            img: img7
        },
        {
            id: 8,
            name: "Choco-Orange Tart",
            title: "Zesty Chocolate Orange Tart",
            price: 3300,
            stock: 12,
            img: img8
        },
        {
            id: 9,
            name: "Dark Chocolate Caramel Slice",
            title: "Caramel Chocolate Indulgence",
            price: 3800,
            stock: 13,
            img: img9
        },
        {
            id: 10,
            name: "Chocolate Peanut Butter Cupcake",
            title: "Peanut Butter Chocolate Bliss",
            price: 2600,
            stock: 20,
            img: img10
        },
        {
            id: 11,
            name: "Choco-Cherry Danish",
            title: "Cherry Chocolate Swirl Danish",
            price: 2900,
            stock: 16,
            img: img11
        },
        {
            id: 12,
            name: "Mint Chocolate Whoopie Pie",
            title: "Minty Chocolate Treat",
            price: 3100,
            stock: 18,
            img: img12
        },
        {
            id: 13,
            name: "Chocolate Macaron Tower",
            title: "Elegant Macaron Delight",
            price: 4500,
            stock: 10,
            img: img13
        },
        {
            id: 14,
            name: "Chocolate-Orange Scone",
            title: "Citrus Chocolate Scone",
            price: 2700,
            stock: 14,
            img: img14
        },
        {
            id: 15,
            name: "Dark Chocolate Cheesecake",
            title: "Rich Chocolate Cheesecake",
            price: 3900,
            stock: 11,
            img: img15
        },
        {
            id: 16,
            name: "Chocolate Caramel Éclair",
            title: "Caramel Chocolate Eclair",
            price: 3200,
            stock: 17,
            img: img16
        },
        {
            id: 17,
            name: "Raspberry-Chocolate Croissant",
            title: "Raspberry Chocolate Twist",
            price: 3000,
            stock: 16,
            img: img17
        },
        {
            id: 18,
            name: "Double Chocolate Biscotti",
            title: "Crunchy Chocolate Biscotti",
            price: 2500,
            stock: 19,
            img: img18
        },
        {
            id: 19,
            name: "Chocolate Almond Macaron",
            title: "Almond Chocolate Delight",
            price: 2800,
            stock: 15,
            img: img19
        },
        {
            id: 20,
            name: "Chocolate Banana Bread",
            title: "Banana-Chocolate Bliss",
            price: 2900,
            stock: 14,
            img: img20
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
        },
        resetChoco: (state) => {
            return initialStates
        }
    }
})

export default chocolateSlices.reducer;
export const { purchaseChocolate, resetChoco } = chocolateSlices.actions;