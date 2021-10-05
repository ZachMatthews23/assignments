import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function Issue(props){
const { title, description, upvote, downvote, _id } = props

const { handleVote } = useContext(UserContext)

function voting(vote, id){
    handleVote(vote, id)
}

    return(
        <div className="issues">
            <h2>{title}</h2>
            <hr/>
            <h3>{description}</h3>
            <hr/>
            <div className="votes">
                <button onClick={() => voting("upvote", _id)}>Upvote</button>
                <p>{upvote}</p>
                <button onClick={() => voting("downvote", _id)}>Downvote</button>
                <p>{downvote}</p>
            </div>
            
        </div>
    )
}