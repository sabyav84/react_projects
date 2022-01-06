import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [cards, setCards] = useState(data);

  return (
    <div>
      <Container className=' justify-content-center m-5'>
        {cards.length > 0 ? (
          <h3>{cards.length} birthdays today</h3>
        ) : (
          <h3>No birthday today</h3>
        )}
        <List cards={cards} />
        <Button className='btn-block' onClick={() => setCards([])}>
          Clear List
        </Button>
      </Container>
    </div>
  );
}

export default App;
