import React from 'react'

function Target(props) {
    return(
        <div className="hit-grid">
            <h2 className="targets">{props.targets.name}</h2>
            <img src={props.targets.image}/>
        </div>
    )
}

export default Target