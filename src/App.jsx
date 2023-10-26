import React, { useState, useEffect } from "react";
import axios from "axios";
import StorieCard from "./components/StorieCard";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]); // State to store the fetched posts
  const [error, setError] = useState(null); // State to store error messages
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  useEffect(() => {
    // This useEffect hook runs when the component is mounted and whenever currentPage or searchQuery changes.
    // It's used to fetch posts from an API.
    fetchPosts(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  const fetchPosts = async (page, query) => {
    // Define an asynchronous function 'fetchPosts' that takes a page number and a query as parameters.
    try {
      let url = `http://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=10&page=${page}`;
      if (query) {
        url = `http://hn.algolia.com/api/v1/search?query=${query}&tags=story&hitsPerPage=5&page=${page}`;
      }
      const response = await axios.get(url);
      setPosts(response.data.hits);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError("Something is wrong"); // Handle errors
      setPosts([]); // Clear posts in case of an error
    }
  };

  // Pagination function and variables
  const items = [];
  const totalPages = 5; // Change this value to the total number of pages you have.

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="App d-flex flex-column justify-content-center align-items-center px-5">
      <div className="container d-flex flex-column gap-4 justify-content-center align-items-center p-5 m-5 bg-light rounded shadow-lg">
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Handle input changes
        />

        <div className="results-area d-flex flex-column mt-3">
          {error && <h2>Something is wrong</h2>}{" "}
          {/* Display an error message if an error occurs */}
          {posts.map((storie) => (
            <StorieCard key={storie.story_id} storie={storie} /> // Render StorieCard component for each post
          ))}
        </div>
      </div>
      <div className="pagination-area mb-3">
        <Pagination size="lg">{items}</Pagination>{" "}
        {/* Render pagination controls */}
      </div>
    </div>
  );
}

export default App;
