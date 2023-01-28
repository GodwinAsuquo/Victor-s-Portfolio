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
  const [navBackground, setNavBackground] = useState("");
  const [textColor, setTextColor] = useState("");
  const [iconBackground, setIconBackground] = useState("");

  const location = useLocation();

  const changeNavProperties = () => {
    if (window.location.pathname === "/home") {
      setNavBackground("#fff");
      setTextColor("white");
      setIconBackground("white");
    } else if (window.location.pathname === "/wephco") {
      setNavBackground("#095069");
      setTextColor("#fff");
      setIconBackground("#000");
    } else if (window.location.pathname === "/wella-agent") {
      setNavBackground("#4059AD");
      setTextColor("#fff");
      setIconBackground("#000");
    } else if (window.location.pathname === "/epay") {
      setNavBackground("#465055");
      setTextColor("#000000");
      setIconBackground("#FFF");
    } else if (window.location.pathname === "/portfolio") {
      setNavBackground("#094440");
      setTextColor("#000000");
      setIconBackground("#FFFFFF");
    } else if (window.location.pathname === "/chronicare") {
      setNavBackground("#1489C8");
      setTextColor("#000000");
      setIconBackground("#FFFFFF");
    }
  };

  const refContainer = useRef();

  useEffect(() => {
    changeNavProperties();
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
    iconBackground: "#ffffff",
  };

  return (
    <div
      className={`fixed bg-[${navBackground}] shadow-sm dark:bg-[#131313] px-10 py-5 w-full mx-aut0 flex items-center z-10 text-base md:text-lg`}
    >
      <Link to="/home">
        <h4
          className={`tracking-wider md:text-xl text-[${iconBackground}] dark:text-white font-semibold`}
        >
          VICTOR ASUQUO
        </h4>
      </Link>

      <div className={` w-[33%] lg:w-[68%] flex justify-center lg:justify-end`}>
        <button
          className={`bg-[${iconBackground}] text-[${textColor}] dark:bg-white flex dark:text-black p-1 rounded-full`}
          onClick={toggleTheme}
        >
          {theme ? <BsSun /> : <BsMoon />}
        </button>
      </div>

      <button
        ref={refContainer}
        className={` bg-[${iconBackground}] text-[${textColor}]  text-white  bg-black dark:bg-white px-4 py-1 rounded-[3px] underline underline-offset-2 dark:text-[#131313] md:hidden`}
      >
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSecgDfuqRhJduPZcRQlVJzlCqrHG5WkReehjWWnZm-z2KCGLmRShZIUF7zpas74gFe3sNYN_rl33XK/pub"
          target="_blank"
        >
          My Resume
        </a>
      </button>
      <button
        className={`absolute hidden bg-[${iconBackground}] text-[${textColor}]  text-white right-10 dark:text-[#131313] dark:bg-white bg-black px-4 py-1 rounded-[3px] underline underline-offset-2 md:block`}
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
