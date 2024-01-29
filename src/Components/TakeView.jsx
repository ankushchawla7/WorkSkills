import React from 'react'
import ViewOneImg from '../assets/images/png/view-one-img.webp'
import ViewTwoImg from '../assets/images/png/view-two-img.webp'
import ViewThreeImg from '../assets/images/png/view-three-img.webp'
import ViewFourImg from '../assets/images/png/view-four-img.webp'
import LikeHeart from '../assets/images/png/likes-heart.webp'
import CommentIcon from '../assets/images/png/comment-icon.webp'
import UploadIcon from '../assets/images/png/upload-icon.webp'

const TakeView = () => {
    return (
        <>
            <section id='article' className='take-view-section bg-[#EFEFEF] py-6 md:py-[40px] lg:py-12 xl:pb-[72px] xl:pt-[114.8px]'>
                <div className='max-w-[min(1140px,100%-24px)] mx-auto'>
                    <h2 className='ff-roboto text-[30px] md:text-[40px] lg:text-[48px] text-black mb-6 xl:mb-[75.43px] leading-[1.1667] text-center'>Let’s Take a <span className='font-semibold'> View </span></h2>
                    <div className='view-section-content'>
                        <div className='view-card view-one flex justify-center lg:justify-between flex-wrap items-center border-y-[1px] border-solid border-[#B0B0B0] pt-[17.19px] pb-[21.71px]'>
                            <div className='w-full flex justify-center lg:w-[33.33%]' data-aos="fade-right">
                                <img src={ViewOneImg} alt="view-one-img" className='w-full sm:w-[75%] lg:w-[364px] lg:h-[225px]' />
                            </div>
                            <div className='w-full lg:w-[60%] mt-6 lg:mt-0' data-aos="fade-left">
                                <div className='flex flex-col gap-4 '>
                                    <span className='inline-block leading-[1.1667] text-[18px] ff-roboto font-medium text-[#FF5CD7]'>July 2023</span>
                                    <h3 className='text-[24px] ff-roboto font-medium text-black leading-[1.167] '>Join  us on our next challenge</h3>
                                    <p className='ff-roboto leading-[1.5] text-[#484848]'>Working with feedback</p>
                                    <p className='ff-roboto leading-[1.5] text-[#484848] text-[14px]'>April 9 - LIOR KRENGEL</p>
                                    <a href="#" className='underline inline-block ff-roboto font-medium text-[18px] text-black transition-all ease-linear duration-200 hover:text-[#FF5CD7] leading-[1.1667]'>Read more</a>
                                </div>
                                <div className='flex justify-between mt-[26px] opacity-0 extra-stuff transition-all duration-300 ease-linear'>
                                    <div>
                                        <div className='flex gap-[2.01px] text-[20px] font-medium text-black ff-roboto leading-[normal] items-center'>
                                            <img src={LikeHeart} alt="like-heart-icon" className='w-[24px] cursor-pointer h-[24px]' />
                                            2

                                        </div>
                                    </div>
                                    <img src={CommentIcon} alt="comment-icon" className='w-[24px] cursor-pointer h-[24px]' />
                                    <img src={UploadIcon} alt="upload-icon" className='w-[24px] cursor-pointer h-[24px]' />
                                </div>
                            </div>
                        </div>
                        <div className='view-two flex justify-between flex-wrap pt-[21.7px] pb-[23px]'>
                            <div className='w-full lg:w-[33.33%] flex justify-center' data-aos="fade-right">
                                <img src={ViewTwoImg} alt="view-two-img" className='w-full sm:w-[75%] lg:w-[364px] lg:h-[225px]' />
                            </div>
                            <div className='w-full lg:w-[60%] mt-6 lg:mt-0' data-aos="fade-left">
                                <div className='flex flex-col gap-[11px] '>
                                    <span className='inline-block leading-[1.1667] text-[18px] ff-roboto font-medium text-[#FF5CD7]'>July 2023</span>
                                    <h3 className='text-[24px] ff-roboto font-medium text-black leading-[1.167] lg:max-w-[565px] '>Our journey comes to a close flipping the coin and the tools we have gathered</h3>
                                    <p className='ff-roboto leading-[1.5] text-[#484848] lg:max-w-[565px]'>Together we have spent the lst five weeks exploring and practing our healthy Boundaries. We took a step back and connected  with our.....</p>
                                    <p className='ff-roboto leading-[1.5] text-[#484848] text-[14px]'>March 15 - LIOR KRENGEL</p>
                                    <a href="#" className='underline inline-block ff-roboto font-medium text-[18px]  text-black transition-all ease-linear duration-200 hover:text-[#FF5CD7] leading-[1.1667]'>Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className='view-three flex justify-between flex-wrap border-y-[1px] border-solid border-[#B0B0B0] pt-[21.7px] pb-[21.71px]'>
                            <div className='w-full lg:w-[33.33%] flex justify-center' data-aos="fade-right">
                                <img src={ViewThreeImg} alt="view-three-img" className='w-full sm:w-[75%] lg:w-[364px] lg:h-[225px]' />
                            </div>
                            <div className='w-full lg:w-[60%] mt-6 lg:mt-0' data-aos="fade-left">
                                <div className='flex flex-col gap-4 '>
                                    <h3 className='text-[24px] ff-roboto font-medium text-black leading-[1.167] lg:max-w-[565px] '>Week five: stepping into our yes with secure expectations</h3>
                                    <p className='ff-roboto leading-[1.5] text-[#484848] max-w-[565px]'>Our yes is only human too</p>
                                    <p className='ff-roboto leading-[1.5] text-[#484848] text-[14px]'>June 3 - LIOR KRENGEL</p>
                                    <a href="#" className='underline inline-block ff-roboto font-medium text-[18px]  text-black transition-all ease-linear duration-200 hover:text-[#FF5CD7] leading-[1.1667]'>Read more</a>
                                </div>
                            </div>
                        </div>
                        <div className='view-four flex flex-wrap justify-between border-b-[1px] border-solid border-[#B0B0B0] pt-[21.7px] pb-[22.71px]'>
                            <div className='w-full lg:w-[33.33%] flex justify-center' data-aos="fade-right">
                                <img src={ViewFourImg} alt="view-four-img" className='w-full sm:w-[75%] lg:w-[364px] lg:h-[225px]' />
                            </div>
                            <div className='w-full lg:w-[60%] mt-6 lg:mt-0' data-aos="fade-left">
                                <div className='flex flex-col gap-4 '>
                                    <h3 className='text-[24px] ff-roboto font-medium text-black leading-[1.167] max-w-[565px] '>Step three: exploring between our yes and no</h3>
                                    <p className='ff-roboto leading-[1.5] text-[#484848] max-w-[565px]'>A week of international curiosity</p>
                                    <p className='ff-roboto leading-[1.5] text-[#484848] text-[14px]'>July 21 - LIOR KRENGEL</p>
                                    <a href="#" className='underline inline-block ff-roboto font-medium text-[18px]  text-black transition-all ease-linear duration-200 hover:text-[#FF5CD7] leading-[1.1667]'>Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-[37.02px]'>
                        <button className='py-[10px] px-[20px] sm:py-[15px] sm:px-[33px] border-[1px] border-solid w-[188px] border-[#ff5cd7] hover:bg-white hover:text-[#ff5cd7] duration-200 ease-linear transition-all rounded-[264px] bg-[#FF5CD7] text-white ff-roboto sm:text-[18px] font-medium leading-[1.167]'>View All</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TakeView