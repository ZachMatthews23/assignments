import React, { useState } from 'react'

const initInputs = {
    comment: ""
}

export default function CommentForm(props) {
const [inputs, setInputs] = useState(initInputs)
const {addComment} = props

function handleChange(e){
   const { name, value } = e.target 
   setInputs(prevState => ({
       ...prevState,
       [name]: value
   }))
}

function handleSubmit(e, id, inputs){
    e.preventDefault()
    addComment(id, inputs)
    setInputs(initInputs)
}

const {comments} = inputs

    return(
        <form onSubmit={handleSubmit} className="comment-form">
            <input 
            placeholder="Comment"
            type="text"
            value={comments}
            name="comment"
            onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}