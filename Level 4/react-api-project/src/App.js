import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Character from './components/Character'
import Search from './components/Search'
import Favorites from './components/Favorites'
import Footer from './components/Footer'


function App() {

    return(
        <div>
            <nav>
                <Link to="/">Characters</Link>
                <Link to="/search">Search</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
            <div className="container">
                <Switch>
                    <Route exact path="/"><Character /></Route>
                    <Route path="/search"><Search /></Route>
                    <Route path="/favorites"><Favorites /></Route>
                </Switch>
            </div>
            <div className="push"></div>
            <Footer />
        </div>
    )
}

export default App