import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
const MarvelContext = React.createContext()
const hash = "9a477047516c75f0e7a25215f6aaecf8"

function MarvelContextProvider(props) {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        const getData = async () => {
            const result = await axios(`http://gateway.marvel.com/v1/public/characters?limit=50&ts=1&apikey=f505b94338446de66695ad49dcf4b8ae&hash=${hash}`)
                console.log(result.data.data.results)
                let newItems = result.data.data.results
                setItems(newItems)
        }
        console.log(items)
        getData()
    }, [])

    return(
        <MarvelContext.Provider value={{items}}>
            {props.children}
        </MarvelContext.Provider>
    )
}

export {MarvelContextProvider, MarvelContext}