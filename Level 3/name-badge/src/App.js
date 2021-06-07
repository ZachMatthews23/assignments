import React from 'react'
import Badge from './Badge'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            about: "",
            badges: []
            }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const newObject = {
            firstName: this.state.firstName, 
            lastName: this.state.lastName, 
            email: this.state.email, 
            birthPlace: this.state.birthPlace, 
            phone: this.state.phone, 
            favFood: this.state.favFood, 
            about: this.state.about
        }
        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phone: "",
            favFood: "",
            about: "",
            badges: [newObject, ...prevState.badges]
          }))
          console.log(this.state)  
    }

    render() {
        const array = this.state.badges.map(item => <Badge badges={item}/>)
        const isEnabled = this.state.firstName.length > 3 && this.state.lastName.length > 3 && this.state.email.length > 3 && this.state.birthPlace.length > 3 && this.state.phone.length > 3 && this.state.favFood.length > 3 && this.state.about.length > 3

        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="grid">
                        <input
                            id="firstName" 
                            name="firstName" 
                            value={this.state.firstName} 
                            placeholder="First Name" 
                            minLength= "3" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <input 
                            id="lastName"
                            name="lastName" 
                            value={this.state.lastName} 
                            placeholder="Last Name" 
                            minLength="3" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <input 
                            id="email"
                            type="email" 
                            name="email" 
                            value={this.state.email} 
                            placeholder="Email" 
                            minLength="3" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <input 
                            id="birthPlace"
                            name="birthPlace" 
                            value={this.state.birthPlace} 
                            placeholder="Place of Birth" 
                            minLength="3" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <input 
                            id="phone"
                            type="phone" 
                            name="phone" 
                            value={this.state.phone} 
                            placeholder="Phone" 
                            minLength="3" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <input 
                            id="favFood"
                            name="favFood" 
                            value={this.state.favFood} 
                            placeholder="Favorite Food" 
                            minLength="3" 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="flex-box">
                        <textarea 
                            id="about"
                            name="about" 
                            value={this.state.about} 
                            placeholder="Tell us about yourself" 
                            minLength="3" 
                            onChange={this.handleChange}
                        />
                        <br />
                        <button disabled={!isEnabled}>Submit</button>
                    </div>
                </form>
                <br />
                {array}
            </div>
        )
    }
}

export default App