import React from "react";
import Tour from "./Tour";

function TourList({ tours, onDelete }) {
  return (
    <div>
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TourList;
