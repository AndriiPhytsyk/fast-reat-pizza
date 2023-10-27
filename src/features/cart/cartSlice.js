import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, curr) => sum + curr.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, curr) => sum + curr.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const getUsername = (state) => state.user.username;
export const geCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((pizza) => pizza.pizzaId === id)?.quantity || 0;
