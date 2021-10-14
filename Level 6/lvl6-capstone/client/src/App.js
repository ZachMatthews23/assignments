import React, { useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Profile from './components/Profile'
import Forum from './components/Forum'
import ProtectedRoute from './components/ProtectedRoute'
import { UserContext } from './context/UserProvider.js'

export default function App(){
    const { token, logout } = useContext(UserContext)
    return (
        <div className="app">
            { token && <Navbar logout={ logout } />}
            <Switch>
                <Route 
                    exact path="/"
                    render={() => token ? <Redirect to="/profile"/> : <Auth />}
                />
                <ProtectedRoute 
                    path="/profile"
                    component={Profile}
                    redirectTo="/"
                    token={token}
                />
                <ProtectedRoute 
                    path="/forum"
                    component={Forum}
                    redirectTo="/"
                    token={token}
                />
            </Switch>
        </div>
    )
}