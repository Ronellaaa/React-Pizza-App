import React, { useState, useEffect } from "react";
import "../styles/Slideshow.css";

const Slideshow = ({ slides, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % slides.length;
    const id = setTimeout(() => setCurrent(next), interval);
    return () => clearTimeout(id);
  }, [current, slides.length, interval]);

  return (
    <div className="slideshow-container">
      <h1>Welcome to Our Pizzeria!</h1>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === current ? "slide active" : "slide"}
        >
          <div className="image-container">
            <img src={slide.image} alt={`Slide ${index}`} />
          </div>

          <div className="slide-description">{slide.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
