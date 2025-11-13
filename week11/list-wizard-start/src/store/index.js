import {configureStore} from '@reduxjs/toolkit'
import { songReducer, addSong, removeSong } from './slices/songSlice'
import { movieReducer, addMovie, removeMovie } from './slices/movieSlice'
import { reset } from './actions'

// this is where you add your slices by keyname to your applicaiton wide state/store
const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer,
  },
})


// make sure you export all the things you need, here we are exporting all imported actionCreators for all of store
// import from individual slices and export everything from index
export {store, reset, addSong, removeSong, addMovie, removeMovie}
// detructure and export out the actions/function from the compiled songSlice.actions