import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function Issue(props){
const { title, description, upvote, downvote, _id, votedUsers } = props

const {  user, handleVote } = useContext(UserContext)

const posted = `Posted By: ${user}`

function voting(vote, id, username){
    const voted = votedUsers.includes(username)
    voted ? 
    alert("You have already voted")
    :
    handleVote(vote, id)
}

    return(
        <div className="issues">
            <h1>{posted}</h1>
            <h1>{title}</h1>
            <hr/>
            <p>{description}</p>
            <hr/>
            <div className="votes">
                <i style={{color: "green"}} onClick={() => voting("upvote", _id, user.username)}>⬆</i>
                <p>{upvote}</p>
                <i style={{color: "red"}} onClick={() => voting("downvote", _id, user.username)}>⬇</i>
                <p>{downvote}</p>
            </div>
            
        </div>
    )
}