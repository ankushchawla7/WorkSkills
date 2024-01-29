import React from 'react'
import HeaderLogo from '../assets/images/png/header-logo.webp'
const PreLoader = () => {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden")
        document.body.classList.remove("overflow-hidden")

    }, 4000);
    return (
        <>
            <section>
                <div id='preloader' className='bg-[#001520] z-50 fixed top-0 start-0 bottom-0 min-h-screen w-full flex items-center justify-center'>
                    <div className="wrapper flex flex-col items-center ">
                        <img src={HeaderLogo} alt="header-logo" className='h-[60px]' />
                        <div className="loading-text text-[24px]">
                            <span className="dot-one text-white"> .</span>
                            <span className="dot-two text-white"> .</span>
                            <span className="dot-three text-white"> .</span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default PreLoader