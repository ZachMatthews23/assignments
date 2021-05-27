import React from 'react'
import Square from './Square'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }

        this.changeColor = this.changeColor.bind(this)
    }

    changeColor(){
        this.setState(prevState => {

            if(prevState.colors[0] === "white"){
                prevState.colors = ["black", "black", "black", "black"]
            } else if(prevState.colors[0] !== "white"){
                prevState.colors = ["white", "white", "white", "white"]
            }

            return{
                colors: prevState.colors
            }
        })
    }
    
    render(){

        return(
            <div className="squares">
                <Square color={this.state.colors[0]}/>
                <Square color={this.state.colors[1]}/>
                <Square color={this.state.colors[2]}/>
                <Square color={this.state.colors[3]}/>
                <button onClick={this.changeColor}>Small Time Dj</button>
            </div>
        )
    }
}

export default App