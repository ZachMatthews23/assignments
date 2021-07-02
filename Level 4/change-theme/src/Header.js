import React, {useContext} from 'react'
import {ThemeContext} from './ThemeProvider'

function Header() {
    const {theme} = useContext(ThemeContext)
    return(
        <header className={`${theme}-header`}>
            <h3>React</h3>
            <h3>Hooks</h3>
            <h3>Rock</h3>
        </header>
    )
}

export default Header