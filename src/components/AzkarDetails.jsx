import React, { useState } from 'react'

export default function AzkarDetails({ azkar, count }) {

    const [azkarCount, setAzkarCount] = useState();

    let azkary = Object.values(azkar)[count];

    return (
        <div className='azkar_details'>
            {
                azkary !== undefined
                    ?
                    <div className="cards">
                        {
                            azkary.map((azkaro, index) =>
                                <div key={index} className="card">
                                    <div className="heading">
                                        <h2>{azkaro.count}</h2>
                                    </div>
                                    <div className="content">
                                        <p>{azkaro.content}</p>
                                    </div>
                                    <footer>
                                        {azkaro.description !== "" ? <p>{`"${azkaro.description}"`}</p> : ""}
                                    </footer>
                                </div>
                            )
                        }
                    </div>
                    :
                    <p>Select an option please</p>
            }
        </div>
    )
}
