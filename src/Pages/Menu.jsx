import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import React, { useState } from "react";

import "../styles/menu.css";
import Sidebar from "../components/SideBar";

export default function Menu() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setSidebarOpen(true);
  };
  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              img={menuItem.img}
              name={menuItem.name}
              price={menuItem.price}
              des={menuItem.des}
              onAddToCart={() => addToCart(menuItem)}
            />
          );
        })}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={handleCloseSidebar}
          cart={cart}
          onRemove={handleRemoveFromCart}
        />
      </div>
    </div>
  );
}
