import { useState } from 'react'

import './App.css'
import Homepage from './components/Homepage'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import ContactPage from './components/ContactPage'
import Descriptions from './components/Descriptions'
import { useGlobalContext } from './components/Context'
import Navbar from './components/Navbar'
import Menu from './components/Menu'

function App() {
  
  const {showModal, menu} = useGlobalContext()  

  return (
    <>
      <Navbar />
      {menu && <Menu />}
      <Homepage />
      <Expertise />
      <Projects />
      {showModal && <Descriptions />}
      <ContactPage />
    </>
  )
}

export default App
