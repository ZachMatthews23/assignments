import React from "react"
import vacationSpots from "./vacationSpots"
import Card from "./Card"

function App() {
    const vacation = vacationSpots.map(spots => <Card destination={spots}/>)

    return(
        <div>
            {vacation}
        </div>
    )
}

export default App