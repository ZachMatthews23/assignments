import React from "react"
import Pet from "./Pet"

function Friend(props) {
    const pets = props.friends.pets.map(item => <Pet pet={item}/>)

    return(
        <div className="friends-list">
            <div className="friends">
                <h1>Name: {props.friends.name}</h1>
                <h2>Age: {props.friends.age}</h2>
                <h2>Pets: </h2>
            </div>
            <div className="friends">
                <ul>
                    {pets}
                </ul>
            </div>
            <hr/>
        </div> 
    )
}

export default Friend