import React from 'react'

function UglyItem(props) {
    return(
        <div>
             <h1>{props.item.title}</h1>
             <h4>{props.item.description}</h4>
             <img src={props.item.imgUrl} alt={props.item.title}/>
        </div>
    )
}

export default UglyItem