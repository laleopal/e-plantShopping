import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
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
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
        const plant = action.payload;

        const existingItem = state.items.find(item => item.name === plant.name);
        if (existingItem) {
            existingItem.quantity = plant.quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
