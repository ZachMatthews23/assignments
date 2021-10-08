import React from 'react'

export default function Comment(props) {
const { comment } = props
    return (
        <div className="comment">
            <h2>{comment}</h2>
        </div>
    )
}
