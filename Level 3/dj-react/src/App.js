import React from 'react'
import Square from './Square'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }

        this.changeColor = this.changeColor.bind(this)
        this.topColor = this.topColor.bind(this)
        this.leftColor = this.leftColor.bind(this)
        this.rightColor = this.rightColor.bind(this)
        this.newColor = this.newColor.bind(this)
        this.newerColor = this.newerColor.bind(this)
        this.newestColor = this.newestColor.bind(this)
        this.newerestColor = this.newerestColor.bind(this)
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

    topColor(){
        this.setState(prevState => {
            prevState.colors[0] = "purple";
            prevState.colors[1] = "purple"

            return{
                colors: prevState.colors
            }
        })
    }

    leftColor(){
        this.setState(prevState => {
            prevState.colors[2] = "blue"

            return{
                colors: prevState.colors
            }
        })
    }

    rightColor(){
        this.setState(prevState => {
            prevState.colors[3] = "blue"

            return{
                colors: prevState.colors
            }
        })
    }

    newColor(){
        this.setState(prevState => {
            prevState.colors[0] = "orange"
            prevState.colors[3] = "orange"

            return{
                colors: prevState.colors
            }
        })
    }

    newerColor(){
        this.setState(prevState => {
            prevState.colors[1] = "firebrick"

            return{
                colors: prevState.colors
            }
        })
    }

    newestColor(){
        this.setState(prevState => {
            prevState.colors[2] = "yellow"

            return{
                colors: prevState.colors
            }
        })
    }

    newerestColor(){
        this.setState(prevState => {
            prevState.colors[1] = "green"
            prevState.colors[2] = "green"

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
                <div className="btns">
                    <button onClick={this.changeColor}>Small Time Dj</button>
                    <button onClick={this.topColor}>Party DJ</button>
                    <button onClick={this.leftColor}>Left Blue</button>
                    <button onClick={this.rightColor}>Right Blue</button>
                    <button className="btn-1" onClick={this.newColor}>Pro DJ 1</button>
                    <button className="btn-2"  onClick={this.newerColor}>Pro DJ 2</button>
                    <button className="btn-3"  onClick={this.newestColor}>Pro DJ 3</button>
                    <button className="btn-4"  onClick={this.newerestColor}>Pro DJ 4</button>
                </div>
            </div>
        )
    }
}

export default App