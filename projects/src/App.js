import { Container } from "react-bootstrap";
import Question from "./Question";
import data from "./data";
function App() {
  return (
    <div>
      <Container className='d-flex flex-column align-items-center mt-3'>
        <div className='contain'>
          <div className='left'>
            <h4>Questions and Answers about Login</h4>
          </div>
          <div className='right'>
            {data.map((elem) => (
              <Question key={elem.id} {...elem} />
            ))}{" "}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
