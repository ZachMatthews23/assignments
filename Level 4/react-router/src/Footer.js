import React from 'react'
import {SocialIcon} from 'react-social-icons'

function Footer() {
    return(
        <footer>
            <span className="left">
                <h3><a className="left-link" href="www.google.com">Call for an estimate</a></h3>
            </span>
            <span className="middle">
                <h3>Contact Us</h3>
                <p>Plumbers Crack, LLC</p>
                <p>123 Street Name</p>
                <p>SLC, UT 80000</p>
            </span>
            <span className="right">
                <h3>Check Us Out:</h3>
                <SocialIcon url="https://twitter.com"/>
                <SocialIcon url="https://facebook.com"/>
                <SocialIcon url="https://instagram.com"/>
            </span>
        </footer>
    )
}

export default Footer