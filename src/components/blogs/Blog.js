import React from 'react'
import Card from './Card'
import './Blog.css'
import img4 from './blogImages/Rectangle 22-4.png'
import img3 from './blogImages/Rectangle 22-3.png'
import img2 from './blogImages/Rectangle 22-2.png'
import img1 from './blogImages/Rectangle 22-1.png'
import img0 from './blogImages/Rectangle 22.png'

function Blog() {
    const blogs =[
        {
            title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date: "Sep 26, 2021",
            src: {img4}
        },
         {
            title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date: "Sep 26, 2021",
            src: {img3}
        },
        {
            title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date: "Sep 26, 2021",
            src: {img2}
        },
         {
            title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date: "Sep 26, 2021",
            src: {img1}
        },
        {
            title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
            date: "Sep 26, 2021",
            src: {img0}
        }
    ]

  return (
    <div className='blogContainer'>
        <h1 className='mainHeading'>A lot is happening, 
            We are blogging about it.</h1>
        <div className="blogCardContainer">
            {
                blogs.map((item, index) => {
                    return(
                        <>
                            <Card date = {item.date} src = {item.src} title = {item.title}  />
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Blog