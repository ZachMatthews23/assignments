import React from 'react'
import axios from 'axios'

class Meme extends React.Component {
    constructor() {
        super()
        this.state = {
            memeArray: [],
            randomImg: ""
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    componentDidMount(){
        axios.get("https://api.imgflip.com/get_memes")
            .then(res => {
                const {memes} = res.data.data
                this.setState({
                    memeArray: memes       
                })
            })
            .catch(err => console.log(err))
    }

    clickHandler() {
        const randNum = Math.floor(Math.random() * 100)
        console.log(randNum)
        const loadMeme = this.state.memeArray[randNum].url
        this.setState({randomImg: loadMeme})
    }

    render() {

        return(
            <div>
                <img style={{width: "400px"}}  src={this.state.randomImg} alt=""/>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default Meme