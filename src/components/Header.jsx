import React from 'react'
import mainImage from "../imgs/quran_writing.jpg"

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="main_image">
                    <img src={mainImage} alt="mainImage" />
                </div>
            </div>
        </header>
    )
}
