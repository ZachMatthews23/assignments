import React, { useState } from 'react'
import AuthForm from './AuthForm'

const initInputs = { username:"", password:"" } 

export default function Auth(props){
const { login, signup, errMsg, resetAuthErr } = props
const [inputs, setInputs] = useState(initInputs)
const [toggle, setToggle] = useState(false)

function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
}

function handleSignUp(e){
    e.preventDefault()
    signup(inputs)
}

function handleLogin(e){
    e.preventDefault()
    login(inputs)
}

function toggleForm(){
    setToggle(prev => !prev)
    resetAuthErr()
}

    return(
        <div className="auth-container">
            <h1>Issues App</h1>
            {!toggle ? 
            <>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleSignUp}
                    inputs={inputs}
                    btnText="Sign Up"
                    errMsg={errMsg}
                />
                <p onClick={toggleForm}>Already a member?</p>
            </>
            :
            <>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Login"
                    errMsg={errMsg}
                />
                <p onClick={toggleForm}>Need to signup?</p>
            </>
            }
           
        </div>
    )
}