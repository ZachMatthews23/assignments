import React from 'react'

export default function AuthForm(props) {

    const {
        handleChange,
        handleSubmit,
        headText,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props

    return (
        <form onSubmit={handleSubmit}>
            <h1>{headText}</h1>
            <input 
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
                placeholder="Username"
            />
            <input 
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
            />
            <button>{btnText}</button>
            <p className="err-msg" style={{color: "firebrick"}} >{errMsg}</p>
        </form>
    )
}
