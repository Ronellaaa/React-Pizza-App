import "./home.css";
import homePizza from "../assets/pizz1.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${homePizza})` }}>
      <div className="home-container">
        <h1 className="heading-1">Craving for a Pizza?</h1>
        <Link to={"/menu"}>
          <button className="order-btn">Order now</button>
        </Link>
      </div>
    </div>
  );
}
