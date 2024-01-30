import React from 'react'
import WelcomeSectionImg from '../assets/images/png/welcome-section-img.png'

const Welcome = () => {
    return (
        <>
            <section id='about' className='welcome-section bg-[#EFEFEF] py-6 md:py-[40px] lg:py-12 xl:pt-[164.5px] xl:pb-[147.74px]'>
                <div className='max-w-[min(1139px,100%-24px)] mx-auto'>
                    <div className='flex justify-center  xl:justify-end flex-wrap  relative items-center z-[1]'>
                        <div className='xl:absolute z-[-1] start-0 max-sm:w-full !md:w-[75%] flex justify-center' data-aos="fade-right">
                            <img src={WelcomeSectionImg} alt="welcome-section-img" className='md:max-w-[679px] w-full sm:w-[75%] md:w-full rounded-[5px] stroke-1 stroke-white' />
                        </div>
                        <div className='welcome-section-card p-4 sm:p-6 bg-[#FAF8F8]  rounded-[5px] mt-6 xl:mt-0 w-full xl:w-auto' data-aos="fade-left">
                            <div>
                                <h2 className='text-[30px] md:text-[40px] lg:text-[48px] text-black ff-roboto leading-[1.1667] mb-5'><span className='font-semibold'>Welcome </span> to Work Skills</h2>
                                <ul className='xl:max-w-[509px] mb-4 xl:mb-[52px] text-[#4B4B4B] ff-roboto flex flex-col gap-4 leading-[1.5] list-disc ps-6'>
                                    <li>Work Skills is built for young professionals who want to enhance their soft skills to overcome the challenges they often face during the early first years of work.
                                    </li>
                                    <li>
                                        In a practical and growth-oriented approach, we help young professionals develop and strengthen essential skills such as boundaries-setting, communication, adaptability, and others.
                                    </li>
                                    <li>
                                        In this way, we aim to empower young professionals to navigate their careers with confidence and success.
                                    </li>
                                </ul>
                                <button className='py-[10px] px-[20px] sm:py-[15px] sm:px-[33px] border-[1px] border-solid border-[#ff5cd7] hover:bg-white hover:text-[#ff5cd7] transition-all duration-200 ease-linear  bg-[#FF5CD7] sm:text-[18px] font-medium ff-roboto text-white rounded-[264px] leading-[1.167]'>Subscribe</button>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Welcome