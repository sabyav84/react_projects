import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useState } from "react";
const Review = ({ data }) => {
  const [index, setIndex] = useState(0);
  let elem = data[index];
  return (
    <div className='Review' key={elem.id}>
      <div className='image-container'>
        <FaQuoteRight className='quote-icon' />
        <img src={elem.image} alt={elem.name} />
      </div>

      <h3>{elem.name}</h3>
      <h4>{elem.job}</h4>
      <p>{elem.text}</p>
      <div className='directions'>
        <FaChevronLeft
          className='direction'
          onClick={() => {
            let newIndex = index - 1;
            if (newIndex < 0) setIndex(3);
            else {
              setIndex(newIndex);
            }
          }}
        />
        <FaChevronRight
          className='direction'
          onClick={() => {
            let newIndex = index + 1;
            if (newIndex > 3) setIndex(0);
            else {
              setIndex(newIndex);
            }
          }}
        />
      </div>
      <button
        className='surprise-btn'
        onClick={() => {
          let newIndex = Math.floor(Math.random() * data.length);

          if (newIndex === index) {
            newIndex = index + 1;
            if (newIndex > 3) setIndex(0);
            else {
              setIndex(newIndex);
            }
          } else {
            setIndex(newIndex);
          }
        }}>
        Surprise Me
      </button>
    </div>
  );
};

export default Review;
