import React, {useContext} from 'react'
import {ThemeContext} from './ThemeProvider'

function Main() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return(
        <main className={`${theme}-main`}>
            <h1>Light Theme</h1>
            <br />
            <button onClick={toggleTheme} className={`${theme}-button`}>Switch Theme</button>
        </main>
    )
}

export default Main