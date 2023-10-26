import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const StorieCard = ({ storie }) => {
  console.log(storie);

  return (
    <div
      className="storie-card border border-dark mb-3 rounded shadow p-2 px-4"
      key={storie.story_id}
    >
      <h3 className="text-primary mb-5">{storie.title}</h3>
      <ul className="d-flex justify-content-between  gap-5 list-unstyled">
        <li>Author: {storie.author}</li>
        <li>Comments: {storie.num_comments}</li>
        <li>Date: {storie.created_at}</li>
      </ul>
    </div>
  );
};

export default StorieCard;
