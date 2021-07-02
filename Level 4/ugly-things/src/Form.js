import React, { useContext } from 'react'
import {UglyContext} from './UglyContext'

function Form() {
    const {handleChange, handleSubmit, uglyThings} = useContext(UglyContext)

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={uglyThings.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={uglyThings.description}
                onChange={handleChange}
            />
            <input
                type="text"
                name="imgUrl"
                placeholder="Image URL"
                value={uglyThings.imgUrl}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default Form