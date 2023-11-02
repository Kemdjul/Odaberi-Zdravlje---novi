import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const index = state.cart.findIndex((e) => action.payload.id === e.id);

            if (index === -1) 
                state.cart = [...state.cart, { ...action.payload, quantity: action.payload.quantity }];
            else {
                state.cart[index] = { ...state.cart[index], quantity: state.cart[index].quantity + action.payload.quantity };
            }

            state.totalPrice += action.payload.price * action.payload.quantity;
            },
        removeFromCart: (state, action) => {
            const index = state.cart.findIndex((e) => action.payload === e.id);

            state.totalPrice -= state.cart[index].price * state.cart[index].quantity;
            state.cart = state.cart.filter((e) => e.id !== action.payload);
        },
        changeQuantity: (state, action) => {
            const index = state.cart.findIndex((e) => action.payload.id === e.id);
            state.totalPrice = state.totalPrice + action.payload.quantity * state.cart[index].price - state.cart[index].price * state.cart[index].quantity;
            state.cart[index] = {...state.cart[index], quantity: action.payload.quantity};
        },
    },
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export const selectTotalPrice = (state) => state.cart.totalPrice;
export default cartSlice.reducer;