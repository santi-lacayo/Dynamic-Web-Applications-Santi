import { createSlice } from "@reduxjs/toolkit"

// think of a slice like a specific useReducer/reducer function
const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
      // name + '/' + functionName is how you access them
      // action.type generated ='movie/addMovie'
      addMovie(state, action) {
        // redux toolkit uses immer library! thats why you can
        // directly mutate state cringe
        state.push(action.payload)
      },
      removeMovie(state, action) {
        // action.payload is the name of the song we want to remove
        // get the index of the song passed via payload
        const index = state.indexOf(action.payload)
        // Array.splice() - vanilla js command
        state.splice(index, 1)
      },
      reset(state, action){
          return []
      },
    },
    extraReducers(builder){
      // think of this as an action type listener
      // first arg is the string action type
      builder.addCase('app/reset', (state, action) => {
          return []
      })
      },
  })

  export const {addMovie, removeMovie} = movieSlice.actions
  export const movieReducer = movieSlice.reducer