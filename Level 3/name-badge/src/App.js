import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            badge: [{
                firstName: "",
                lastName: "",
                email: "",
                birthPlace: "",
                phone: "",
                favFood: "",
                about: ""
            }]
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState(prevState => {
            return {
                badge: {
                    ...prevState.badge,
                    [name]: value
                }   
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => ({
            badge: [...prevState]
        }))
        console.log(this.state.badge)
    }

    render() {
        const array = this.state.badge.map(item => <h1>{item}</h1>)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="firstName" 
                        value={this.state.badge.firstName} 
                        placeholder="First Name" 
                        minLength="3" 
                        onChange={this.handleChange}></input>
                    <br />
                    <input 
                        name="lastName" 
                        value={this.state.badge.lastName} 
                        placeholder="Last Name" 
                        minLength="3" 
                        onChange={this.handleChange}></input>
                    <br />
                    <input 
                        type="email" 
                        name="email" 
                        value={this.state.badge.email} 
                        placeholder="Email" 
                        minLength="3" 
                        onChange={this.handleChange}></input>
                    <br />
                    <input 
                        name="birthPlace" 
                        value={this.state.badge.birthPlace} 
                        placeholder="Place of Birth" 
                        minLength="3" 
                        onChange={this.handleChange}></input>
                    <br />
                    <input 
                        type="phone" 
                        name="phone" 
                        value={this.state.badge.phone} 
                        placeholder="Phone" 
                        minLength="3" 
                        onChange={this.handleChange}></input>
                    <br />
                    <input 
                        name="favFood" 
                        value={this.state.badge.favFood} 
                        placeholder="Favorite Food" 
                        minLength="3" 
                        onChange={this.handleChange}></input>
                    <br />
                    <textarea 
                        name="about" 
                        value={this.state.badge.about} 
                        placeholder="Tell us about yourself" 
                        minLength="3" 
                        onChange={this.handleChange}/>
                    <br />
                    <button>Submit</button>
                </form>
                {array}
            </div>
        )
    }
}

export default App