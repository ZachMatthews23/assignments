import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
const MarvelContext = React.createContext()
const hash = "9a477047516c75f0e7a25215f6aaecf8"

function MarvelContextProvider(props) {
    const [items, setItems] = useState([])
    const [search, setSearch] = useState({name: "", searchData: []})
    const [favorite, setFavorite] = useState({isFavorited: false, favoritesData: []})
    const [loading, setLoading] = useState(false)

    function handleChange(e) {
        const {name, value} = e.target
        setSearch(prevSearch => ({...prevSearch, [name]: value})) 
    }

    function handleSubmit(e) {
        e.preventDefault()
            axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search.name}&ts=1&apikey=f505b94338446de66695ad49dcf4b8ae&hash=${hash}`)
                .then( res => {
                    setSearch(() => ({searchData: res.data.data.results}))
                })
    }

    function addFavorite(character) {
        // const favoriteCharacter = [...favorite, character]
        setFavorite(prevFav => ({favoritesData: [...prevFav.favoritesData, character]}))
        alert(`${character.name} has been added to your favorites list.`)
    }    

    function deleteFavorite(character) {
        const newFavorites = favorite.filter(remove => remove.id !== character.id)
        setFavorite(newFavorites)
        alert(`${character.name} has been deleted from your favorites lsit.`)
    }
    
    useEffect(() => {
        setLoading(true)
        const getData = async () => {
            const result = await axios(`http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=f505b94338446de66695ad49dcf4b8ae&hash=${hash}`)
                console.log(result.data.data.results)
                let newItems = result.data.data.results
                setItems(newItems)
                setLoading(false)
        }
        // console.log(items)
        getData()
    }, [])

    return(
        <MarvelContext.Provider value={{items, search, favorite, loading, handleChange, handleSubmit, addFavorite, deleteFavorite}}>
            {props.children}
        </MarvelContext.Provider>
    )
}

export {MarvelContextProvider, MarvelContext}