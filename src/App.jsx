import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import StorieCard from "./components/StorieCard";
import Pagination from "react-bootstrap/Pagination";

function App() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // This is a side effect hook that runs when the component is mounted.
    // It's used to fetch data when the component first loads.

    // Call the 'getData' function to get 20 current stories.
    getData(
      "http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=10"
    );
  }, [currentPage]);

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
      `http://hn.algolia.com/api/v1/search?query=${e.target.value}&tags=story&hitsPerPage=10`
    );
  };

  // Pagination function and variables
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="App d-flex flex-column justify-content-center align-items-center border border-3 border-danger px-5">
      <div className="container d-flex flex-column gap-4 justify-content-center align-items-center border border-3 border-success p-5 m-5 bg-light rounded">
        <img
          className="w-50 h-50 rounded shadow"
          src="src/assets/pirate.jpg"
          alt="Pirate Ship"
        />
        <h1 className="fst-italic">B&B</h1>
        <h1 className="fst-italic">The Pirate Island</h1>
        <input
          type="text"
          className="form-control border-primary w-50"
          placeholder="Search for torrents..."
          onChange={searchItems}
        />{" "}
        {/* Display an input field and attach an 'onChange' event handler. */}
        <div className="results-area d-flex flex-column mt-3">
          {error && <h2>Something is wrong</h2>}{" "}
          {/* Display an error message if 'error' state is true. */}
          {posts && posts.map((storie) => <StorieCard storie={storie} />)}
          {/* Render 'StorieCard' components if 'posts' state is not null, passing each story as a prop. */}
        </div>
      </div>
      <div className="pagination-area">
        <Pagination size="lg">{items}</Pagination>
      </div>
    </div>
  );
}

export default App;
