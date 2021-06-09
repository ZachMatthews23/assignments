import React from 'react'
import axios from 'axios'

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount(){
        axios.get("https://www.colr.org/json/color/random?timestamp=")
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                Hello World
            </div>
        )
    }
}

export default App