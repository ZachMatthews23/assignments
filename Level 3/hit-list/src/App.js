import React from 'react'
import axios from 'axios'
import Header from './Header.js'
import Footer from './Footer.js'
import Target from './Target.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            targets: []
        }
    }

    componentDidMount(){
        this.setState({
            isLoading: true
        })
        axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(res => {
                this.setState({
                    targets: res.data,
                    isLoading: false
                })
            })
    }

    render() {
        const hits = this.state.targets.map(target => <Target targets={target}/>)
        const displayText = this.state.isLoading ? "Loading..." : <div className="hit-list">{hits}</div>

        return(
            <div className="page-container">
                <Header />
                {displayText}
                <div className="push"></div>
                <Footer />
            </div>
        )
    }
}

export default App