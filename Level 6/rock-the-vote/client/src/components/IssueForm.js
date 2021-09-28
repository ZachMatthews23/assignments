import React, { useState } from 'react'

const initInputs = {
    title: "", 
    description: "",
    upvotes: 0,
    downvotes: 0
}

export default function IssueFrom(props){
const [inputs, setInputs] = useState(initInputs)
const { addIssue } = props

function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
}

function handleSubmit(e){
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
}

const { title, description } = inputs

    return(
        <form onSubmit={handleSubmit} className="add-issue-form">
            <input 
                type="text"
                value={title}
                name="title"
                onChange={handleChange}
                placeholder="Title"
            />
            <input 
                type="text"
                value={description}
                name="description"
                onChange={handleChange}
                placeholder="Description"
            />
            <button>Add Issue</button>
        </form>
    )
}