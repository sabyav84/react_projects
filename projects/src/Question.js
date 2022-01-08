import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='question'>
      <header>
        <h5>{title}</h5>
        <button onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      {show && <p>{info}</p>}
    </div>
  );
};

export default Question;
