import React from 'react'
import './Home.css'


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
                <input type="email" placeholder='Enter your Email' />
                <button className='btnDesigned'>Get Started</button>
            </div>
        </div>
        <div className="homeImgContainer">
            <img src={{}} alt="" />
        </div>
    </div>
  )
}

export default Home