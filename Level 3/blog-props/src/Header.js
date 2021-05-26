import React from 'react'
import Navbar from './Navbar'

function Header() {
    return(
        <header className="header" style={{backgroundImage: "url('https://startbootstrap.github.io/startbootstrap-clean-blog/assets/img/home-bg.jpg')"}}>
            <Navbar />
            <h1 className="page-title">Clean Blog</h1>
            <span className="page-subtitle">A Blog Theme by Start Bootstrap</span>
        </header>
    )
}

export default Header