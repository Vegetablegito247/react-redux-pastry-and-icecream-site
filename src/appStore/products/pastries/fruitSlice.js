import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruitPastries: [
    {
      id: 1,
      name: "Blueberry Bliss Pastry",
      title: "Delight in Every Bite",
      price: 2500,
      stock: 15
    },
    {
      id: 2,
      name: "Strawberry Swirl Delight",
      title: "Sweet Strawberry Temptation",
      price: 2700,
      stock: 18
    },
    {
      id: 3,
      name: "Mango Tango Pastry",
      title: "Tropical Flavor Explosion",
      price: 2800,
      stock: 17
    },
    {
      id: 4,
      name: "Raspberry Rhapsody Roll",
      title: "Raspberry Heaven in Every Bite",
      price: 2600,
      stock: 16
    },
    {
      id: 5,
      name: "Peach Paradise Pastry",
      title: "Juicy Peachy Perfection",
      price: 2900,
      stock: 19
    },
    {
      id: 6,
      name: "Cherry Blossom Delight",
      title: "Cherrylicious Euphoria",
      price: 2700,
      stock: 20
    },
    {
      id: 7,
      name: "Kiwi Kissed Croissant",
      title: "Tangy Kiwi Delight",
      price: 2400,
      stock: 15
    },
    {
      id: 8,
      name: "Apricot Sunrise Pastry",
      title: "Golden Apricot Indulgence",
      price: 2300,
      stock: 14
    },
    {
      id: 9,
      name: "Banana Bonanza Roll",
      title: "Banana Bliss Explosion",
      price: 2600,
      stock: 16
    },
    {
      id: 10,
      name: "Orange Zest Danish",
      title: "Citrusy Sunshine Pastry",
      price: 2500,
      stock: 15
    },
    {
      id: 11,
      name: "Grape Escape Croissant",
      title: "Grapey Goodness Galore",
      price: 2700,
      stock: 18
    },
    {
      id: 12,
      name: "Pineapple Pleasure Pastry",
      title: "Tropical Pineapple Delight",
      price: 2900,
      stock: 17
    },
    {
      id: 13,
      name: "Lemon-Love Danish",
      title: "Zesty Lemon Infusion",
      price: 2300,
      stock: 14
    },
    {
      id: 14,
      name: "Watermelon Wow Roll",
      title: "Refreshing Watermelon Surprise",
      price: 2500,
      stock: 15
    },
    {
      id: 15,
      name: "Cranberry Craze Croissant",
      title: "Tart Cranberry Delight",
      price: 2600,
      stock: 16
    },
    {
      id: 16,
      name: "Blackberry Bliss Pastry",
      title: "Sweet and Juicy Blackberries",
      price: 2800,
      stock: 17
    },
    {
      id: 17,
      name: "Pear Perfection Danish",
      title: "Delicate Pear Elegance",
      price: 2400,
      stock: 15
    },
    {
      id: 18,
      name: "Apple Harvest Roll",
      title: "Crisp Apple Sensation",
      price: 2900,
      stock: 19
    },
    {
      id: 19,
      name: "Plum Passion Pastry",
      title: "Rich Plum Indulgence",
      price: 2600,
      stock: 20
    },
    {
      id: 20,
      name: "Dragonfruit Delight Croissant",
      title: "Exotic Dragonfruit Fantasy",
      price: 2700,
      stock: 18
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
    }
  }
})

export default fruitSlice.reducer;
export const { purchaseFruit } = fruitSlice.actions;