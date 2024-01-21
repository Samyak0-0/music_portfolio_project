import React, { useEffect } from "react";
import TagCanvas from "tag-canvas";
import { useGlobalContext } from "./Context";
import pic1 from "../assets/pic1.png";
import pic3 from "../assets/pic3.png";
import pic2 from "../assets/pic2.png";

const Expertise = () => {
  const { offsetY, _x } = useGlobalContext();

  const skills = [
    {
      sn: 1,
      header_: "Software",
      subheader_: ["Logic Pro X", "FL Studio"],
    },
    {
      sn: 2,
      header_: "Experience  (3 years )",
      subheader_: ["Studio Workshops", "Live Recordings"],
    },
    {
      sn: 3,
      header_: "Instruments",
      subheader_: ["Guitar", "Piano", "Geoshred", "Launchpads", "DJ"],
    },
  ];

  return (
    <div className=" overflow-hidden h-screen z-0 bg-stone-700 text-white relative" id="skills">
      <p className="z-20 expertise hi absolute right-[30px] top-[5vh] text-7xl font-bold overflow-hidden">
        Expertise
      </p>
      <div className="body2 z-20 flex w-screen">
        <div className="expt-div  w-2/3 mt-[20vh] lg:mt-[22vh] lg:ml-[25vw] ml-[20vw] flex flex-col gap-[5vh] md:gap-[10vh]">
          {skills.map((obj) => {
            return (
              <div
                key={obj.header_}
                className={
                  offsetY > window.innerHeight * 0.3
                    ? `woosh${obj.sn}  pl-3`
                    : "hide"
                }
              >
                <div className=" text-5xl font-semibold overflow-hidden">
                  {obj.header_}
                </div>
                <div className="flex md:gap-6 flex-wrap gap-2">
                  {obj.subheader_.map((e) => {
                    return (
                      <div
                        key={e}
                        className=" inline-block text-xl md:text-2xl my-2"
                      >
                        {e}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className=" shuffl_container -z-10 absolute right-[5vw] sm:right-[1vw] md:right-[1vw] top-[20vh]  h-[80vh] w-full overflow-hidden flex flex-col gap-3">
        <div className="">
        <div className="  overflow-visible mt-2 ">
          <img src={pic1} className="i mr-4 " />
        </div>
        <div className="   overflow-visible">
          <img src={pic3}  className="i mr-4 mt-2" />
        </div>
        </div>
        <div className="   overflow-visible ">
          <img src={pic2} className="i mr-4 " />
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Expertise;
