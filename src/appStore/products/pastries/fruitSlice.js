import { createSlice } from "@reduxjs/toolkit";
import img1 from '../../productImg/pastry/fruit/BlueberryBlissPastry.png';
import img2 from '../../productImg/pastry/fruit/StrawberrySwirlDelight.png';
import img3 from '../../productImg/pastry/fruit/MangoTangoPastry.png';
import img4 from '../../productImg/pastry/fruit/RaspberryRhapsodyRoll.png';
import img5 from '../../productImg/pastry/fruit/PeachParadisePastry.png';
import img6 from '../../productImg/pastry/fruit/CherryBlossomDelight.png';
import img7 from '../../productImg/pastry/fruit/KiwiKissedCroissant.png';
import img8 from '../../productImg/pastry/fruit/ApricotSunrisePastry.png';
import img9 from '../../productImg/pastry/fruit/BananaBonanzaRoll.png';
import img10 from '../../productImg/pastry/fruit/OrangeZestDanish.png';
import img11 from '../../productImg/pastry/fruit/GrapeEscapeCroissant.png';
import img12 from '../../productImg/pastry/fruit/PineapplePleasurePastry.png';
import img13 from '../../productImg/pastry/fruit/Lemon-LoveDanish.png';
import img14 from '../../productImg/pastry/fruit/WatermelonWowRoll.png';
import img15 from '../../productImg/pastry/fruit/CranberryCrazeCroissant.png';
import img16 from '../../productImg/pastry/fruit/BlackberryBlissPastry.png';
import img17 from '../../productImg/pastry/fruit/PearPerfectionDanish.png';
import img18 from '../../productImg/pastry/fruit/AppleHarvestRoll.png';
import img19 from '../../productImg/pastry/fruit/PlumPassionPastry.png';
import img20 from '../../productImg/pastry/fruit/DragonfruitDelightCroissant.png';

const initialState = {
  fruitPastries: [
    {
      id: 1,
      name: "Blueberry Bliss Pastry",
      title: "Delight in Every Bite",
      price: 2500,
      stock: 15,
      img: img1
    },
    {
      id: 2,
      name: "Strawberry Swirl Delight",
      title: "Sweet Strawberry Temptation",
      price: 2700,
      stock: 18,
      img: img2
    },
    {
      id: 3,
      name: "Mango Tango Pastry",
      title: "Tropical Flavor Explosion",
      price: 2800,
      stock: 17,
      img: img3
    },
    {
      id: 4,
      name: "Raspberry Rhapsody Roll",
      title: "Raspberry Heaven in Every Bite",
      price: 2600,
      stock: 16,
      img: img4
    },
    {
      id: 5,
      name: "Peach Paradise Pastry",
      title: "Juicy Peachy Perfection",
      price: 2900,
      stock: 19,
      img: img5
    },
    {
      id: 6,
      name: "Cherry Blossom Delight",
      title: "Cherrylicious Euphoria",
      price: 2700,
      stock: 20,
      img: img6
    },
    {
      id: 7,
      name: "Kiwi Kissed Croissant",
      title: "Tangy Kiwi Delight",
      price: 2400,
      stock: 15,
      img: img7
    },
    {
      id: 8,
      name: "Apricot Sunrise Pastry",
      title: "Golden Apricot Indulgence",
      price: 2300,
      stock: 14,
      img: img8
    },
    {
      id: 9,
      name: "Banana Bonanza Roll",
      title: "Banana Bliss Explosion",
      price: 2600,
      stock: 16,
      img: img9
    },
    {
      id: 10,
      name: "Orange Zest Danish",
      title: "Citrusy Sunshine Pastry",
      price: 2500,
      stock: 15,
      img: img10
    },
    {
      id: 11,
      name: "Grape Escape Croissant",
      title: "Grapey Goodness Galore",
      price: 2700,
      stock: 18,
      img: img11
    },
    {
      id: 12,
      name: "Pineapple Pleasure Pastry",
      title: "Tropical Pineapple Delight",
      price: 2900,
      stock: 17,
      img: img12
    },
    {
      id: 13,
      name: "Lemon-Love Danish",
      title: "Zesty Lemon Infusion",
      price: 2300,
      stock: 14,
      img: img13
    },
    {
      id: 14,
      name: "Watermelon Wow Roll",
      title: "Refreshing Watermelon Surprise",
      price: 2500,
      stock: 15,
      img: img14
    },
    {
      id: 15,
      name: "Cranberry Craze Croissant",
      title: "Tart Cranberry Delight",
      price: 2600,
      stock: 16,
      img: img15
    },
    {
      id: 16,
      name: "Blackberry Bliss Pastry",
      title: "Sweet and Juicy Blackberries",
      price: 2800,
      stock: 17,
      img: img16
    },
    {
      id: 17,
      name: "Pear Perfection Danish",
      title: "Delicate Pear Elegance",
      price: 2400,
      stock: 15,
      img: img17
    },
    {
      id: 18,
      name: "Apple Harvest Roll",
      title: "Crisp Apple Sensation",
      price: 2900,
      stock: 19,
      img: img18
    },
    {
      id: 19,
      name: "Plum Passion Pastry",
      title: "Rich Plum Indulgence",
      price: 2600,
      stock: 20,
      img: img19
    },
    {
      id: 20,
      name: "Dragonfruit Delight Croissant",
      title: "Exotic Dragonfruit Fantasy",
      price: 2700,
      stock: 18,
      img: img20
    }
  ]
}

const fruitSlice = createSlice({
  name: 'fruit',
  initialState: initialState,
  reducers: {
    purchaseFruit: (state, action) => {
      const { fruitId, quantity } = action.payload;
      const pastry = state.fruitPastries.find((item) => item.id === fruitId);

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
    resetFruit: (state) => {
      return initialState
    }
  }
})

export default fruitSlice.reducer;
export const { purchaseFruit, resetFruit } = fruitSlice.actions;