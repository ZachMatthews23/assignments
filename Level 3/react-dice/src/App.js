import React from 'react'
import Die from './Die'
import DiceBox from './DiceBox'
import diceArray from './diceArray'

class App extends React.Component {
    constructor(){
        super()
        this.state = {diceArray}

        this.rollDice = this.rollDice.bind(this)
    }

    rollDice(){
        this.setState(prevState => {
            prevState.dice = 1 + Math.floor(Math.random()*6)

            console.log(this.state)
            return{
                dice: prevState.dice
            }
        })
    }

    render(){
        

        return(


            <div>
                <h1>Random Dice Generator</h1>
                <DiceBox dice={this.prevState.dice}/>
                <button className="roll-dice" onClick={this.rollDice}>Roll Dice!</button>    
            </div>
        )
    }
}

export default App