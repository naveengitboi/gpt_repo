import React from 'react'
import './aboutGPT3.css'

function BoxComponent(props) {
  return (
    <>
        <div className="boxComponent">
            <h1 className='mediumHeading'>{props.title}</h1>
            <p className='normalText'>{props.description}</p>
        </div>
    </>
  )
}

export default BoxComponent