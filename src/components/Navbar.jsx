import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/componentStyles/Navbar.scss";

function Navbar() {
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
      <div className="menu">
        <AiOutlineMenu />
      </div>

      {/* mobile menu */}

      <div className="mobile-menu">
        <ul className="list-container">
          <li className="list">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="list">
            <Link to="/">Account</Link>{" "}
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div>
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
