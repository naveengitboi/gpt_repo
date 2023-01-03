import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar glass'>
        <h1 className='logo mainHeading'>GPT-3</h1>
        <div className='navLinks'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">What is GPT?</a></li>
                <li><a href="#">Open AI</a></li>
                <li><a href="#">Case studies</a></li>
                <li><a href="#">library</a></li>
            </ul>
        </div>
        <div className="signInDiv">
            <button className='normalBtn'>Sign In</button>
            <button className='btnDesigned'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar