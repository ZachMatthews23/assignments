// import { PromiseProvider } from "mongoose";
import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        errMsg: "",
        comments: []
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials){
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevState => ({
                    ...prevState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials){
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevState => ({
                    ...prevState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "", 
            issues: [],
            comments: []
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    function getUserIssues(){
        userAxios.get("/api/issue/user")
            .then(res => (
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            ))
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                console.log(res.data)
                setUserState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    
    function addComment(issueId, newComment){
        userAxios.post(`api/issue/${issueId}`, newComment)
            .then(res => {
                console.log(res.data)
                setUserState(prevState => ({
                    ...prevState,
                    comments: [...prevState.comments, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function handleVote(vote, issueId){
        userAxios.put(`/api/issue/${vote}/${issueId}`)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    issues: [res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getAllIssues(){
        userAxios.get("/api/issue")
            .then(res => [
                setUserState(prevState => ({
                    ...prevState,
                    issues: res.data
                }))
            ])
    }

    return(
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                getUserIssues,
                addIssue, 
                resetAuthErr,
                handleVote,
                getAllIssues,
                addComment
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}


