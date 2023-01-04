import React from 'react'
import './Cta.css'
function Cta() {
  return (
    <div className='ctaContainer'>
        <div className="ctaContent">
            <a href="#" className='normalText'>Request for early access to get started</a>
            <h1 className='mediumText'>Register today & start exploring the endless possiblities.</h1>
        </div>
        <div className="action">
            <button className='darkBtn'>Get Started</button>
        </div>
    </div>
  )
}

export default Cta