import { useState } from 'react'

import './App.css'
import Homepage from './components/Homepage'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import ContactPage from './components/ContactPage'
import Descriptions from './components/Descriptions'
import { useGlobalContext } from './components/Context'
import Navbar from './components/Navbar'

function App() {
  
  const {showModal} = useGlobalContext()  

  return (
    <>
      <Navbar />
      <Homepage />
      <Expertise />
      <Projects />
      {showModal && <Descriptions />}
      <ContactPage />
    </>
  )
}

export default App
