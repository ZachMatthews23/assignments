import React from 'react'
import Character from './Character'
// import {Link, Switch, Route} from 'react-router-dom'

function App() {

    return(
        <div className="container">
            <Character />
            {/* <nav>
                <Link to="/">Characters</Link>
                <Link to="/search">Search</Link>
                <Link to="/favorites">Favorites</Link>
            </nav> */}

            {/* <Switch>
                <Route path="/"><Character /></Route>
                <Route path="/search"></Route>
                <Route path="/favorites"></Route>
            </Switch> */}
        </div>
    )
}

export default App