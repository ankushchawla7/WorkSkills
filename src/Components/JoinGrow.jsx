import React from 'react'
import JoinGrowSectionLogo from '../assets/images/png/join-grow-section-logo.webp'

const JoinGrow = () => {
    return (
        <>
            <section id='events' className='join-grow-section-bg py-6 md:py-[40px] lg:py-12 xl:pt-[42.36px] xl:pb-[42.6px]'>
                <div className='max-w-[min(863px,100%-24px)] mx-auto'>
                    <div className='flex justify-center'>
                        <img src={JoinGrowSectionLogo} alt="join-grow-section-logo" className='h-[50px] sm:h-[70px] md:h-[80px] xl:h-[107.796px]' />
                    </div>
                    <h2 className='text-[30px] md:text-[40px] lg:text-[48px] ff-roboto text-white text-center leading-[1.2084] my-[19px]'>Join work skill and start <span className='font-semibold'> work on your soft skills now </span> and change yourself</h2>
                    <p className=' ff-roboto text-center text-[#B7B9BC] max-w-[534px] mx-auto leading-[1.5] mb-[45px]'>Lpsum diam curabitur tincidunt sed vitae nulla a porttitor sed. Eros sem sed gravida in nulla dictum </p>
                    <div className='btn-box flex justify-center'>
                        <button className='py-[10px] px-[20px] sm:py-[15px] sm:px-[33px] border-[1px] border-solid border-[#ff5cd7] hover:bg-white hover:text-[#ff5cd7] duration-200 ease-linear transition-all bg-[#FF5CD7] sm:text-[18px] font-medium ff-roboto text-white rounded-[264px] leading-[1.167]'>Subscribe</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default JoinGrow