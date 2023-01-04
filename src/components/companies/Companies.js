import React from 'react'
import './companies.css'
import google from './google.png'
import dropBox from './dropbox.png'
import shopify from './shopify.png'
import slack from './slack.png'
import atlassian from './atlassian.png'

function Companies() {
  return (
    <div className='companyImages'>
        <img src={google} alt="" />
        <img src={dropBox} alt="" />
        <img src={shopify} alt="" />
        <img src={slack} alt="" />
        <img src={atlassian} alt="" />
    </div>
  )
}

export default Companies