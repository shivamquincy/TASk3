import { useState } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Navbar from "../src/components/Navbar"
import Cardw from "../src/components/Cardw"
import { programs } from './data'

import './App.css'


function App() {

  const [count, setCount] = useState(0)
   

  return (
    <BrowserRouter>
      <Navbar />
      <Cardw />
   
  </BrowserRouter>
    
    
  )
}

export default App
