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

    const workoutState = {
        workoutData: []
    }

    const [userState, setUserState] = useState(initState)
    const [userWorkouts, setUserWorkouts] = useState(workoutState)

    function getWorkouts(){
        userAxios.get("/api/workouts")
            .then(res => {
                // console.log(res.data)
                setUserState({
                    workouts: res.data
                })
                // console.log(userState)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addWorkout(workout, userId){
        userAxios.put(`/api/workouts/addWorkout`, workout)
            .then(res => {
                getUserWorkouts(userId)
            })
            .catch(err => console.log(err.response.data.errMsg))     
    }

    function removeUserWorkouts(workout, userId) {
        userAxios.put('/api/workouts/removeWorkout', workout)
            .then(res => {
                getUserWorkouts(userId)
                setUserWorkouts(prevState => ({
                    ...prevState,
                    workoutData: res.data.workouts
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getUserWorkouts(userId){
        userAxios.get(`/api/workouts/${userId}`)
            .then(res => {
                console.log("This is the getUserWorkouts respone", res.data.workouts)
                console.log("this is the workoutdata", userWorkouts.workoutData)
                setUserWorkouts(prevState => ({
                    ...prevState,
                    workoutData: res.data.workouts
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <WorkoutContext.Provider
            value={{
                ...userState,
                getWorkouts,
                addWorkout,
                ...userWorkouts,
                getUserWorkouts,
                removeUserWorkouts
            }}
        >
            {props.children}
        </WorkoutContext.Provider>
    )
}
