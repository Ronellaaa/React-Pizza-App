import aboutPic from "../assets/aboutpizza.jpeg";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about">
      <div
        className="about-top"
        style={{ backgroundImage: `url(${aboutPic})` }}
      ></div>

      <div className="about-bottom">
        <h1>About Us</h1>
        <p>
          Welcome to Your Tasty Pizza, where passion for pizza meets quality and
          tradition. We craft each pizza with the finest ingredients, from
          handmade dough to fresh, flavorful toppings. Our menu offers classic
          favorites and innovative creations, baked to perfection in our
          traditional ovens. Whether you crave a Margherita, Meat Lovers, or a
          gourmet pie, we have something for everyone. We're committed to
          sustainability and supporting our community. Your satisfaction is our
          top priority, ensuring an exceptional dining experience every time.
          Thank you for choosing Your Tasty Pizza. Join us and taste the
          difference passion makes.
        </p>
      </div>
    </div>
  );
}
