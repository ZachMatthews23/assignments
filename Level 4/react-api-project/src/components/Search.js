import React, {useContext} from 'react'
import CharacterCard from './CharacterCard'
import Header from './Header'
import {MarvelContext} from './MarvelContext'

function Search(props) {

    const {search, handleChange, handleSubmit, addFavorite} = useContext(MarvelContext)
    const array = search.searchData.map(item => <CharacterCard character={item} key={item.id} click={() => addFavorite(item)}/>)

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit}>
                <input
                    className="search-bar"
                    type="text"
                    name="name"
                    placeholder="Enter Character Name or Part of Name"
                    value={search.name}
                    onChange={handleChange}
                />
            </form>
            <br />
            <section className="contents">
                {array}
            </section>
        </>
    )
}

export default Search 
