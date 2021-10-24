import React, { useContext, useRef, useEffect } from 'react'
import WorkoutCard from '../components/WorkoutCard.js'
import { WorkoutContext } from '../context/WorkoutsProvider'
import { UserContext } from '../context/UserProvider'

export default function Profile() {

    const hasFetchedData = useRef(false)
    const { workoutData, getUserWorkouts } = useContext(WorkoutContext)
    const { user } = useContext(UserContext)

    const userId = user._id

    function removeUserWorkout(workout){
        workoutData.filter(remove => remove._id !== workout._id)
        console.log("deleted")
    }

    useEffect(() => {
        if(!hasFetchedData.current){
            getUserWorkouts(userId)
            hasFetchedData.current= true
        }
    }, [userId, getUserWorkouts])

    return (
        <div className="workout-list">
            { workoutData.map(workout => <WorkoutCard {...workout} key={workout._id} add={() => removeUserWorkout(workout)}/>)}
        </div>
    )
}