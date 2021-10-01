import React from 'react'

export default function AuthForm(props){
const {
    handleChange,
    handleSubmit,
    btnText,
    inputs: {
        username,
        password
    },
    errMsg
} = props

    return(
        <form onSubmit={handleSubmit} className="auth-form">
            <input 
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
                placeholder="Username"
            />
            <input 
                type="text"
                value={password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
            />
            <button>{ btnText }</button>
            <p className="err-msg" style={{color: "red"}}>{errMsg}</p>
        </form>
    )
}