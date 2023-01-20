import React, { useState } from "react"
import './App.css'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode((prevState) => !prevState)
  }
  return (
    <div className='main-container'>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default App
