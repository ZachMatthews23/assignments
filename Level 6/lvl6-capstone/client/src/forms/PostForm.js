import React, { useContext } from 'react'
import { ForumContext } from '../context/ForumProvider'

export default function PostForm(props) {

    const { addPost } = props
    const { inputs, setInputs, initInputs } = useContext(ForumContext)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addPost(inputs)
        setInputs(initInputs)
    }

    const { subject, content } = inputs

    return (
        <form onSubmit={handleSubmit} className="forum-form"> 
            <input 
                type="text"
                name="subject"
                value={subject}
                onChange={handleChange}
                placeholder="Subject"
            />
            <input 
                type="text"
                name="content"
                value={content}
                onChange={handleChange}
                placeholder="Post"
            />
            <button>Submit Post</button>
        </form>
    )
}
