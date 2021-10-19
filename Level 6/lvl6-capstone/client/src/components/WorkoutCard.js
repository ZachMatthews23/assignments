import React from 'react'

export default function WorkoutCard(props) {

    const { name, description, muscle, image } = props

    return (
        <div className="content">
            <div className="content-inner">
                <div className="content-front">
                    <img src={image} alt=""  />
                </div>
                <div className="content-back">
                    <h1>{name}</h1>
                    <br/>
                    <h3>Workout Description:</h3>
                    <p>{description}</p>
                    <br/>
                    <p>Muscle: {muscle}</p>
                </div>
            </div>
        </div>
    )
}
