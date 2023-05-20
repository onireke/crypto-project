import React from "react";
import { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/componentStyles/ThemeToggle.scss";

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      {theme === "dark" ? (
        <div
          className="mode"
          onClick={() => (setTheme === "dark" ? "light" : "dark")}
        >
          <HiSun className="text-primary text-2xl mr-2" />
          Light Mode
        </div>
      ) : (
        <div
          className="mode"
          onClick={() => (setTheme === "dark" ? "light" : "dark")}
        >
          <HiMoon className="text-primary text-2xl mr-2" />
          Dark Mode
        </div>
      )}
    </div>
  );
}

export default ThemeToggle;
