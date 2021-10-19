import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const { logout } = props
    return (
        <div>
            <Link to="/profile" >Profile</Link>
            <Link to="/workouts" >Workouts</Link>
            <Link to="/forum" >Forum</Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
