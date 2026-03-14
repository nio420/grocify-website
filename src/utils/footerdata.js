import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

export const footerData = {
  quickLinks: [
    { label: "Home", page: "/" },
    { label: "About Us", page: "about" },
    { label: "Process", page: "process" },
    { label: "Contact Us", page: "contact" },
  ],
  socialLinks: [
    { icon: FaFacebook, url: "#" },
    { icon: FaInstagram, url: "#" },
    { icon: FaPinterestP, url: "#" },
    { icon: FaLinkedinIn, url: "#" },
  ],
  support: [
    "Support Center",
    "Feedback",
    "Contact Us",
    "FAQ"
  ],
};
