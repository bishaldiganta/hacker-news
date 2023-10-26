import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

// Define a functional component named StorieCard that takes a 'storie' prop as input
const StorieCard = ({ storie }) => {
  if (!storie) {
    return null; // If 'storie' is null, don't render anything
  }

  console.log(storie); // Log the 'storie' object to the console

  return (
    <div
      className="storie-card mb-3 rounded shadow p-2 px-4"
      key={storie.story_id} // You can't use 'key' directly on a div; it should be used when rendering a list of elements
    >
      <h4 className="text-primary mb-5">{storie.title}</h4>{" "}
      {/* Display the story title */}
      <ul className="d-flex justify-content-between  gap-5 list-unstyled">
        <li>Author: {storie.author}</li> {/* Display the author's name */}
        <li>Comments: {storie.num_comments}</li>{" "}
        {/* Display the number of comments */}
        <li>Date: {storie.created_at}</li> {/* Display the creation date */}
      </ul>
    </div>
  );
};

export default StorieCard;
