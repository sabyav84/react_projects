import React from "react";
import menu from "./data";

const Menu = ({ menuItems }) => {
  return (
    <div>
      {menuItems.map((menuItem) => {
        return (
          <div className='menu-item' key={menuItem.id}>
            <img src={menuItem.img} alt={menuItem.title} />
            <div className='menu-right'>
              <div className='menu-right-top'>
                <h4>{menuItem.title}</h4>
                <h4>{menuItem.price}</h4>
                <br />
                <p>{menuItem.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
