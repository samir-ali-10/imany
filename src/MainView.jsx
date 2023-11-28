import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import SurahsData from './components/SurahsData';
import RecitersData from './components/RecitersData';
import AzkarData from './components/AzkarData';
import { useDispatch } from 'react-redux';
import { addToCart } from './reduxtk/features/azkar/azkarSlice';

export default function MainView() {

    const recitersAPI = "https://mp3quran.net/api/v3/reciters?language=ar",
        surahsAPI = "https://api.quran.gading.dev/surah",
        azkarAPI = "https://raw.githubusercontent.com/nawafalqari/ayah/main/src/data/adkar.json";

    const [isactive, setIsActive] = useState("surahs");

    const [reciters, setReciters] = useState([]),
        [surahs, setSurahs] = useState([]),
        [azkar, setAzkar] = useState([]);

    let loadReciters = () => {
        fetch(recitersAPI).then(res => res.json()).then(data => setReciters(data.reciters));
    }

    let loadSurahs = () => {
        fetch(surahsAPI).then(res => res.json()).then(data => setSurahs(data.data));
    }

    let loadAzkar = () => {
        fetch(azkarAPI).then(res => res.json()).then(data => setAzkar(data));
    }

    let handleActiveSurahs = () => {
        setIsActive("surahs")
    }

    let handleActiveReciters = () => {
        setIsActive("reciters");
    }

    let handleActiveAzkar = () => {
        setIsActive("azkar");
    }

    const dispatch = useDispatch();


    useEffect(() => {
        loadSurahs();
        loadAzkar();
    }, [])

    const timeOut = setTimeout(() => {
        dispatch(addToCart(azkar))
    },3000)

    // clearTimeout(timeOut);

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
                        <li><button className={isactive === "azkar" ? "active" : ""} onClick={() => {
                            loadAzkar()
                            handleActiveAzkar()
                        }}>Azkar</button></li>
                    </ul>
                </div>
                {isactive === "surahs" ? <SurahsData surahs={surahs}/> : ""}
                {isactive === "reciters" ? <RecitersData reciters={reciters}/> : "" }
                {isactive === "azkar" ? <AzkarData azkar={azkar} /> : "" }
            </div>
        </div>
    )
}
