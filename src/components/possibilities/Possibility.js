import React from 'react'
import './Possibility.css'
import possImg from './Feature Image.png'
function Possibility() {
  return (
    <div className='possibilityContainer'>
        <img src={possImg} className ="possImg"  alt="" />
        <div className="possContent">
            <a href="#">Request Early Access to Get Started</a>
            <h1 className='mainHeading'>The possibilities are beyond your imagination</h1>
            <p className='normalText'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <a style={{color:'#FF8A71'}} href="#">Request Early Access to Get Started</a>
        </div>
    </div>
  )
}

export default Possibility