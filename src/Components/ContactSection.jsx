import React from 'react'
import ContactSectionImg from '../assets/images/png/contact-section-img.webp'
import PhoneIcon from '../assets/images/svg/phone-icon.svg'
import InstaIcon from '../assets/images/svg/instagram-icon.svg'
import LinkdinIcon from '../assets/images/svg/linkdin-icon.svg'

const ContactSection = () => {
    return (
        <>
            <section className='contact-section bg-[#EFEFEF] py-6 md:py-[40px] lg:py-12 xl:pt-[146px] xl:pb-[87px]'>
                <div className='max-w-[min(1140px,100%-24px)] mx-auto'>
                    <div className='flex justify-center xl:justify-end relative flex-wrap z-[1]'>
                        <div className='xl:absolute z-[-1] start-0 top-[-10%]' data-aos="fade-right">
                            <div className='xl:relative'>
                                <img src={ContactSectionImg} alt="contact-section-img" className=' w-[558px] start-0' />
                                <div className='mt-6 xl:absolute mail-card bg-[#FFF8F8] py-[20px] px-[24px] rounded-[5px] bottom-[-18%]'>
                                    <div className='flex items-center gap-4'>
                                        <a href="tel:+4733378901" target='blank' className='transition-all duration-200 ease-linear hover:translate-y-[-5px]'><img src={PhoneIcon} alt="phone-icon" className='w-[40px] h-[40px]' /></a>
                                        <a href="mailto:Stepenjohns@gmail.com" className='inline-block ff-roboto text-[20px] leading-[1.15]'>Stepenjohns@gmail.com</a>
                                    </div>
                                    <div className='flex gap-[9px] mt-[10px]'>
                                        <a href="https://www.instagram.com/" target='blank' className='transition-all duration-200 ease-linear hover:translate-y-[-5px]'><img src={InstaIcon} alt="insta-icon" className='w-[35px] h-[35px] ' /></a>
                                        <a href="https://in.linkedin.com/" target='blank' className='transition-all duration-200 ease-linear hover:translate-y-[-5px]'><img src={LinkdinIcon} alt="linkdin-icon" className='w-[35px] h-[35px]'/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='contact-card mt-6 xl:mt-0 rounded-[5px] pt-[28px] pb-[27px] lg:ps-[45px] p-2 sm:p-6 lg:pe-[44px] max-w-[679px] bg-[#FAF8F8]' data-aos="fade-left">
                            <h2 className='text-[30px] md:text-[40px] lg:text-[48px] ff-roboto text-[#111111] leading-[1.1667] mb-4' >Get <span className='font-semibold'> Updated </span> With Us</h2>
                            <p className='ff-roboto leading-[1.5] font-medium text-[#646363] mb-10'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
                            <form className='max-w-590px flex flex-col gap-[16px] mb-[32px]' >
                                <div className='flex flex-wrap justify-between gap-6'>
                                    <input type="text" placeholder='Your Name' required className='w-full sm:w-[47%] px-[18px] outline-none py-[19px] ff-roboto text-[#7F7F7F] capitalize leading-[normal]' />
                                    <input type="email" placeholder='Your Email Address' required className='w-full sm:w-[47%] outline-none px-[18px] py-[19px] ff-roboto text-[#7F7F7F] capitalize leading-[normal]' />
                                </div>
                                <textarea placeholder='Message' className='w-full h-[143px] resize-none outline-none py-[19px] px-[18px]'></textarea>
                            </form>
                            <button className='py-[10px] px-[20px] sm:py-[11px] sm:px-[23px] border-[1px] border-solid border-[#ff5cd7] hover:bg-white hover:text-[#ff5cd7] duration-200 ease-linear transition-all rounded-[40px] bg-[#FF7DDF] ff-roboto text-white font-medium leading-[1.167] text-[18px]'>Send Message</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ContactSection