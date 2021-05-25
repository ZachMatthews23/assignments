import React from "react"
import friends from "./friendsArray"
import Friend from "./Friend"

function FriendList() {
    const friendsArray = friends.map(items => <Friend friends={items}/>) 

    return(
        <div>
            {friendsArray}
        </div>
    )
}

export default FriendList