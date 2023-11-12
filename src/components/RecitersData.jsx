import React from 'react'
import { NavLink } from 'react-router-dom'

export default function RecitersData({ reciters }) {



    return (
        <div className='reciters'>
            <div className="card_container">
                {
                    reciters.map((reciter) =>
                        <NavLink to={`/reciterDetails/${reciter.id}`} key={reciter.id} className="card">
                            <p>{reciter.name}</p>
                        </NavLink>
                    )
                }
            </div>
        </div>
    )
}
