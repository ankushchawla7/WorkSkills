import React from 'react'
import FooterLogo from '../assets/images/png/footer-logo.png'
import BookmarkIcon from '../assets/images/svg/bookmarks-icon.svg'

const MyFooter = () => {
    return (
        <>
            <footer className='footer-bg bg-cover bg-center bg-no-repeat pt-[25.25px] pb-[26px]'>
                <div className='max-w-[min(1140px,100%-24px)] mx-auto'>
                    <div className='max-w-[373px] mx-auto'>
                        <div className='flex justify-center'>
                            <a href="#"><img src={FooterLogo} alt="footer-logo" className='h-[60px] lg:h-[75.533px]' /></a>
                        </div>
                        <div className='flex ff-roboto gap-[3px] leading-[1.143] items-center justify-center my-[33px]'>
                            <span className='text-[#919496] text-[16px] font-normal leading-[1.188]'>©</span>
                            <div className='text-white ff-roboto  text-[12px] sm:text-[14px]'>
                                <span>2023 Lior krengle </span>
                                <span><a href="#" className='inline-block leading-[1.143]'>. <span className='underline'>Privacy</span></a></span>
                                <span><a href="#" className='inline-block leading-[1.143]'>. <span className='underline'>Terms</span> </a></span>
                                <span><a href="#" className='inline-block leading-[1.143]'>. <span className='underline'>Collection Notice</span></a></span>
                            </div>
                        </div>
                        <div className='flex gap-6 items-center '>
                            <button className='flex items-center gap-[10px] bg-white rounded-[264px]  leading-[normal] py-[10px] px-[20px] sm:py-[13px] sm:px-[27px] hover:bg-transparent hover:text-white border-[1px] border-solid border-white transition-all duration-200 ease-linear sm:text-[18px] ff-roboto  font-medium text-black'>
                                <img src={BookmarkIcon} alt="bookmark-icon" className='w-[24px] h-[24px]' />
                                Start Writing
                            </button>
                            <button className='py-[13px] px-[22px] sm:py-[15px] sm:px-[31px] border-[1px] border-solid border-white hover:bg-transparent hover:text-white transition-all duration-200 ease-linear ff-roboto  sm:text-[18px]  font-medium text-black leading-[1.167] bg-white rounded-[109px] backdrop-blur-sm'>Get the app</button>
                        </div>
                    </div>
                    <hr className='w-full h-[1px]  border-[#282D31] mt-[28.22px]' />
                    <p className='text-[14px] ff-roboto text-[#87898C] text-center mt-[30px] leading-[1.143]'><span className='underline'> Substack </span> is the home for great writing</p>
                </div>
            </footer>
        </>
    )
}

export default MyFooter