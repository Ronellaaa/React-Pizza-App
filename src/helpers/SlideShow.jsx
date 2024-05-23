import Slideshow from "../components/Slideshow";
import Pepperoni from "../assets/Pizzas/pepperoniPizza.jpeg";
import Margherita from "../assets/Pizzas/Magheritajpeg.jpeg";
import Hawaiian from "../assets/Pizzas/Hawaiian Pizza.jpeg";
import Supreme from "../assets/Pizzas/supreme.jpeg";
import BBQchicken from "../assets/Pizzas/BBQChickenPizza.jpeg";

const SlideShow = () => {
  const slides = [
    {
      image: Pepperoni,
      description:
        "A popular choice topped with tomato sauce, generous slices of pepperoni, and melted mozzarella cheese",
    },
    {
      image: Margherita,
      description:
        "A classic pizza topped with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil!",
    },
    {
      image: Hawaiian,
      description:
        "Featuring a combination of tomato sauce, ham or Canadian bacon, pineapple chunks, and mozzarella cheese.",
    },
    {
      image: Supreme,
      description:
        "A loaded pizza with tomato sauce, pepperoni, sausage, bell peppers, onions, mushrooms, and olives",
    },
    {
      image: BBQchicken,
      description:
        "Savor the rich flavors of BBQ Chicken Pizza topped with smoky barbecue sauce, seasoned chicken, onions, and a blend of cheeses.",
    },
  ];

  return (
    <div>
      <Slideshow slides={slides} interval={3000} />
    </div>
  );
};

export default SlideShow;
