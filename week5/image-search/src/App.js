import {useState} from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api'

const App = () => {
  // this is where we want to trigger the re-render
  const [images, setImages] = useState([])

  const handleFormSubmit = async (term) => {
    console.log(term)
    // first pass term isn't received yet in our api
    const result = await searchImages(term)
    console.log(result)
    setImages(result)
  }
  return(
    <div>
      <h3>Type a search term and hit the enter key to submit!</h3>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App
