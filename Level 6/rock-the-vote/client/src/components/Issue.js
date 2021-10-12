import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'


export default function Issue(props){
const { title, description, upvote, downvote, _id, votedUsers, username, postDate } = props
const {  user, handleVote } = useContext(UserContext)

const postedBy = `Posted By: ${username} on ${postDate.slice(0,10)} @ ${postDate.slice(11,16)}`

function voting(vote, id, username){
    const voted = votedUsers.includes(username)
    voted ? 
    alert("You have already voted")
    :
    handleVote(vote, id)
}

    return(
        <div className="issues">
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
            <p className="posted-by">{postedBy}</p>
        </div>
    )
}