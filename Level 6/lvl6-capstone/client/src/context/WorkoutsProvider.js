import React, { useState } from 'react'
import axios from 'axios'

export const WorkoutContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function WorkoutsProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        workouts: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    function getWorkouts(){
        userAxios.get("/api/workouts")
            .then(res => {
                console.log(res.data)
                setUserState({
                    workouts: res.data
                })
                console.log(userState)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <WorkoutContext.Provider
            value={{
                ...userState,
                getWorkouts
            }}
        >
            {props.children}
        </WorkoutContext.Provider>
    )
}
