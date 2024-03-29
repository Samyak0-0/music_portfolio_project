import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useGlobalContext } from "./Context";

const Projects = () => {
  const { ProjDesc, openModal, _x } = useGlobalContext();


  return (
    <div className="flex flex-col w-screen h-screen bg-neutral-800 text-white" id="myproj">
      <div className=" hi text-7xl font-bold overflow-hidden z-10 mt-4 p-8 sm:mt-[20vh]">Projects</div>
      <div className="container1 w-full h-[70vh] sm:h-[60vh] sm:relative sm:top-[10vh]">
        <div id="image-track">
          <Slide slidesToScroll={1} slidesToShow={(_x > 500)? 2 : 1}>
            {
              ProjDesc.map(e => {
                return(<div key={e.sn} className=" cursor-pointer" onClick={() => openModal(e.sn)}>
                  <img src={e.front_img} className="image" ></img>
                </div>)
              })
            }
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Projects;
