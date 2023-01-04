import React from 'react'
import './Home.css'
import homeImg from './img/Header Illustration.png'
import people from './img/Group 81.png'

function Home() {
    
  return (
    <div className='homeContainer'>
        <div className="homeContent">
            <h1 className='mainHeading homeHeading'>lets build something amazing with GPT-3 Open AI
            </h1>
            <p className='normalText'>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>

            <div className="inputEl">
                <input type="email" placeholder='Enter your Email' className='glass' />
                <button className='btnDesigned'>Get Started</button>
            </div>
            <div className="people">
                <img src={people} alt="" />
                <p className='normalText'>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>
        <div className="homeImgContainer">
            <img className='homeImg' src={homeImg} alt="" />
        </div>
    </div>
  )
}

export default Home