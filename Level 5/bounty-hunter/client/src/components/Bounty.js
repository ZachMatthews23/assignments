import React, {useState} from 'react'
import AddBountyForm from './AddBountyForm'

export default function Bounty(props) {
    const { fName, lName, affiliation, payout,  _id } = props
    const [editToggle, setEditToggle] = useState(false)

    return(
        <div className="bounty">
            { !editToggle ?
            <>
                <h1>Bounty: {fName} {lName}</h1>
                <p>Affiliated With: {affiliation}</p>
                <p>Reward: {payout} Imperial Credits</p>
                <button 
                    onClick={() => props.deleteBounty(_id)} 
                    className="delete-btn">
                    Delete 
                </button>
                <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
            </>
            :
            <>
                <AddBountyForm 
                    fName={fName}
                    lName={lName}
                    affiliation={affiliation}
                    payout={payout}
                    _id={_id}
                    btnText="Complete Changes"
                    submit={props.editBounty}
                />
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}

