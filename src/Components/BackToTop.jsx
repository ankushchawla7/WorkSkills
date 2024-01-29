import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import BackTop from '../assets/images/svg/backtotop.svg'

const BackToTop = () => {
    const top = () => {
        document.documentElement.scrollTop = 0;
    };
    const [backToTop, setbackToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.documentElement.scrollTop > 350) {
                setbackToTop(true);
            } else {
                setbackToTop(false);
            }
        });
    }, []);
    return (
        <>
                <div onClick={top} className=' backtop z-3 fixed right-[2%] bottom-[3%] hover:bg-[#ff5cd7] bg-white p-[2px] border-[2px] border-[#ff5cd7]  rounded-[15px] animate-bounce z-[5] cursor-pointer' style={{ display: backToTop ? "flex" : "none" }}>
                    <img src={BackTop} alt="back-to-top-arrow" className='h-30px] ' />
                </div>
        </>
    )
}

export default BackToTop