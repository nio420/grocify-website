import fruitImg from "../assets/fruits-and-veggies.png";
import dairyImg from "../assets/dairy-and-eggs.png";
import meatImg from "../assets/meat-and-seafood.png";


export const categories = [
  {
    id: 1,
    name: "fruits & vegetables",
    description:
      "Fruits and vegetables are an important part of a balanced diet. They are rich in vitamins, minerals, and fiber, which help to keep you healthy and strong.",
    image: fruitImg,
    path: "/fruites",
  },
  {
    id: 2,
    name: "meat & seafood",
    description:
      "Meat and seafood are rich in protein, which is essential for building and repairing tissues in the body. They are also a good source of iron, calcium, and other important nutrients.",
    image: meatImg,
    path: "/seafood",
  },
  {
    id: 3,
    name: "dairy & eggs",
    description:
      "Dairy products like milk, cheese, and yogurt provide essential nutrients such as calcium, protein, and vitamins that help maintain strong bones and overall health.",
    image: dairyImg,
    path: "/dairy",
  },
];


