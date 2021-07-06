import React from 'react'

function Services() {
    return(
        <div className="services">
            <div className="image-wrapper">
                <img className="home-image" src="https://www.wittplumbing.net/__static/7ba868923c07a927c169fba846323ebd/background2.jpg" alt=""></img>
            </div>
            <h1 className="title">What we can provide for you: </h1>
            <div className="services-info">
                <h2>We are proud to offer a full variety of services.</h2>
                <ul className="services-list">
                    <li>Emergency Plumbing Services --Call (123) 456-7890 Now!</li>
                    <li>Leaking pipes and pipe repair</li>
                    <li>Bathroom and kitchen rennovations</li>
                    <li>Water heater installations</li>
                    <li>Plumbing consulations by appointment only</li>
                </ul>
            </div>
        </div>
    )
}

export default Services