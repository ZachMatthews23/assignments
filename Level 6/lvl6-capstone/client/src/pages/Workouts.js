import React, { useContext, useEffect, useRef } from 'react'
// import WorkoutsList from '../components/WorkoutsList'
import { WorkoutContext } from '../context/WorkoutsProvider'
import { UserContext } from '../context/UserProvider'
import WorkoutCard from '../components/WorkoutCard'

export default function Workouts() {

    const hasFetchedData = useRef(false)

    const {
        workouts,
        getWorkouts,
        addWorkout
    } = useContext(WorkoutContext)

    const { user } = useContext(UserContext)


    function handleAdd(workout, userId){
        addWorkout(workout, userId)
        console.log(workout)
    }

    useEffect(() => {
        if(!hasFetchedData.current){
            getWorkouts()
            hasFetchedData.current = true
        }
    }, [getWorkouts])

    return (
        <div className="workouts">
            <div className="filter">
                <h4>Filter:</h4>
                <select>
                    <option value="reset">- All Workouts -</option>
                    <option value="Chest">Chest</option>
                    <option value="Bicep">Bicep</option>
                    <option value="Tricep">Tricep</option>
                    <option value="Back">Back</option>
                    <option value="Legs">Legs</option>
                </select>
            </div>
            <h1 className="workout-header">Explore Workouts:</h1>
            
            {/* <WorkoutsList workouts={workouts}/> */}
            <div className="workout-list">
            {
                workouts.map(workout => 
                    <WorkoutCard 
                       {...workout}
                       add={() => handleAdd(workout, user._id)}
                       key={workout._id} 
                    />)
            }
            </div>
        </div>
    )
}
