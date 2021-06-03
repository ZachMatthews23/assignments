import React from 'react'

// import names from './nameArray'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "",
            names: []
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({name: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        const newName = this.state.name
        this.setState(prevState => ({
            name: "",
            names: [...prevState.names, newName]
        }))
    }

    render(){
        const namesArray = this.state.names.map(item => <li>{item}</li>)

        return(
            <div>
                <h1>Names: </h1>
                <form onSubmit={this.handleSubmit}>
                    <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <br />
                    {/* <input name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/> */}
                    <br />
                    <button>Submit</button>
                </form>
                <ol>
                    {namesArray}
                </ol>
            </div>
        )
    }
}

export default App