import React, { useState, useContext } from 'react'
import AuthForm from '../forms/AuthForm'
import '../css/authStyles.css'
import { UserContext } from '../context/UserProvider'

const initInputs = { username: "", password: "" }

export default function Auth() {

    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSignup(e){
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

    return (
        <div className="auth-container">
           { !toggle ? 
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        headText="Sign up"
                        btnText="Sign up"
                        errMsg={errMsg}
                    />
                    <p onClick={toggleForm}>Already a Member?</p>
                </>
            :
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        headText="Login"
                        btnText="Login"
                        errMsg={errMsg}
                    />
                    <p onClick={toggleForm}>Not a Member?</p>
                </>
           } 
        </div>
    )
}
