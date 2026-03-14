import React, { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { underConstruction } from "../utils/toast";

const navlist = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Process", path: "/process" },
  { name: "Contact Us", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScroll, setIsScroll] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])

  return (
    <header className= {`bg-white fixed z-50 w-full overflow-x-hidden py-2.5 ${isScroll ? "bg-linear-to-r from-orange-400/20 via-white/10 to-orange-500/20 backdrop-blur-lg shadow-md transition-all duration-500" : null}`}>
      <nav className="max-w-330 mx-auto flex justify-between items-center w-full h-15 px-6">
        {/* logo */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500">O</span>cify
        </Link>

        {/* desktop nav */}
        <div className="hidden lg:flex gap-x-10 tracking-wider justify-center flex-1">
          {navlist.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative group text-base font-medium transition duration-300
        ${isActive ? "text-orange-500 after:w-full" : "text-gray-700 hover:text-orange-500"}
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300
        after:w-0 group-hover:after:w-full`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* nav action */}
        <div className="flex items-center gap-4">
          {/* serch bar */}
          <div className="lg:flex p-1 relative hidden">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="w-full h-10 px-4 py-2 text-sm text-gray-800 bg-white border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-linear-to-b from-red-400 to-orange-400 transition cursor-pointer text-white p-1 rounded-full ">
              <IoSearch size={18} className="" />
            </button>
          </div>
          {/* icons */}
          <Link>
            {" "}
            <GoHeartFill onClick={underConstruction} className="text-2xl text-zinc-800 hover:text-orange-500 transition-all duration-300" />
          </Link>
          <Link>
            {" "}
            <HiShoppingBag onClick={underConstruction} className="text-2xl text-zinc-800 hover:text-orange-500 transition-all duration-300" />
          </Link>

          {/* mobile nav */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-orange-500 hover:text-orange-700 transition-all duration-300 ease-in-out cursor-pointer"
            >
              {isOpen ? <FaXmark size={18} /> : <CiMenuFries size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      {isOpen && (
        <div className={`lg:hidden bg-linear-to-b from-gray-400/40 via-black/30 to-gray-300/20 backdrop-blur-2xl  border-white/10 ${isOpen ? "animate-slideDown" : "animate-slideUp"}`}>
          <div className="flex flex-col items-center gap-6 py-6">
            {navlist.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `relative group text-base font-medium transition duration-300
          ${isActive ? "text-orange-500 after:w-full" : "text-gray-700 hover:text-orange-500"}
          after:content-[''] after:absolute after:left-0 after:-bottom-1
          after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300
          after:w-0 group-hover:after:w-full`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          
          {/* search bar */}
          <div className="w-full flex justify-center my-2 pb-4">
            <div className="relative w-72">
              <input
                type="text"
                placeholder="Search..."
                autoComplete="off"
                className="w-full h-10 px-4 pr-10 text-sm text-black bg-white/5 border border-white/20 rounded-full backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-gray-700 "
              />

              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-linear-to-b from-orange-400 to-orange-500 text-white p-1.5 rounded-full hover:scale-105 transition">
                <IoSearch size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};
