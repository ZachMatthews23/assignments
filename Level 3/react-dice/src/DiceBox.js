import React from 'react'
import diceArray from './diceArray'
import Die from './Die'

function DiceBox(){
    const roll = diceArray.map(item => <Die dice={item}/>)

    return(
        <div>
            {roll}
        </div>  
    )
}

export default DiceBox