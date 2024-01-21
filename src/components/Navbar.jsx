import React from "react";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  
  const {menu, setMenu, _x} = useGlobalContext()

  

  const showMenu = () => {
    setMenu(!menu)
  }

  return (
    <div>
      <div className="nav_bar">
        <ul className={_x > 500 ? "nav_li" : "hide"}>
          <li className="nav_elements">
            <a href="#home" className="nav_link">
              Home
            </a>
          </li>
          <li className="nav_elements">
            <a href="#skills" className="nav_link">
              Expertise
            </a>
          </li>
          <li className="nav_elements">
            <a href="#myproj" className="nav_link">
              Projects
            </a>
          </li>
          <li className="nav_elements">
            <a href="#contact" className="nav_link">
              Contact Me!
            </a>
          </li>
        </ul>

        <div className={_x < 500 ? " absolute right-6 border border-slate-400 rounded-md p-2" : "hide"}>
          <RxHamburgerMenu size={40} color="white" onClick={showMenu} />
        </div>
        <div className={_x < 500 ? " absolute left-6 text-white text-4xl" : "hide"}>
          Avinash
        </div>
      </div>
    </div>
  );
};

export default Navbar;
