import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Profile from './components/Profile'
import Public from './components/Public'
import { UserContext } from './context/UserContext.js'
import ProtectedRoute from './components/ProtectedRoute'


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
        issues,
        errMsg,
        resetAuthErr,
        getAllIssues,
        getUserIssues
    } = useContext(UserContext)
    
    return(
        <div className="app">
            {token && <Navbar logout={logout} />}
            <Switch>
                <Route 
                    exact path="/"
                    render={()=> token ? <Redirect to="/profile"/> : 
                    <Auth 
                        signup={signup} 
                        login={login} 
                        errMsg={errMsg} 
                        resetAuthErr={resetAuthErr} 
                    />}
                />
                <ProtectedRoute 
                    path="/profile"
                    component={Profile}
                    redirectTo="/"
                    token={token}
                    username={username} 
                    addIssue={addIssue} 
                    issues={issues}
                    getUserIssues={getUserIssues}
                />
                <ProtectedRoute 
                    path="/public"
                    component={Public}
                    redirectTo="/"
                    token={token}
                    issues={issues}
                    username={username}
                    addIssue={addIssue}
                    getAllIssues={getAllIssues}
                /> 
            </Switch>
        </div>
    )
}