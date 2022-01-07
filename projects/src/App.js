import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import TourList from "./TourList";
function App() {
  const url = "https://course-api.com/react-tours-project";
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className='App'>
      {console.log(tours)}
      <h1>Our Tours</h1>
      <Container className='d-flex justify-content-center mt-3'>
        {loading ? (
          <h2>Loading</h2>
        ) : tours.length === 0 ? (
          <button className='refresh-btn' onClick={fetchTours}>
            Refresh
          </button>
        ) : (
          <TourList tours={tours} onDelete={handleDelete} />
        )}
      </Container>
    </div>
  );
}

export default App;
