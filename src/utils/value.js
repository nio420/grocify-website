import { BsTruck } from "react-icons/bs";
import { FaShieldAlt } from "react-icons/fa";
import { FaHeart, FaLeaf, FaSeedling } from "react-icons/fa6";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";

export const values = [
  {
    id: 1,
    name: "Trust",
    description:
      "We are committed to earning your trust by providing reliable and honest service.",
    icon: FaHeart,
  },
  {
    id: 2,
    name: "Always Fresh",
    description:
      "Our products are carefully selected and delivered fresh to ensure the best quality.",
    icon: FaLeaf,
  },
  {
    id: 3,
    name: "Food Safety",
    description:
      "We follow strict hygiene and safety standards to keep your food healthy and safe.",
    icon: FaShieldAlt,
  },
  {
    id: 4,
    name: "100% Organic",
    description:
      "We source only certified organic produce, ensuring pure and natural ingredients.",
    icon: FaSeedling,
  },
];

export const steps = [
  {
    id: 1,
    number: TbCircleNumber1Filled,
    name: "Sourcing",
    description:
      "We source only certified organic produce, ensuring pure and natural ingredients.",
    icon: PiPlant,
  },
  {
    id: 2,
    number: TbCircleNumber2Filled,
    name: "Manufacturing",
    description:
      "High-quality production and efficient processes to deliver reliable products.",
    icon: PiFactory,
  },
  {
    id: 3,
    number: TbCircleNumber3Filled,
    name: "Quality Control",
    description:
      "We follow strict hygiene and safety standards to keep your food healthy and safe.",
    icon: SlBadge,
  },
  {
    id: 4,
    number: TbCircleNumber4Filled,
    name: "Logistics",
    description:
      "We ensure safe and efficient delivery so your products reach you fresh and on time.",
    icon: BsTruck,
  },
];

export const faqData = [
  {
    question: "What is GrOcify?",
    answer:
      "GrOcify is an online grocery platform providing fresh, organic, and high-quality groceries delivered straight to your home.",
  },
  {
    question: "How do I place an order?",
    answer:
      "You can browse our categories, select products, add them to your cart, and checkout using our secure payment options.",
  },
  {
    question: "Do you deliver nationwide?",
    answer:
      "Yes, we deliver across major cities. Delivery charges may vary depending on location.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Absolutely! Once your order is placed, you will receive a tracking link to monitor the delivery status.",
  },
  {
    question: "What if I have issues with my order?",
    answer:
      "You can contact our support team via email or phone. We will resolve your issues promptly.",
  },
];
