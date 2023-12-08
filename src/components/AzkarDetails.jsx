import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseAzkarCount } from '../reduxtk/features/azkar/azkarSlice';
import { fetchAzkar } from '../reduxtk/features/fetchAzkar/fetchAzkarSlice';

export default function AzkarDetails({ azkar, count }) {


    const [azkary, setAzkary] = useState();


    const azkarSt = useSelector((state) => state.fetchAzkar);
    const azkarCount = useSelector((state) => state.azkar.azkarItemCount)
    const dispatch = useDispatch();

    let handleIncreaseAzkarCount = (azkaro) => {
        if (azkarCount === +azkaro.target.innerHTML) {
            console.log("heoiklansrd")
        }
        else {
            dispatch(increaseAzkarCount())
        }
    }

    console.log(azkarCount);


    useEffect(() => {
        dispatch(fetchAzkar())
        setAzkary(Object.values(azkarSt.azkarItems)[count])
    }, [count])

    return (
        <div className='azkar_details'>
            {
                azkary !== undefined
                    ?
                    <div className="cards">
                        {
                            azkary.map((azkaro, index) =>
                                <div key={index} className="card">
                                    <div className="heading" onClick={(azkaro) => handleIncreaseAzkarCount(azkaro)}>
                                        <h2>{azkaro.count[0] === "0" ? azkaro.count.replace("0", "") : azkaro.count}</h2>
                                    </div>
                                    <div className="content">
                                        <p>{azkaro.content}</p>
                                    </div>
                                    <footer>
                                        {azkaro.description !== "" ? <p>{`"${azkaro.description}"`}</p> : ""}
                                    </footer>
                                </div>
                            )
                        }
                    </div>
                    :
                    <p>Select an option please</p>
            }
        </div>
    )
}
