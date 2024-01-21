import React from "react";
import Prop from "../assets/prop.png";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import RoleModel from "../assets/role-model.png";
import { useGlobalContext } from "./Context";

const ContactPage = () => {

  const {offsetY} = useGlobalContext()

  return (
    <div className="contact-pg h-screen bg-neutral-900 text-white text-8xl " id="contact">
      <p className="hi text-7xl font-bold overflow-hidden mt-4 ml-4 p-4">Contact Me!</p>
      <div className="relative top-[5vh]">
      <div className={(offsetY>window.innerHeight*2.5)? 'socials absolute z-10': "hide"}>
        <div className="hero"><a
          href="https://glocalteenhero.com/avinash-kumar-paswan/"
          target="_blank"
        >
          <img src={RoleModel} width="60px"></img>
        </a></div>
        <div><a className="fb absolute" href="https://www.facebook.com/razzavinash99" target="_blank">
          <FaFacebook size={60} />
        </a></div>
        <div><a
          className="ig"
          href="https://www.instagram.com/avirazzofficial?igsh=YnJsejdwN294Y24x&utm_source=qr"
          target="_blank"
        >
          <FaInstagram size={60} />
        </a></div>
        <div><a
          className="yt"
          href="https://www.youtube.com/@avinash_99"
          target="_blank"
        >
          <FaYoutube size={60} />
        </a></div>
        <div><a
          className="mail"
          href="https://mailto:avinashpaswan.edu@gmail.com"
          target="_blank"
        >
          <IoMdMail size={60} />
        </a></div>
      </div>
      <div>
        <img src={Prop} className="prop_img"></img>
      </div>
      </div>
    </div>
  );
};

export default ContactPage;
