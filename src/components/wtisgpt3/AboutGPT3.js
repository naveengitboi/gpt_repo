import React from 'react'
import BoxComponent from './BoxComponent'
import './aboutGPT3.css'
function AboutGPT3() {

    const list = [
        {
            title:"Chatbots",
            description:"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        },
        {
            title:"Knowledgebase",
            description:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        },
        {
            title:"Education",
            description:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        }
    ]
  return (
    <div className='wtisGPT3 glass'>
        <div className='wtIsGtp3Div boxComponent'>
            <h1 className='mediumHeading'>What is GPT-3</h1>
            <p className='normalText'>
                We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
            </p>
        </div>
        <div className="exploreLib">
            <h1 className='mainHeading'>
                The possibilities are beyond your imagination
            </h1>
            <a href="#">Explore The Library</a>
        </div>
        <div className='boxComponentsGrid'>
        {
            list.map((item, index) => {
               return(
                <>
                    <BoxComponent key ={index} title = {item.title} description = {item.description} />
                </>
               )
            })
        }
        </div>
    </div>
  )
}

export default AboutGPT3