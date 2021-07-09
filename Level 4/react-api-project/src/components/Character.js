import React, {useContext} from 'react'
import Header from './Header'
import CharacterCard from './CharacterCard'

import {MarvelContext} from './MarvelContext'

function Character() {

    const {items, addFavorite, loading} = useContext(MarvelContext)
    const characters = items.map(item => (<CharacterCard character={item} key={item.id} click={() => addFavorite(item)}/>))
    const displayText = loading ? <h1 className="loading">Loading...</h1> : <section className="contents">{characters}</section>

    return(
        <>
            <Header />
            {displayText}
            
        </>
    )
}

export default Character