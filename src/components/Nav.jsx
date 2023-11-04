import React from 'react'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='nav'>
            <nav>
                <NavLink to="/">Imany</NavLink>
                <ul>
                    <li>
                        <button><FontAwesomeIcon icon={faGlobe} /></button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
