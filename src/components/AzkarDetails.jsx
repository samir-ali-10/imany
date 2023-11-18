import React from 'react'

export default function AzkarDetails({ azkar, count }) {

    let azkary = Object.values(azkar)[count];

    return (
        <div className='azkar_details'>
            {
                azkary !== undefined
                    ?
                    <div className="cards">
                        {
                            azkary.map(azkaro =>
                                <div className="card">
                                    <div className="heading">
                                        <h2>{azkaro.count}</h2>
                                    </div>
                                    <div className="content">
                                        <p>{azkaro.content}</p>
                                    </div>
                                    <footer></footer>
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
