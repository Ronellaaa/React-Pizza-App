import "../styles/sidebar.css";
export default function SideBar({ isOpen, onClose, cart, onRemove }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img
              src={item.img}
              alt={item.name}
              style={{ width: "50px", height: "50px" }}
            />
            {item.name} - ${item.price}
            <button className="remove-btn" onClick={() => onRemove(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
