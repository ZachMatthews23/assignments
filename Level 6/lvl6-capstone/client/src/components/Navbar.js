import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navBarStyles.css'

export default function Navbar(props) {


    function mobileMenu() {
        document.querySelector('.nav-menu').classList.add('active')
        document.querySelector('.hamburger').classList.add('active')
        document.body.style.overflow = 'hidden'
    }

    function closeMenu() {
        document.querySelector('.nav-menu').classList.remove('active')
        document.querySelector('.hamburger').classList.remove('active')
        document.body.style.overflow = 'scroll'
    }

    const { logout } = props
    return (
        <header className="header">
            <nav className="navbar">
                <a href="/" className="nav-logo">Logo 🏋</a>
                <div className="nav-menu">
                    <Link className="nav-item" to="/profile" onClick={closeMenu}>Profile</Link>
                    <Link className="nav-item" to="/workouts" onClick={closeMenu}>Workouts</Link>
                    <Link className="nav-item" to="/forum" onClick={closeMenu}>Forum</Link>
                    <i className="nav-item" onClick={logout}>Logout</i>
                </div>
                <div onClick={mobileMenu} className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    )
}
