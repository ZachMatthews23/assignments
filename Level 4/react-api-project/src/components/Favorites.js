import React, {useContext} from 'react'
import Header from './Header'
import CharacterCard from './CharacterCard'
import {MarvelContext} from './MarvelContext'


function Favorites() { 

    const {favorite, deleteFavorite} = useContext(MarvelContext)
    const array = favorite.map(item => <CharacterCard character={item} key={item.id} click={() => deleteFavorite(item)}/>)

    return (
        <>
            <Header />
            <h1 className="favorites">Favorite Characters: </h1>
            <br />
            <section className="contents">
                {array}
            </section>      
        </>
    )
}

export default Favorites
