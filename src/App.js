import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import './App.css'


function App() {
  return (
    <div className='app bgGradient'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App