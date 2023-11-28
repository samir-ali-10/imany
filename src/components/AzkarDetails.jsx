import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../reduxtk/features/azkar/azkarSlice';

export default function AzkarDetails({ azkar, count }) {

    const [azkarCount, setAzkarCount] = useState(),
        [azkary, setAzkary] = useState();


    const azkarSt = useSelector((state) => state.azkar);
    const dispatch = useDispatch();


    useEffect(() => {
        handleAzkar()
    }, [count])

    let handleAzkar = () => {
        setAzkary(Object.values(azkarSt.azkarItem[4])[count]);
    }

    console.log(azkary);

    // console.log(Object.values(azkarSt.azkarItem[0])[count]);
    // let handleCount = (azkaro) => {
    //     let countInNumber;
    //     if(azkaro.count[0] === "0") {
    //         countInNumber = Number(azkaro.count.replace("0", ""))
    //         setAzkarCount(countInNumber)
    //     }
    //     else {
    //         setAzkarCount(Number(azkaro.count));
    //     }
    // }

    // let decreaseCount = () => {
    //     setAzkarCount(azkarCount-1);
    // }

    console.log(azkarCount);

    // console.log(azkary);

    return (
        <div className='azkar_details'>
            {
                azkary !== undefined
                    ?
                    <div className="cards">
                        {
                            azkary.map((azkaro, index) =>
                                <div key={index} className="card">
                                    <div className="heading">
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
