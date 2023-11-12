import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import ReciterSurahDetails from './ReciterSurahDetails';

export default function RecitersDetails() {

    const params = useParams();

    const [reciterDetails, setReciterDetails] = useState(),
        [surahs, setSurahs] = useState([]),
        [isActive, setActive] = useState(true);

    let handleSurahsActive = () => {
        setActive(false);
    }

    const surahsAPI = "https://api.quran.gading.dev/surah";

    let loadSurahs = () => {
        fetch(surahsAPI).then(res => res.json()).then(data => setSurahs(data.data));
    }

    let loadReciterDetails = () => {
        fetch(`https://mp3quran.net/api/v3/reciters?language=ar&reciter=${params.reciterId}`).then(res => res.json()).then(data => setReciterDetails(data.reciters));
    }

    useEffect(() => {
        loadSurahs();
        loadReciterDetails();
    }, [])

    return (
        <div className="reciterDetails">
            {
                reciterDetails !== undefined
                    ?
                    <>
                        <h2>الشيخ {reciterDetails[0].name}</h2>
                        <>
                            {
                                isActive
                                    ?
                                    <div className='surahs'>
                                        <div className="card_container">
                                            {
                                                surahs.map(surah =>
                                                    <NavLink to={`/reciterDetails/surah/${surah.number}`}
                                                        key={surah.number} onClick={handleSurahsActive} className="card">
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

                                    :

                                    <div className='reciter_surah_details'>
                                        <ReciterSurahDetails paramsReciter={params.reciterId} />
                                    </div>
                            }
                        </>
                    </>
                    :
                    <p>Loading..</p>
            }

        </div >
    )
}
