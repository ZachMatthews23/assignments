import React, {useContext} from 'react'
import Header from './Header'
import CharacterCard from './CharacterCard'
import {MarvelContext} from './MarvelContext'

function Character() {

    const {items} = useContext(MarvelContext)
    const chracters = items.map(item => (<CharacterCard character={item} key={item.id} />))

    return(
        <div>
            <Header />
            <section className="contents">
                {chracters}
            </section>
            
        </div>
    )
}

export default Character