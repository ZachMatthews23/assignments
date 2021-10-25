import React, { useContext, useRef, useEffect } from 'react'
import WorkoutCard from '../components/WorkoutCard.js'
import { WorkoutContext } from '../context/WorkoutsProvider'
import { UserContext } from '../context/UserProvider'
import '../css/profile.css'

export default function Profile() {

    const hasFetchedData = useRef(false)
    const { workoutData, getUserWorkouts, removeUserWorkouts } = useContext(WorkoutContext)
    const { user } = useContext(UserContext)

    const userId = user._id

    function handleRemove(workout, userId){
        removeUserWorkouts(workout, userId)
    }

    useEffect(() => {
        if(!hasFetchedData.current){
            getUserWorkouts(userId)
            hasFetchedData.current= true
        }
    }, [userId, getUserWorkouts])

    return (
        <div className="profile">
            <h1 className="profile-header">
                @{user.username}'s Custom Workouts:
            </h1>
            <div className="profile-list">
                <ul>
                    <li><a href="/profile">Update Profile</a></li>
                    <hr/>
                    <br/>
                    <li>Saved Workouts:</li>
                    <li><a href="/profile">Workout 1</a></li>
                    <li><a href="/profile">Workout 2</a></li>
                    <li><a href="/profile">Workout 3</a></li>
                    <li><a href="/profile">Workout 4</a></li>
                    <li><a href="/profile">Workout 5</a></li>
                    <li><a href="/profile">Workout 6</a></li>
                </ul>
                <div className="bottom"></div>
            </div>
            <div className="profile-workout-list">
                { workoutData.map(workout => <WorkoutCard 
                    {...workout} 
                    key={workout._id} 
                    add={() => handleRemove(workout, user._id)}/>)}
            </div>
            <div className="profile-list-hidden">
                <ul>
                    <li><a href="/profile">Update Profile</a></li>
                    <li><a href="/profile">Workout 1</a></li>
                    <li><a href="/profile">Workout 2</a></li>
                    <li><a href="/profile">Workout 3</a></li>
                    <li><a href="/profile">Workout 4</a></li>
                    <li><a href="/profile">Workout 5</a></li>
                    <li><a href="/profile">Workout 6</a></li>
                    
                </ul>
            </div>
        </div>
        
    )
}