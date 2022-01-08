import { Container } from "react-bootstrap";
import Review from "./Review";
import reviews from "./data";
import { useState } from "react";
function App() {
  const [data, setData] = useState(reviews);
  return (
    <div>
      <Container>
        <div className='contain'>
          <h1>Our Reviews</h1>
          <Review data={data} />
        </div>
      </Container>
    </div>
  );
}

export default App;
