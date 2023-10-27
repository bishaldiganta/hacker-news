import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

// COMPONENTS IMPORT
import StorieCard from "./components/StorieCard";

function App() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This is a side effect hook that runs when the component is mounted.
    // It's used to fetch data when the component first loads.

    // Call the 'getData' function to get 20 current stories.
    getData("http://hn.algolia.com/api/v1/search_by_date?tags=story");
  }, []);

  const getData = async (url) => {
    // Define an asynchronous function 'getData' that takes a URL as a parameter for fetching data.
    try {
      const response = await axios(url); // Use Axios to make an HTTP request to the provided URL.
      console.log(response.data.hits); // Log the data received from the API.
      setPosts(response.data.hits); // Update the 'posts' state with the fetched data.
      setError(null); // Reset the 'error' state to null (no error).
    } catch (error) {
      setError(true); // Set 'error' state to true if there's an error.
      setPosts(null); // Clear the 'posts' state.
    }
  };

  const searchItems = (e) => {
    // Define a function 'searchItems' that takes an event as a parameter (usually an input change event).

    // This one is for getting search results for "react" as a query.
    // Call the 'getData' function with a dynamically generated URL based on the input value.
    getData(
      `http://hn.algolia.com/api/v1/search?query=${e.target.value}&tags=story`
    );
  };

  return (
    <>
    <div className="App relative md:container md:mx-auto my-auto flex-col ">
      <Navbar className=""/>
      <h1 className="text-2xl font-bold text-center">BB - The Pirate Island</h1>
      <div className="border-2 border-gray-950 place-self-center rounded">
      <input type="text" onChange={searchItems} />
      </div>
      
      {" "}
      {/* Display an input field and attach an 'onChange' event handler. */}
      <div>
        <h2>Results</h2>
        {error && <h2>Something is wrong</h2>}{" "}
        {/* Display an error message if 'error' state is true. */}
        {posts && posts.map((storie) => <StorieCard storie={storie} />)}
        {/* Render 'StorieCard' components if 'posts' state is not null, passing each story as a prop. */}
      </div>
    </div>
    </>
  );
}

export default App;
