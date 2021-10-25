import React, { useContext, useEffect, useRef } from 'react'
import PostForm from '../forms/PostForm'
import Post from '../components/Post'
import { ForumContext } from '../context/ForumProvider'
import '../css/forumStyles.css'

export default function Forum() {

    const hasFetchedData = useRef(false)

    const {
        posts,
        getPosts,
        addPost
    } = useContext(ForumContext)

    useEffect(() => {
        if(!hasFetchedData.current){
            getPosts()
            hasFetchedData.current = true
        }
    }, [getPosts])

    return (
        <div className="forum">
            <h1 className="workout-header">Workout Forum</h1>
            <br/>
            <PostForm addPost={addPost} />
            <div className="post-list">
            { 
                posts.map(post => 
                    <Post post={post} key={post._id} />).reverse()
            }
            </div>
        </div>
    )
}
