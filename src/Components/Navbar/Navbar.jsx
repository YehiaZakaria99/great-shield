import logo from "../../assets/navbar/logo.svg";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScrolling(window.scrollY > 50);
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full top-0 z-50 px-5 py-1 ${
        scrolling ? "bg-(--nav-bg) shadow-lg" : "shadow-none"
      } duration-300`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-1">
        {/* Logo */}
        <div className="font-bold">
          <img className="logo" src={logo} alt="logo" />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 text-lg text-white">
          <NavLink
            to="/"
            className="hover:text-(--main-hover-color) transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-(--main-hover-color) transition"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-(--main-hover-color) transition"
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className="hover:text-(--main-hover-color) transition"
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-(--main-hover-color) transition"
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-(--main-color) cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-(--nav-bg) text-white px-5 rounded-md ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => closeMenu()}
          className="block py-2 hover:text-(--main-hover-color) transition"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => closeMenu()}
          className="block py-2 hover:text-(--main-hover-color) transition"
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          onClick={() => closeMenu()}
          className="block py-2 hover:text-(--main-hover-color) transition"
        >
          Services
        </NavLink>
        <NavLink
          to="/projects"
          onClick={() => closeMenu()}
          className="block py-2 hover:text-(--main-hover-color) transition"
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => closeMenu()}
          className="block py-2 hover:text-(--main-hover-color) transition"
        >
          Contact Us
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;

/* 



*/
