import React, { useState } from 'react'
import AuthForm from './AuthForm'

const initInputs = { username:"", password:"" } 

export default function Auth(props){
const { login, signup } = props
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
                />
                <p onClick={() => setToggle(prev => !prev)}>Already a member?</p>
            </>
            :
            <>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit={handleLogin}
                    inputs={inputs}
                    btnText="Login"
                />
                <p onClick={() => setToggle(prev => !prev)}>Need to signup?</p>
            </>
            }
           
        </div>
    )
}