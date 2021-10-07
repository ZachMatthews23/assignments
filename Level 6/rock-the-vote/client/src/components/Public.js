import React, { useEffect, useRef } from 'react'
import IssueList from './IssueList'

export default function Public(props){
const hasFetchedData = useRef(false)
const { username, issues, getAllIssues } = props


useEffect(() => {
    if(!hasFetchedData.current){
        getAllIssues()
        hasFetchedData.current = true
    }
}, [getAllIssues])

    return(
        <div className="public">
            <h1>Welcome @{username}</h1>
            <h3>All Issues</h3>
            <IssueList issues={issues} />
        </div>
    )
}