// Import the createSlice API from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
import { URLS } from '../api/constants';

// This is the initial state of the slice
const initialState = {
  items: {},
  favourites: {},
  cart: {},
};

export const itemSlice = createSlice({
  name: 'items',
  initialState: initialState,
  reducers: {
    setItems: (state, action) => {
      const items = action.payload;
      items.forEach((item) => {
        state.items[item.id] = item;
      })
    },
    addToFavourites: (state, action) => {
      state.favourites[action.payload] = true;
    },

    removeFromFavourites: (state, action) => {
      if(state.favourites[action.payload]){
        delete state.favourites[action.payload];
      }
    },
    addToCart: (state, action) => {
      if(state.cart[action.payload]){
        state.cart[action.payload] += 1;
      } else {
        state.cart[action.payload] = 1;
      }
    },
    removeFromCart: (state, action) => {
      if(state.cart[action.payload]){
        if(state.cart[action.payload] > 1){
          state.cart[action.payload] -= 1;
        } else {
          delete state.cart[action.payload];
        }
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  setItems,
  addToFavourites, 
  removeFromFavourites,
  addToCart,
  removeFromCart
} = itemSlice.actions;

// We export the reducer function so that it can be added to the store
export default itemSlice.reducer;