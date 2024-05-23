import { useState } from "react";
import Logo from "../assets/pizzaLogo.jpeg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu toggled. isMenuOpen:", isMenuOpen);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} className="logoPic" alt="" />
        </div>
        <div className="title-container">
          <p className="title">Your Tasty Pizza</p>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <Link to="/home" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="link">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="hamburger-nav">
        {" "}
        <div className="hamburger-icon" onClick={toggleMenu}>
          {" "}
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>

      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
        {" "}
        <button className="close-btn" onClick={toggleMenu}>
          {" "}
          X
        </button>
        <div className="ham-title-container">
          <p className="ham-title">Your Tasty Pizza</p>
        </div>
        <ul className="ham-nav-links">
          <li>
            <Link to="/home" className="link" onClick={toggleMenu}>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu" className="link" onClick={toggleMenu}>
              {" "}
              Menu
            </Link>
          </li>
          <li>
            <Link to="/about" className="link" onClick={toggleMenu}>
              {" "}
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link" onClick={toggleMenu}>
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
