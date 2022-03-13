import React from "react";

const Categories = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <button key={Math.random()} className='category-btn'>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
