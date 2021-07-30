import React, {useState} from 'react';

export default function AddBountyForm(props) {
    const initInputs = { fName: props.fName || "", lName: props.lName || "", affiliation: props.affiliation || "", payout: props.payout || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="fName"
                value={inputs.fName}
                placeholder="First Name"
                onChange={handleChange}
            />
            <input
                type="text"
                name="lName"
                value={inputs.lName}
                placeholder="Last Name"
                onChange={handleChange}
            />
            <input
                type="text"
                name="affiliation"
                value={inputs.affiliation}
                placeholder="Affiliation"
                onChange={handleChange}
            />
            <input
                type="text"
                name="payout"
                value={inputs.payout}
                placeholder="Payout"
                onChange={handleChange}
            />
            <button>{props.btnText}</button>
        </form>
    )
}