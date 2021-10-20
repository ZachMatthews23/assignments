import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

export default function Post(props) {

    const { subject, content, username, postDate, user } = props
    const { user: {
        _id
    } } = useContext(UserContext)

    const postedBy = `Posted by: ${username} on ${postDate.slice(0,10)} @ ${postDate.slice(11,16)} `

    return (
        <div className="post">
            {_id === user && (<i className="delete-btn">X</i>)}
            <h1>{subject}</h1>
            <br/>
            <p>{content}</p>
            <hr/>
            <span className="posted-by">
                <p>{postedBy}</p>
            </span>
        </div>
    )
}
