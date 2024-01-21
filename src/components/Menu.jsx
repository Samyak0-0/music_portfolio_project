import React from "react";
import { useGlobalContext } from "./Context";

const Menu = () => {

    const {setMenu} = useGlobalContext()

  return (
    <div className=" fixed w-screen h-screen bg-zinc-900 z-20">
      <ul className="text-white text-6xl flex flex-col justify-around h-4/5 relative top-[10vh]  ">
        <li className="overflow-hidden p-6 border-b-2 border-gray-500">
          <a href="#home" className="" onClick={() => setMenu(false)}>
            Home
          </a>
        </li>
        <li className="overflow-hidden p-6 border-b-2 border-gray-500">
          <a href="#skills" className="" onClick={() => setMenu(false)}>
            Expertise
          </a>
        </li>
        <li className="overflow-hidden p-6 border-b-2 border-gray-500">
          <a href="#myproj" className="" onClick={() => setMenu(false)}>
            Projects
          </a>
        </li>
        <li className="overflow-hidden p-6 border-b-2 border-gray-500">
          <a href="#contact" className="" onClick={() => setMenu(false)}>
            Contact Me!
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
