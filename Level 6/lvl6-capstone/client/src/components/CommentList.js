import React from 'react'
import Comment from './Comment'

export default function CommentList(props) {

    const { comments } = props

    return (
        <div className="comment-list">
            { (comments) ? comments.map(com => (
            <Comment 
                comment={com}
                postId={com.postId}
                key={com._id}
            >
            {com.comments}
            </Comment>)) 
            : 
            console.log('No Comments') } 
        </div>
    )
}
