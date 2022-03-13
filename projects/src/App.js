import { Container } from "react-bootstrap";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import { useState } from "react";

const allCategories = [...new Set(items.map((item) => item.category))];

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(items);

  return (
    <div>
      <Container className='d-flex justify-content-center mt-3'>
        <div className='contain'>
          <header>
            <h1>our menu</h1>
            <div className='underline'></div>
          </header>
          <Categories categories={categories} />
          <div className='menu-items'>
            <Menu menuItems={menuItems} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
