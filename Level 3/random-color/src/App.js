import React from 'react'
import axios from 'axios'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colorsArray: [],
            backgroundColor: ""
            
        }
    }

    componentDidMount() {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
            .then(res => {
                this.setState({
                    colorsArray: [res.data.new_color]
                })
                console.log(this.state.colorsArray)
            })
            .catch(err => console.log(err))
    }

    render() {

        return(
            <div>
                <h1 style={{backgroundColor: "#" + this.state.colorsArray}}></h1>
            </div> 
        )
    }
}

export default App