import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import SurahsData from './components/SurahsData';

export default function MainView() {

    const recitersAPI = "https://ahmedosama0js.github.io/My-Project/quran%20karem/data/mashaykh.json",
        surahsAPI = "https://api.quran.gading.dev/surah";

    const [activeSurahs, setActiveSurahs] = useState(true),
        [activeReciters, setActiveReciters] = useState(false);

    const [reciters, setReciters] = useState([]),
        [surahs, setSurahs] = useState([]);

    let loadReciters = () => {
        fetch(recitersAPI).then(res => res.json()).then(data => setReciters(data.reciters));
    }

    let loadSurahs = () => {
        fetch(surahsAPI).then(res => res.json()).then(data => setSurahs(data.data));
    }

    let handleActiveSurahs = () => {
        setActiveSurahs(true);
        setActiveReciters(false)
    }

    let handleActiveReciters = () => {
        setActiveSurahs(false);
        setActiveReciters(true)
    }



    useEffect(() => {
        loadSurahs();
    }, [])

    return (
        <div className='main_view'>
            <div className="container">
                <div className="selection">
                    <ul>
                        <li><button className={activeSurahs ? "active" : ""} onClick={() => {
                            loadSurahs()
                            handleActiveSurahs()
                        }} active>Surahs</button></li>
                        <li><button className={activeReciters ? "active" : ""} onClick={() => {
                            loadReciters()
                            handleActiveReciters()
                        }}>Reciters</button></li>
                    </ul>
                </div>
                <SurahsData surahs={surahs} />
            </div>
        </div>
    )
}
