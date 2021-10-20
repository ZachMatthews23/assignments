import React from 'react'

export default function Comment(props) {

    const { comment } = props

    return (
        <div className="comment">
            <p> {comment.commenter}: {comment.comment} </p>
            <br/>
        </div>
    )
}
