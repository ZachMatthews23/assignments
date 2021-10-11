import React, { useState } from 'react'

const initInputs = {
    comment: ""
}

export default function CommentForm(props) {
const [inputs, setInputs] = useState(initInputs)
const {addComment, id} = props

function handleChange(e){
   const { name, value } = e.target 
   setInputs(prevState => ({
       ...prevState,
       [name]: value
   }))
}

function handleSubmit(e, id, inputs){
    e.preventDefault()
    console.log(inputs)
    addComment(id, inputs)
    setInputs(initInputs)
}

const {comment} = inputs

    return(
        <form onSubmit={(e) => handleSubmit(e, id, inputs)} className="comment-form">
            <input 
            placeholder="Comment"
            type="text"
            value={comment}
            name="comment"
            onChange={handleChange}
            />
            <button>Submit</button>

        </form>
    )
}