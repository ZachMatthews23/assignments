import React from 'react'

function Die(props){

    return(
        <div className="six-dice">
            <h3 className="die">{props.dice}</h3>
        </div>
    )
}

export default Die