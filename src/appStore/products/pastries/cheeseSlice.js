import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cheesePastries: [
        {
            id: 1,
            name: "Classic Cheese Danish",
            title: "Flaky Danish with Creamy Cheese Filling",
            price: 2500,
            stock: 15
        },
        {
            id: 2,
            name: "Savory Cheddar Twist",
            title: "Twisted Pastry with Sharp Cheddar",
            price: 2700,
            stock: 18
        },
        {
            id: 3,
            name: "Parmesan Puff Pastry",
            title: "Crispy Puff Pastry with Parmesan",
            price: 3000,
            stock: 20
        },
        {
            id: 4,
            name: "Brie-Stuffed Croissant",
            title: "Buttery Croissant with Creamy Brie",
            price: 3200,
            stock: 17
        },
        {
            id: 5,
            name: "Gouda & Bacon Roll",
            title: "Rolled Pastry with Gouda and Bacon",
            price: 2900,
            stock: 16
        },
        {
            id: 6,
            name: "Blue Cheese Delight",
            title: "Flaky Pastry with Tangy Blue Cheese",
            price: 2700,
            stock: 19
        },
        {
            id: 7,
            name: "Feta and Spinach Parcel",
            title: "Spinach-Filled Pastry with Crumbled Feta",
            price: 3100,
            stock: 15
        },
        {
            id: 8,
            name: "Mozzarella Twirl",
            title: "Twisted Pastry with Melty Mozzarella",
            price: 2500,
            stock: 20
        },
        {
            id: 9,
            name: "Swiss Cheese Braid",
            title: "Braided Pastry with Swiss Cheese",
            price: 2800,
            stock: 18
        },
        {
            id: 10,
            name: "Cheddar Jalapeño Pocket",
            title: "Spicy Pocket Pastry with Cheddar",
            price: 3300,
            stock: 16
        },
        {
            id: 11,
            name: "Camembert Tart",
            title: "Tart with Creamy Camembert",
            price: 2900,
            stock: 17
        },
        {
            id: 12,
            name: "Provolone Pinwheel",
            title: "Rolled Pastry with Provolone",
            price: 2700,
            stock: 20
        },
        {
            id: 13,
            name: "Roquefort Danish",
            title: "Danish with Intense Roquefort",
            price: 3100,
            stock: 15
        },
        {
            id: 14,
            name: "Chèvre and Honey Roll",
            title: "Rolled Pastry with Chèvre and Honey",
            price: 3200,
            stock: 18
        },
        {
            id: 15,
            name: "Asiago Knot",
            title: "Knotted Pastry with Asiago",
            price: 2800,
            stock: 19
        },
        {
            id: 16,
            name: "Gruyère Pillow",
            title: "Pillow-Shaped Pastry with Gruyère",
            price: 3300,
            stock: 20
        },
        {
            id: 17,
            name: "Havarti Danish",
            title: "Danish with Creamy Havarti",
            price: 2900,
            stock: 17
        },
        {
            id: 18,
            name: "Smoked Gouda Swirl",
            title: "Swirled Pastry with Smoky Gouda",
            price: 3100,
            stock: 15
        },
        {
            id: 19,
            name: "Fontina-Stuffed Twist",
            title: "Twisted Pastry with Fontina",
            price: 3200,
            stock: 18
        },
        {
            id: 20,
            name: "Mascarpone Delight",
            title: "Flaky Pastry with Creamy Mascarpone",
            price: 2800,
            stock: 19
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
        }
    }
})

export default cheeseSlice.reducer;
export const { purchaseCheese } = cheeseSlice.actions;