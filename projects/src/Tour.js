import React, { useState } from "react";

function Tour({ tour, onDelete }) {
  const [more, setMore] = useState(false);
  return (
    <div className='Tour'>
      <img src={tour.image} alt={tour.name} />
      <div className='name-price'>
        <h4>{tour.name}</h4>
        <h4>${tour.price}</h4>
      </div>
      <p>
        {more ? tour.info : `${tour.info.substring(0, 200)}...`}
        <button className='more-btn' onClick={() => setMore(!more)}>
          Read More
        </button>
      </p>
      <button onClick={() => onDelete(tour.id)}>Not Interested</button>
    </div>
  );
}

export default Tour;
