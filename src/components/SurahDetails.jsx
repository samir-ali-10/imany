import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function SurahDetails() {

    let params = useParams();

    const [surah, setSurah] = useState();

    let surahDetailsData = () => {
        fetch(`https://api.quran.gading.dev/surah/${params.surahId}`).then(res => res.json()).then(data => setSurah(data.data));
    }

    useEffect(() => {
        surahDetailsData();
    }, [])

    return (
        <div className='surahDetails'>
            {
                surah !== undefined
                    ?
                    <>
                        <h2>{surah.name.long}</h2>
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
                    :
                    <p>LOADING..</p>
            }
        </div>
    )
}
