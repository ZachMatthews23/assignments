import React, { useContext } from 'react'
import WorkoutCard from '../components/WorkoutCard'
import { WorkoutContext } from '../context/WorkoutsProvider'

export default function Profile() {

    const { userWorkouts } = useContext(WorkoutContext)


    return (
        <div className="workout-list">
            { userWorkouts.workoutData.map(workout => <WorkoutCard {...workout} key={workout._id} />)}
        </div>
    )
}