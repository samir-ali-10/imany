import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';

export default function ReciterSurahDetails({ paramsReciter }) {

    const params = useParams();

    const [reciterDetails, setReciterDetails] = useState(),
        [surah, setSurah] = useState();

    let loadReciterDetails = () => {
        fetch(`https://mp3quran.net/api/v3/reciters?language=ar&reciter=${paramsReciter}`).then(res => res.json()).then(data => setReciterDetails(data.reciters));
    }


    let surahDetailsData = () => {
        fetch(`https://api.quran.gading.dev/surah/${params.surahDetailId}`).then(res => res.json()).then(data => setSurah(data.data));
    }

    let backBtn = () => {
        window.history.back();
    }

    useEffect(() => {
        surahDetailsData();
        loadReciterDetails();
    }, [])

    return (
        <div className='reciterSurahDetails'>
            <div className="back_btn">
                <NavLink onClick={backBtn}><FontAwesomeIcon className='left-arrow' icon={faArrowLeftLong} />Go back to surahs</NavLink>
            </div>
            {
                reciterDetails !== undefined
                    ?
                    <>
                        <h2 className='surah_name'>{surah.name.long}</h2>
                        <audio controls>
                            <source src={`${reciterDetails[0].moshaf[0].server}/00${params.surahDetailId}.mp3`} type="audio/mpeg" />
                        </audio>
                        <div className="surahDetails">
                            <>
                                <h4>بسم اللّه الرحمن الرحيم</h4>
                                <div className="verses">
                                    {
                                        surah.verses.map((verse) =>
                                            <div key={verse.number.inQuran}>
                                                <span>{verse.text.arab}</span>
                                                <span className='separator'>({verse.number.inSurah})</span>
                                            </div>
                                        )
                                    }
                                </div>
                            </>
                        </div>
                    </>
                    :
                    <p>LOADING...</p>
            }
        </div>
    )
}
