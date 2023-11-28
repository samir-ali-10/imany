import React, { useEffect, useState } from 'react'
import AzkarDetails from './AzkarDetails';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../reduxtk/features/azkar/azkarSlice';

export default function AzkarData({ azkar }) {

    const [count, setCount] = useState();

    let handleAzkarSabah = () => {
        setCount(0);
    }

    let handleAzkarMasaa = () => {
        setCount(1);
    }
    
    let handleTasabih = () => {
        setCount(3);
    }

    return (
        <>
            <div className='azkar'>
                <div className="categories">
                    <div className="category">
                        <button onClick={handleAzkarSabah}>اذكار الصباح</button>
                    </div>
                    <div className="category">
                        <button onClick={handleAzkarMasaa}>اذكار المساء</button>
                    </div>
                    <div className="category">
                        <button onClick={handleTasabih}>تسابيح</button>
                    </div>
                </div>
            </div>
            <AzkarDetails azkar={azkar} count={count} />
        </>
    )
}
