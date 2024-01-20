import React, { useContext } from 'react'
import { useState, useEffect } from "react";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";

const Context = React.createContext()

const ContextProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false)
    const [selectedSn, setSelectedSn] = useState(0)

    const handleClose = () => {
      setShowModal(false)
    }

    const openModal = (sn) => {
      setSelectedSn(sn)
      setShowModal(true)
    }

    const left_scroll = () => {
      if (selectedSn == 0) {
        setSelectedSn(4)
      } else {
        setSelectedSn(selectedSn - 1)
      }
    }

    const right_scroll = () => {
      if (selectedSn == 4) {
        setSelectedSn(0)
      } else {
        setSelectedSn(selectedSn + 1)
      }
    }


    
    const [offsetY, setOffSetY] = useState(0)
    const handleScroll = () => setOffSetY(window.pageYOffset)

      useEffect(() => {
          window.addEventListener("scroll", handleScroll)
          return() => window.removeEventListener("scroll", handleScroll)
      },[])
    
  const ProjDesc = [{
    sn: 0,
    title: "Ghurmi nachaade",
    description: "....",
    front_img: Project1,
    viewimg: "",
    Link: "https://www.youtube.com/watch?v=ltg3MEKOQks&pp=ygUPZ2h1cm1pIG5hY2hhYWRl"
  },
  {
    sn: 1,
    title: "Shiv Ji",
    description: "....",
    front_img: Project2,
    viewimg: "",
    Link:"https://www.youtube.com/watch?v=dxoz9y4KDOg&pp=ygUHc2hpdiBqaQ%3D%3D"
  },
  {
    sn:2,
    title: "MANKO  DHANI",
    description: "....",
    front_img: Project2,
    viewimg: "",
    Link:"https://www.youtube.com/watch?v=36cKXdEU5QY&pp=ygUddGltcm8gc2F0aCBiaW5hIHByYW1vZCBraGFyZWw%3D"
  },
  {
    sn: 3,
    title: "12 gaau of biraj bhatta, Agasatya",
    description: "....",
    front_img: Project1,
    viewimg: "",
    Link:"https://www.youtube.com/watch?v=YtBv1F1yR00&pp=ygUJbWFubiBjaGhh"
  },
  {
    sn: 4,
    title: "Musical Awareness Program",
    description: "....",
    front_img: Project2,
    viewimg: "",
    Link:""
  },]


    return <Context.Provider value={{ offsetY, showModal, handleClose, openModal, selectedSn, right_scroll, left_scroll, ProjDesc}}>
        {children}
    </Context.Provider>
}

export const useGlobalContext = () => {
  return useContext(Context)
}

export {Context, ContextProvider}