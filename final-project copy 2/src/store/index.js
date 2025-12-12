import { configureStore } from '@reduxjs/toolkit';
import { artReducer, addArt, removeArt, changeSearchTerm } from './slices/artSlice.js';

import {
  formReducer,
  changeTitle,
  changeArtist,
  changePrice,
  changeCategory,
  changeDescription,
  changeImage,
} from './slices/formSlice.js';

const store = configureStore({
  reducer: {
    art: artReducer,
    form: formReducer,
  },
});

console.log(localStorage.getItem('artData'));

export {
  store,
  addArt,
  removeArt,
  changeSearchTerm,
  changeTitle,
  changeArtist,
  changePrice,
  changeCategory,
  changeDescription,
  changeImage,
};