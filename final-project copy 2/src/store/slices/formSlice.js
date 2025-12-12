// src/store/slices/formSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { addArt } from './artSlice.js';

// This slice manages the Add Art form
// Each field (title, artist, price, etc.) is stored in Redux
const formSlice = createSlice({
  name: 'form',
  // Initial empty values for all form inputs
  initialState: {
    title: '',
    artist: '',
    price: '',
    category: '',
    description: '',
    image: '',
  },
  // Reducers update individual fields whenever the user types
  reducers: {
    changeTitle(state, action) {
      state.title = action.payload;
    },
    changeArtist(state, action) {
      state.artist = action.payload;
    },
    changePrice(state, action) {
      state.price = action.payload;
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    changeImage(state, action) {
      state.image = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addArt, (state, action) => {
      state.title = '';
      state.artist = '';
      state.price = '';
      state.category = '';
      state.description = '';
      state.image = '';
    });
  },
});

// Export actions so components can dispatch them
export const {
  changeTitle,
  changeArtist,
  changePrice,
  changeCategory,
  changeDescription,
  changeImage,
} = formSlice.actions;

// Export reducer so the store can include it
export const formReducer = formSlice.reducer;