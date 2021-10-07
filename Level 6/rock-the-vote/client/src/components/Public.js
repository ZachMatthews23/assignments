import React, { useEffect } from 'react'
import IssueList from './IssueList'

export default function Public(props){
const { username, issues, getAllIssues } = props


useEffect(() => {
    getAllIssues()
}, [])

    return(
        <div className="public">
            <h1>Welcome {username}</h1>
            <h3>All Issues</h3>
            <IssueList issues={issues} />
        </div>
    )
}