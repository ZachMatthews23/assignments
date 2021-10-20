import React, { useState, useContext } from 'react'
import { ForumContext } from '../context/ForumProvider'
import { UserContext } from '../context/UserProvider'

export default function CommentForm(props) {

    const { postId } = props
    const { setComments, addComment } = useContext(ForumContext)
    const [ comment, setComment ] = useState('')

    const { 
        user: {
            username
        }
    } = useContext(UserContext)

    function handleChange(e){
        const { name, value } = e.target
        setComments(prevInputs => ({
            ...prevInputs,
            [name]: value,
            commenter: username,
            post: postId
        }))
        setComment(value)
    }

    function handleSubmit(e){
        e.preventDefault()
        addComment(comment)
        setComment('')
    }

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <input 
                type="text"
                name="comment"
                value={comment}
                onChange={handleChange}
                placeholder="Comment"
            />
            <button>Submit</button>
        </form>
    )
}
