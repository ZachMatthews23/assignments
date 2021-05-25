import React from "react"


function Pet(props) {

    return(
        <div>
            <h3>Name: {props.pet.name}</h3>
            <h3>Breed: {props.pet.breed}</h3>
        </div>
    )
}

export default Pet