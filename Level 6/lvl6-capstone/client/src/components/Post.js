import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { ForumContext } from '../context/ForumProvider'
import CommentForm from '../forms/CommentForm'
import CommentList from './CommentList'

export default function Post(props) {

    const { post } = props
    const { handleDelete } = useContext(ForumContext)
    const { user } = useContext(UserContext)

    const postedBy = `Posted by: ${post.username} on ${post.postDate.slice(0,10)} @ ${post.postDate.slice(11,16)} `

    return (
        <div className="post">
            { user._id === post.user && (<i className="delete-btn" onClick={() => handleDelete(post._id)}>X</i>) }
            <h1>{post.subject}</h1>
            <br/>
            <p>{post.content}</p>
            <hr/>
            <span className="posted-by">
                <p>{postedBy}</p>
            </span>
            <br/>
            <h1>Comments: </h1>
            <CommentList postId={post._id} comments={post.comments} />
            <CommentForm postId={post._id} />
        </div>
    )
}
