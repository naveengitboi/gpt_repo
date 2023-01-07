import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
        <h1 className='mainHeading'>Do you want to step in to the future before others</h1>
        <a href="#" className='footerBtn'>Request Early Access</a>

        <div className="footerContent">
            <div className='footer'>
                <h1 className='logo mainHeading'>GPT3</h1>
                <p className='detail'>Cretcher All rights reserved...</p>
            </div>
            <div className="footer">
                <p className='linkHeading'>Links</p>
                <ul>
                    <li><a href="#">Overons</a></li>
                    <li><a href="#">Social Media</a></li>
                    <li><a href="#">Counters</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="footer">
                <p className='linkHeading'>Company</p>
                <ul>
                    <li><a href="#">Terms and Conditions</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="footer">
                <p className='linkHeading'>Get in touch</p>
                <ul>
                    <li><a href="#">Naveen</a></li>
                    <li><a href="#">+91-9110346500</a></li>
                    <li><a href="#">naveenjangiti9@gmail.com</a></li>
                </ul>
            </div>
        </div>

        <small>&copy; 2023 All rights reserved</small>
    </div>
  )
}

export default Footer