import React from 'react'

export default function Issue(props){
const { title, description, upvote, downvote } = props

    return(
        <div className="issues">
            <h2>{title}</h2>
            <hr/>
            <h3>{description}</h3>
            <hr/>
            <div className="votes">
                <button>Upvote</button>
                <p>{upvote}</p>
                <button>Downvote</button>
                <p>{downvote}</p>
            </div>
            
        </div>
    )
}