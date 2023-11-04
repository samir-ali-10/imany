import React from 'react'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom';

export default function SurahsData({ surahs }) {

    return (
        <div className='surahs'>
            <div className="card_container">
                {
                    surahs.map((surah) =>
                        <NavLink to={`./${surah.number}`} key={surah.number} className="card">
                            <div className="left">
                                <div className="outer">
                                    <div className="number">{surah.number}</div>
                                </div>
                                <div className="name">{surah.name.transliteration.en}</div>
                            </div>
                            <div className="right">
                                <div className="ar_name">{surah.name.short}</div>
                                <div className="verses">{surah.numberOfVerses} Ayahs</div>
                            </div>
                        </NavLink>
                    )
                }
            </div>
        </div>
    )
}
