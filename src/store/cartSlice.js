import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const { id, image, title, price } = action.payload;
            state.push({ id, image, title, price, quantity: 1 }); // Добавляем поле quantity
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload);
        },
        increaseQuantity(state, action) {
            const { id } = action.payload;
            const existingProduct = state.find(product => product.id === id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
        },
        decreaseQuantity(state, action) {
            const { id } = action.payload;
            const existingProduct = state.find(product => product.id === id);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            }
        },
    }
});

export const { add, remove, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
