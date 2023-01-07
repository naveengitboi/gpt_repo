import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Companies from './components/companies/Companies'
import AboutGPT3 from './components/wtisgpt3/AboutGPT3'
import Feature from './components/feature/Feature'
import Possibility from './components/possibilities/Possibility'
import Cta from './components/cta/Cta'
import Blog from './components/blogs/Blog'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className='app bgGradient'>
      <Navbar/>
      <Home/>
      <Companies/>
      <AboutGPT3/>
      <Feature/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App