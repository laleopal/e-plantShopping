import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    totalItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
        const plant = action.payload;

        const existingItem = state.items.find(item => item.name === plant.name);
        if (!existingItem) {
            state.items.push({...plant, quantity: 1});
        } else {
            existingItem.quantity++;
        }
        state.totalItems++;
    },
    removeItem: (state, action) => {
        const index = state.items.findIndex(item => item.name === action.payload.name);
        if (index !== -1) {
            state.totalItems -= state.items[index].quantity;
            state.items.splice(index, 1);
        }
    },
    updateQuantity: (state, action) => {
        const plant = action.payload;

        const existingItem = state.items.find(item => item.name === plant.name);
        if (existingItem) {
            state.totalItems += plant.quantity - existingItem.quantity;
            existingItem.quantity = plant.quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
