import React from 'react'
import IssueList from './IssueList'
import IssueForm from './IssueForm'

export default function Profile(props){
const { username, addIssue, issues } = props

    return(
        <div className="profile">
            <h1>Welcome {username}</h1>
            <h3>Add an Issue</h3>
            <IssueForm addIssue={addIssue} />
            <h3>Your posts</h3>
            <IssueList issues={issues} />
        </div>
    )
}
