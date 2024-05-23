import { ShoppingCart } from "@mui/icons-material";

export default function MenuItem({ img, name, price, des, onAddToCart }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${img})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
      <p className="menu-des">{des}</p>
      <button className="add-to-cart-button" onClick={onAddToCart}>
        <ShoppingCart></ShoppingCart>
      </button>
    </div>
  );
}
