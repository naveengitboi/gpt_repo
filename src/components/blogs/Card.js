import React from 'react'
import './Blog.css'

function Card(props) {
  return (
    <div className='blogCard'>
        <img src={props.src.img0} className= "blogImg" alt="" />
        <div className="blogContent">
            <small>{props.date}</small>
            <h1 className='mediumHeading'>{props.title}</h1>
            <small><a href="#">Read Full Article</a></small>
        </div>
    </div>
  )
}

export default Card