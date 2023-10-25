import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import SearchBar from './components/SearchBar'

// components import
import StorieCard from './components/StorieCard'


const [searchInput, setSearchInput] = setState('');


const searchItems =(searchValue) => {
  setSearchInput(searchValue)
}



function App() {
  const [stories, setStories] = useState('')
  
  {/* TODO DISPLAY A LIST OF THE LATEST NEWS */}
  {/* WE CAN USE THIS URL https://hn.algolia.com/api/v1/search_by_date?tags=story */}

  // create a useEffect that will fire once anytime that we load this component
  useEffect(()=> {
    // Have it so that it fires a function called getData for using the url to get an array of news
    getData()
  }, [])

  const getData = async () => {
    try{
      const response = await axios("https://hn.algolia.com/api/v1/search_by_date?tags=story")
      // set that data that we get into the "stories variable"
      console.log(response.data.hits)
      setStories(response.data.hits)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <SearchBar  />
      {/* SEARCH */}
      {/* WE CAN USE THIS URL http://hn.algolia.com/api/v1/search?query=react&tags=story  remember that the word react is the one that we will use to display results that we search from the api matching stories that relate to that*/}
    {/* // display those stories in the return using the StorieCard component */}
     { !stories ? <p>Loading...</p> : stories.map(story => <StorieCard storie={story}/>) }
    </>
  )
}

export default App


/* we're using too url, one to fetch initially and the other one to filter, depending on the query
let me paste them here
fetch : http://hn.algolia.com/api/v1/search_by_date?tags=story
filter ( search query ) : http://hn.algolia.com/api/v1/search?query=react&tags=story

this example of the query link is a react query
try to get the input inside the query to be able to manipulate it
instead of react */