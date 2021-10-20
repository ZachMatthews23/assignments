import React, { useState } from 'react'
import axios from 'axios'

export const ForumContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function ForumProvider(props) {

    const initInputs = {
        subject: "",
        content: "",
    }

    const commentInputs = {
        comment: "",
        post: ""
    }

    const initState = { 
        user: JSON.parse(localStorage.getItem("User")) || {},
        token: localStorage.getItem("token") || "",
        posts: [],
        errMsg: ""
    }

    const [inputs, setInputs] = useState(initInputs)
    const [comments, setComments] = useState(commentInputs)
    const [userState, setUserState] = useState(initState)
    
    function getPosts(){
        userAxios.get("/api/forum")
            .then(res => {
                Promise.all(res.data.map(async post => {
                    return {
                        ...post,
                        comments: await getPostComments(post._id).then(comments => {
                            post.comments = comments;
                            return comments
                        })
                    }
                }))
                .then(res => {
                    setUserState(prevState => ({
                        ...prevState,
                        posts: res
                    }))
                })
            })
    }

    function getPostComments(userId){
        const userData = userAxios.get(`/api/forum/comment/${userId}`)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState
                }))
                return res.data
            })
            .catch(err => console.log(err.response.data.errMsg))
            return userData
    }

    function addPost(newPost){
        userAxios.post('/api/forum', newPost)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    posts: [...prevState.posts, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addComment(){
        userAxios.post('/api/forum/comment', comments)
            .then(res => {
                setUserState(prevState => {
                    const posts = prevState.posts.find((post) => post._id === res.data.post);
                    posts.comments.push(res.data)
                    return ({
                        ...prevState
                    })
                }) 
            })
            .catch(err => console.log(err.response.data.errMSg))
    }

    return (
        <ForumContext.Provider
            value={{
                ...userState,
                getPosts,
                addPost,
                addComment,
                comments,
                setComments,
                inputs,
                setInputs,
                initInputs
            }}
        >
            {props.children}
        </ForumContext.Provider>
    )
}
