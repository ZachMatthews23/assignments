import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Profile from './components/Profile'
import Public from './components/Public'
import { UserContext } from './context/UserContext'


export default function App(){
    const { token } = useContext(UserContext)
    
    return(
        <div className="app">
            <Navbar />
            <Switch>
                <Route 
                    exact path="/"
                    render={()=> token ? <Redirect to="/profile"/> : <Auth />}
                />
                <Route 
                    path="/profile"
                    render={() => <Profile />}
                />
                <Route 
                    path="/public"
                    render={() => <Public />}
                /> 
            </Switch>
        </div>
    )
}