import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Profile from './components/Profile'
import Public from './components/Public'
import { UserContext } from './context/UserContext.js'

export default function App(){
    const { 
        token, 
        logout, 
        signup, 
        login,
        user: {
            username
        },
        addIssue,
        issues
    } = useContext(UserContext)
    
    return(
        <div className="app">
            <Navbar logout={logout} />
            <Switch>
                <Route 
                    exact path="/"
                    render={()=> token ? <Redirect to="/profile"/> : <Auth signup={signup} login={login} />}
                />
                <Route 
                    path="/profile"
                    render={() => <Profile username={username} addIssue={addIssue} issues={issues}/>}
                />
                <Route 
                    path="/public"
                    render={() => <Public />}
                /> 
            </Switch>
        </div>
    )
}