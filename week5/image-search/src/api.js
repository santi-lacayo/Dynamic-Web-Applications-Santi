import axios from 'axios'
// whenever you await inside a function you need to flag that function as asyncronous
const searchImages = async (term) => {
    //when using axios GET
    //first argument is the url as a string
    //second argument is an options object
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        // inside headers you pass your access key
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_KEY}`,
      },
      params: { query: term},  
    })
    return response.data.results
}

// the way you export should be a hint at how you import elsewhere

export default searchImages