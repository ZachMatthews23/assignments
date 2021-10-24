import React, { useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import Forum from './pages/Forum'
import Workouts from './pages/Workouts'
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
                    render={() => token ? <Redirect to="/workouts"/> : <Auth />}
                />
                <ProtectedRoute 
                    path="/profile"
                    component={Profile}
                    redirectTo="/"
                    token={token}
                />
                <ProtectedRoute 
                    path="/workouts"
                    component={Workouts}
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