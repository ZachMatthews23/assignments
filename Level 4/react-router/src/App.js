import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Footer from './Footer'


function App() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/about"><About /></Route>
            </Switch>

            <Footer />
        </nav>
    )
}

export default App