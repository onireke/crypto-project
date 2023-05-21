import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../styles/componentStyles/Navbar.scss";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="rounded-div">
      <Link to="/">
        <h1 className="cryptobase">Cryptobase</h1>
      </Link>
      <div className="toggle">
        <ThemeToggle />
      </div>
      <div className="sign">
        <Link to="signin" className="signin">
          Sign in
        </Link>
        <Link to="signup" className="signup">
          Sign up
        </Link>
      </div>
      {/*menu icon */}
      <div className="menu" onClick={handleNav}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* mobile menu */}

      <div
        className={
          nav
            ? "md:hidden fixed flex flex-col justify-between h-[90%] left-0  top-20 items-center bg-primary w-full ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="list-container">
          <li className="list">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="list">
            <Link to="/">Account</Link>{" "}
          </li>
          <li className="py-2">
            <ThemeToggle />
          </li>
        </ul>

        <div className="sign-div">
          <Link to="/signin">
            <button className="mobile-signin">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="mobile-signup">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
