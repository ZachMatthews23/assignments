import React from 'react'

function Badge(props) {
    console.log(props)
    return(
        <div>
            <div className="completed-badge">
                <h1 id="badge-header">Badge:</h1>
                <h3 id="badge-name">Name: {props.badges.firstName} {props.badges.lastName}</h3>
                <h3 id="badge-email">Email: {props.badges.email}</h3>
                <h3 id="badge-birthPlace">Place of Birth: {props.badges.birthPlace}</h3>
                <h3 id="badge-phone">Phone: {props.badges.phone}</h3>
                <h3 id="badge-favFood">Favorite food: {props.badges.favFood}</h3>
                <p id="badge-about">{props.badges.about}</p>
            </div>
        <br />
        </div>
    )
}

export default Badge