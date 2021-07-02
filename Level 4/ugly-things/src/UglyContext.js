import React, {useState, useEffect} from 'react'
import axios from 'axios'
const UglyContext = React.createContext()

function UglyProvider(props) {
    const [uglyThings, setUglythings] = useState({title: "", description: "", imgUrl: "", uglyData: []})

    function handleChange(e) {
        const {name, value} = e.target
        setUglythings(prevUglyThings => ({...prevUglyThings, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("https://api.vschool.io/zacharymatthews/thing/", uglyThings)
            .then(res => { 
                console.log(res.data)
                setUglythings()
                return getUglies()
                
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        return getUglies()
    }, [])

    function getUglies() {
        axios.get("https://api.vschool.io/zacharymatthews/thing")
            .then(res => {
                setUglythings(() => ({uglyData: res.data}))
            })
            .catch(err => console.error(err))
            
    }

    return(
        <UglyContext.Provider value={{uglyThings, handleChange, handleSubmit}}>
            {props.children}
        </UglyContext.Provider>
    )
} 

export {UglyProvider, UglyContext}