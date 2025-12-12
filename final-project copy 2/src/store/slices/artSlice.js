import { createSlice } from '@reduxjs/toolkit';

const artSlice = createSlice({
  name: 'art',
  initialState: {
    searchTerm: '',
    data: [], // loaded from server
  },

  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload.toLowerCase();
    },

    // Called AFTER a POST request succeeds
    addArt(state, action) {
      state.data.push(action.payload); 
      // payload ALREADY contains the server-generated id
    },

    // Called AFTER a DELETE request succeeds
    removeArt(state, action) {
      state.data = state.data.filter((art) => art.id !== action.payload);
    },

    // Called when App loads initial server data
    setInitialArt(state, action) {
      state.data = action.payload;
    },

    // Called AFTER a PUT request succeeds
    editArt(state, action) {
      const { id, updates } = action.payload;
      const index = state.data.findIndex((art) => art.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...updates };
      }
    },
  },
});

export const { changeSearchTerm, addArt, removeArt, setInitialArt, editArt } =
  artSlice.actions;

export const artReducer = artSlice.reducer;
