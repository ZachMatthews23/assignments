import React from "react"

function Card(props) {
    return(
        <div className="vacation-list">
            <h2 className="vacation-spots">Location: {props.destination.place}</h2>
            <h2 className="vacation-spots">Price: ${props.destination.price}</h2>
            <h2 className="vacation-spots" style={{backgroundColor: props.destination.timeToGo === "Winter" ? "skyblue" : props.destination.timeToGo === "Spring" ? "#99CC00" : props.destination.timeToGo === "Summer" ? "indianred" : props.destination.timeToGo === "Fall" ? "burlywood" : "none"}}>Season: {props.destination.timeToGo}</h2>
            <hr/>
        </div>
    )
}

export default Card