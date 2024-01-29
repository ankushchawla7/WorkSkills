import React, { useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeaderLogo from '../assets/images/png/header-logo.webp'
import { Sling as Hamburger } from 'hamburger-react'

const MyHeader = () => {
    useEffect(() => {
        AOS.init(
            {
                once:true,
                duration:1000,
            }
        );
    }, [])
    const [show, setShow] = useState(false)
    const [isOpen, setOpen] = useState(false)
    if (show === true) {
        document.body.classList.add("max-sm:overflow-hidden")
    }
    else {
        document.body.classList.remove("max-sm:overflow-hidden")
    }
    const movement = () => {
        return (
            setShow(!show),
            setOpen(!isOpen)
        )
    }
    return (
        <>
            <header className='header-bg bg-cover bg-center bg-no-repeat min-h-[500px] flex flex-col pt-[18px] lg:min-h-screen'>
                <nav>
                    <div className='max-w-[min(1141px,100%-24px)] mx-auto'>
                        <div className='flex items-center justify-between py-[10.66px] bg-[#1E2429] rounded-[328px] border-[1px] border-solid border-[#2D333A] ps-[31.29px] pe-[18.41px]'>
                            <div className='log0-img'>
                                <a href="#home"><img src={HeaderLogo} alt="header-logo" className='h-[53.69px] w-[63.85px]' /></a>
                            </div>
                            <ul className={`${show ? "left-0" : "max-sm:left-[-100%]"} max-sm:ransition-all duration-200 ease-linear max-sm:fixed max-sm:bg-black max-sm:w-full start-0 max-sm:min-h-screen top-0 max-sm:flex max-sm:flex-col justify-center max-sm:text-[24px] z-[5] text-white ff-roboto flex items-center  gap-[16px] md:ps-[89.2px]`}>
                                <li><a href="#home" className='inline-block nav-link leading-[normal]' onClick={movement}>Home</a></li>
                                <li><a href="#about" className='inline-block nav-link leading-[normal]' onClick={movement}>About</a></li>
                                <li><a href="#article" className='inline-block nav-link leading-[normal]' onClick={movement}>Article</a></li>
                                <li><a href="#events" className='inline-block nav-link leading-[normal]' onClick={movement}>Events</a></li>
                            </ul>
                            <button className='sm:text-[18px] font-medium leading-[1.167] text-black py-[8px] px-[16px] border-[1px] border-solid border-white sm:py-[14px] sm:px-[29px] hover:bg-transparent hover:text-white  transiton-all duration-200 ease-linear  bg-white rounded-[114px] ff-roboto'>+ Subscribe</button>
                            <button className='relative z-[10] sm:hidden' onClick={() => setShow(!show)}><Hamburger toggled={isOpen} color='white' toggle={setOpen} /></button>
                        </div>
                    </div>
                </nav>
                <div className="flex grow hero-section 2xl:justify-center lg:items-center">
                    <div className='max-w-[min(1141px,100%-24px)] mx-auto'>
                        <div className='mt-12 lg:mt-0'>
                            <h1 className='text-center mb-[12px] text-white ff-roboto text-[35px] sm:text-[40px] md:text-[50px] lg:text-[64px] leading-[1.172] ff-roboto max-w-[793px] mx-auto'>Meet <span className='font-semibold'> Work Skill </span> Your Agency for Growth</h1>
                            <p className='ff-roboto mb-6 sm:mb-[38px] text-center max-w-[709px] text-[#CDC7C7] mx-auto leading-normal'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                                layout. The point of using Lorem Ipsum is that it has a more-or-less norma.</p>
                            <div className='text-center' >
                                <button className='text-white leading-[1.167]  sm:text-[18px] font-medium ff-roboto py-[10px] px-[20px] sm:py-[15px] sm:px-[33px] border-[1px] hover:bg-white hover:text-black transition-all duration-200 ease-linear  border-solid rounded-[109px] bg-transparent  !backdrop-blur-[4px]'>Get Started</button>
                            </div>

                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default MyHeader