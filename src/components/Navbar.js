import React, { useState, useEffect, useRef } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const getStorageTheme = () => {
  let theme = null;
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const [navColor, setNavColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const location = useLocation();

  const changeNavColor = () => {
    if (window.location.pathname === "/home") {
      setNavColor("#ffffff");
      setTextColor("#000000");
      setBackgroundColor("#000000");
    } else if (window.location.pathname === "/wephco") {
      setNavColor("#0a4f6a");
      setTextColor("#ffffff");
      setBackgroundColor("#0B4F6C");
    } else if (window.location.pathname === "/wella-agent") {
      setNavColor("#4059AD");
      setTextColor("#000000");
      setBackgroundColor("#FFFFFF");
    } else if (window.location.pathname === "/epay") {
      setNavColor("#465055");
      setTextColor("#000000");
      setBackgroundColor("#FFFFFF");
    } else if (window.location.pathname === "/portfolio") {
      setNavColor("#094440");
      setTextColor("#000000");
      setBackgroundColor("#FFFFFF");
    } else if (window.location.pathname === "/chronicare") {
      setNavColor("#1489C8");
      setTextColor("#000000");
      setBackgroundColor("#FFFFFF");
    }
  };

  const refContainer = useRef();

  useEffect(() => {
    changeNavColor();
    // console.log(refContainer.current);
  }, [location]);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme(null);
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const style = {
    zIndex: "999",
    backgroundColor: "#ffffff",
  };

  return (
    <div
      className={`fixed bg-[${navColor}] shadow-sm dark:bg-[#131313] px-10 py-5 w-full mx-auto flex items-center z-10 text-base md:text-lg`}
    >
      <Link to="/home">
        <h4
          className={`tracking-wider md:text-xl text-[${backgroundColor}] dark:text-white font-semibold`}
        >
          VICTOR ASUQUO
        </h4>
      </Link>

      <div
        className={`w-[33%] md:w-[68%] flex justify-end md:justify-center lg:justify-end`}
      >
        <button
          className={`bg-[${backgroundColor}] text-[${textColor}] dark:bg-white flex dark:text-black  p-1 rounded-full`}
          onClick={toggleTheme}
        >
          {theme ? <BsSun /> : <BsMoon />}
        </button>
      </div>

      <button
        ref={refContainer}
        className={`absolute bg-[${backgroundColor}] text-[${textColor}] right-10 text-white  bg-black dark:bg-white px-4 py-1 rounded-[3px] underline underline-offset-2 dark:text-[#131313] md:hidden`}
      >
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSecgDfuqRhJduPZcRQlVJzlCqrHG5WkReehjWWnZm-z2KCGLmRShZIUF7zpas74gFe3sNYN_rl33XK/pub"
          target="_blank"
        >
          My Resume
        </a>
      </button>
      <button
        className={`absolute hidden bg-[${backgroundColor}] text-[${textColor}]  text-white right-10 dark:text-[#131313] dark:bg-white bg-black px-4 py-1 rounded-[3px] underline underline-offset-2 md:block`}
      >
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSecgDfuqRhJduPZcRQlVJzlCqrHG5WkReehjWWnZm-z2KCGLmRShZIUF7zpas74gFe3sNYN_rl33XK/pub"
          target="_blank"
        >
          View My Resume
        </a>
      </button>
    </div>
  );
};

export default Navbar;
