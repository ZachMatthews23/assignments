import React from 'react'
// import Die from './Die'

class DiceBox extends React.Component{
    constructor(){
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0,
            num6: 0
        }

        this.rollDice = this.rollDice.bind(this)
    }

    rollDice(){
        this.setState(prevState => {
            prevState.num1 = 1 + Math.floor(Math.random()*6)
            prevState.num2 = 1 + Math.floor(Math.random()*6)
            prevState.num3 = 1 + Math.floor(Math.random()*6)
            prevState.num4 = 1 + Math.floor(Math.random()*6)
            prevState.num5 = 1 + Math.floor(Math.random()*6)
            prevState.num6 = 1 + Math.floor(Math.random()*6)

            return{
                num1: prevState.num1,
                num2: prevState.num2,
                num3: prevState.num3,
                num4: prevState.num4,
                num5: prevState.num5,
                num6: prevState.num6
            }
        })
    }

    render(){

        return(
            <div className="dice-box">
                <h1>Random Dice Generator</h1>
                <h3 className="dice">{this.state.num1}</h3>
                <h3 className="dice">{this.state.num2}</h3>
                <h3 className="dice">{this.state.num3}</h3>
                <h3 className="dice">{this.state.num4}</h3>
                <h3 className="dice">{this.state.num5}</h3>
                <h3 className="dice">{this.state.num6}</h3>
                <span className="btn-container">
                    <button onClick={this.rollDice}>Roll Dice</button>
                </span>    
            </div>
            

        )
    }
}

export default DiceBox