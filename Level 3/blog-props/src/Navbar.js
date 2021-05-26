import React from 'react'

function Navbar() {
    return(
        <div className="navbar">
            <a className="nav-link" href="html.com">Start Bootstrap</a>
            <div>
                <ul className="nav-list">
                    <li className="list-item"><a className="navbar-link" href="html.com">HOME</a></li>
                    <li className="list-item"><a className="navbar-link" href="html.com">ABOUT</a></li>
                    <li className="list-item"><a className="navbar-link" href="html.com">SAMPLE POST</a></li>
                    <li className="list-item"><a className="navbar-link" href="html.com">CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar