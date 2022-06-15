import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/nav.css";
import logo from "../assets/logo2.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">Online Course</a>
        <a href="/#">About Us</a>
        <div className="LoginSignup float-right">
          <a href="/signin" className="border-none bg-transparent text-purple mr-4">
            Sign In
          </a>
          <button className="px-6 py-2 bg-purple-500 rounded text-white">Sign Up</button>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
