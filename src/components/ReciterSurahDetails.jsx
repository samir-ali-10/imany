import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';

export default function ReciterSurahDetails({ paramsReciter }) {

    const params = useParams();

    const [reciterDetails, setReciterDetails] = useState();

    let loadReciterDetails = () => {
        fetch(`https://mp3quran.net/api/v3/reciters?language=ar&reciter=${paramsReciter}`).then(res => res.json()).then(data => setReciterDetails(data.reciters));
    }

    let backBtn = () => {
        window.history.back();
    }

    useEffect(() => {
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
                        <audio controls>
                            <source src={`${reciterDetails[0].moshaf[0].server}/00${params.surahDetailId}.mp3`} type="audio/mpeg" />
                        </audio>
                    </>
                    :
                    <p>LOADING...</p>
            }
        </div>
    )
}
