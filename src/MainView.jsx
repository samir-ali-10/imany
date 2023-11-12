import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import SurahsData from './components/SurahsData';
import RecitersData from './components/RecitersData';

export default function MainView() {

    const recitersAPI = "https://mp3quran.net/api/v3/reciters?language=ar",
        surahsAPI = "https://api.quran.gading.dev/surah";

    const [isactive, setIsActive] = useState("surahs");

    const [reciters, setReciters] = useState([]),
        [surahs, setSurahs] = useState([]);

    let loadReciters = () => {
        fetch(recitersAPI).then(res => res.json()).then(data => setReciters(data.reciters));
    }

    let loadSurahs = () => {
        fetch(surahsAPI).then(res => res.json()).then(data => setSurahs(data.data));
    }

    let handleActiveSurahs = () => {
        setIsActive("surahs")
    }

    let handleActiveReciters = () => {
        setIsActive("reciters");
    }



    useEffect(() => {
        loadSurahs();
    }, [])

    return (
        <div className='main_view'>
            <div className="container">
                <div className="selection">
                    <ul>
                        <li><button className={isactive === "surahs" ? "active" : ""} onClick={() => {
                            loadSurahs()
                            handleActiveSurahs()
                        }} active>Surahs</button></li>
                        <li><button className={isactive === "reciters" ? "active" : ""} onClick={() => {
                            loadReciters()
                            handleActiveReciters()
                        }}>Reciters</button></li>
                    </ul>
                </div>
                {
                    isactive === "surahs"
                    ?
                    <SurahsData surahs={surahs}/>
                    :
                    <RecitersData reciters={reciters}/>
                }
            </div>
        </div>
    )
}
