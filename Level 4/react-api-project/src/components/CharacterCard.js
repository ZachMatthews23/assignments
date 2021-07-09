import React from 'react'

function CharacterCard(props) {
    return(
        <div className="content">
            <div className="content-inner">
                <div className="content-front">
                    <img src={props.character.thumbnail.path + "/portrait_incredible.jpg"} alt=""/>
                </div>
                <div  className="content-back">
                    <h1>{props.character.name}</h1>
                    <ul>
                        <li>
                            <strong>Name:</strong> {props.character.name}
                        </li>
                        <li>
                            <strong>Description:</strong> {props.character.description}
                        </li>
                        <li>
                            <strong>Comics:</strong> {props.character.comics.items.map(comics => <p key={comics.resourceURI}>{comics.name}</p>)}
                        </li>
                    </ul>
                    <button onClick={() => props.click()}>Toggle Favorite</button>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard