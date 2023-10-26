import React from "react";
import "/src/index.css";


const StorieCard = ({ storie }) => {
  console.log(storie);

  // here paste it
  // {
  //   "_highlightResult": {
  //       "author": {
  //           "matchLevel": "none",
  //           "matchedWords": [],
  //           "value": "belter"
  //       },
  //       "title": {
  //           "matchLevel": "none",
  //           "matchedWords": [],
  //           "value": "The human body has 1.8T cells dedicated to defending it"
  //       },
  //       "url": {
  //           "matchLevel": "none",
  //           "matchedWords": [],
  //           "value": "https://english.elpais.com/science-tech/2023-10-25/the-human-body-has-18-trillion-cells-dedicated-to-defending-it.html"
  //       }
  //   },
  //   "_tags": [
  //       "story",
  //       "author_belter",
  //       "story_38012380"
  //   ],
  //   "author": "belter",
  //   "children": [
  //       38012381
  //   ],
  //   "created_at": "2023-10-25T13:07:49Z",
  //   "created_at_i": 1698239269,
  //   "num_comments": 1,
  //   "objectID": "38012380",
  //   "points": 1,
  //   "story_id": 38012380,
  //   "title": "The human body has 1.8T cells dedicated to defending it",
  //   "updated_at": "2023-10-25T13:09:47Z",
  //   "url": "https://english.elpais.com/science-tech/2023-10-25/the-human-body-has-18-trillion-cells-dedicated-to-defending-it.html"
  // }

  return (
    <div className="storie-card" key={storie.story_id}>
      <h3>{storie.title}</h3>
      <ul>
        <li>Author: {storie.author}</li>
        <li>Comments: {storie.num_comments}</li>
        <li>Date: {storie.created_at}</li>
      </ul>
    </div>
  );
};

export default StorieCard;
