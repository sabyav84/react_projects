import { Container } from "react-bootstrap";
function List({ cards }) {
  return (
    <Container>
      {cards.map((elem) => {
        return (
          <article key={elem.id} className='person'>
            <img src={elem.image} alt={elem.name} className='profile-pic' />

            <div>
              {" "}
              <h3>{elem.name}</h3>
              <p>{elem.age} years old</p>
            </div>
          </article>
        );
      })}
    </Container>
  );
}

export default List;
