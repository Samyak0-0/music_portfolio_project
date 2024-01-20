import React, { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useGlobalContext } from "./Context";

const Projects = () => {
  const { ProjDesc, openModal } = useGlobalContext();

  return (
    <div className="flex flex-col w-screen h-screen bg-neutral-800 text-white" id="myproj">
      <div className="text-7xl z-10">Projects</div>
      <div className="container1 w-full h-[80vh]">
        <div id="image-track">
          <Slide slidesToScroll={1} slidesToShow={2}>
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
