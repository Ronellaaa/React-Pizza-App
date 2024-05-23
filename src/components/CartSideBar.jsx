export default function CartSideBar({ cart }) {
  return (
    <div className="cart-sidebar">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.img}
            {item.name}${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
