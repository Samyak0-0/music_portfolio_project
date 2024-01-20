import React from 'react'
import {FaCircleXmark, FaCircle} from "react-icons/fa6"
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import { useGlobalContext } from './Context'

import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
const Descriptions = () => {

  const {selectedSn, handleClose, right_scroll, left_scroll, ProjDesc} = useGlobalContext()



  return (
    <div className='modal_overlay'>
        <div className="modal">
            <div className="mac_tab">
              <FaCircleXmark style={{color: "#ff5f57", cursor: "pointer", margin: "5px 0px 5px 6px"}} size="15px" onClick={handleClose}/>
              <FaCircle style={{color: "#ffbc2f", margin: "5px 0px 5px 6px"}} size="15px"/>
              <FaCircle style={{color: "#28c93f", margin: "5px 0px 5px 6px"}} size="15px"/>
            </div>
            
            <div className="details text-black font-mono text-2xl">
              <div className='h-1/2'><img src={ProjDesc[selectedSn].viewimg} alt='image here'></img></div>
              <div className="title text-3xl font-semibold">{ProjDesc[selectedSn].title}</div>
              <div className='description'>{ProjDesc[selectedSn].description}</div>
              Link: <a href={`${ProjDesc[selectedSn].Link}`} className='linked'>Click here</a>
            </div>
        </div>
        <div className="left_scroll" onClick={left_scroll}><AiOutlineLeft size="30px"/></div>
        <div className="right_scroll" onClick={right_scroll}><AiOutlineRight size="30px"/></div>
    </div>
  )
}

export default Descriptions