import React, {useContext} from 'react'
import {ThemeContext} from './ThemeProvider'

function Footer() {
    const {theme} = useContext(ThemeContext)
    return(
        <footer className={`${theme}-footer`}>
            <p>Footer ©</p>
        </footer>
    )
}

export default Footer