import React from 'react'
import { useState, useEffect } from 'react'

const Navbar = () => {


  return (

    <div className={'nav_bar'}>
        <ul className='nav_li'>
            <li className='nav_elements'><a href='#home' className='nav_link'>Home</a></li>
            <li className='nav_elements'><a href='#skills' className='nav_link'>Expertise</a></li>
            <li className='nav_elements'><a href='#myproj' className='nav_link'>Projects</a></li>
            <li className='nav_elements'><a href='#contact' className='nav_link'>Contact Me!</a></li>
        </ul>
    </div>
  )
}

export default Navbar