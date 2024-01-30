import React, { useState } from "react";
import AccordionOpenIcon from '../assets/images/png/accordion-open-icon.webp'
import AccordionCloseIcon from '../assets/images/png/accordion-close-icon.webp'


const MyAccordion = () => {
    const [openAccordion, setOpenAccordion] = useState(0);
    console.log(openAccordion)
    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
        console.log(index)
    };
    const accordionData = [
        {
            title: "What products can I scan?",
            content:
                "You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!",
        },
        { title: "Where can I use my rewards?", content: "You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!" },
        { title: "What kind of impact can I make?", content: "You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!" },
        { title: "Which brands do you partner with?", content: "You can scan any product with a barcode before you recycle, no matter what it’s made of. Cloopp rewards you for your positive actions!" }

    ];
    return (
        <>
            <section className="bg-[#EFEFEF] xl:pt-[87px] py-6 md:py-[40px] lg:py-12 xl:pb-[150px]">
                <div className="max-w-[min(957px,100%-24px)] mx-auto">
                    <h2 className="text-[30px] md:text-[40px] lg:text-[48px] xl:text-[52px] ff-outfit leading-[1.0962] mb-[40px] font-semibold text-[#0D0D0D]  text-center">Frequently Asked Questions</h2>
                    <div className="accordion flex flex-col gap-4">
                        {accordionData.map((item, index) => (
                            <div className="accordion-item" key={index}>
                                    <div className="accordion-title w-full px-4 ff-outfit text-[20px] text-[#0D0D0D] leading-[1.1] font-medium" onClick={() => toggleAccordion(index)}>
                                        <div className="flex items-start justify-between">
                                            {item.title}
                                            <div>{openAccordion === index ? <img src={AccordionCloseIcon} alt="icon" className="w-[15px]" /> : <img src={AccordionOpenIcon} alt="icon" className="w-[15px]" />}</div>
                                        </div>
                                    </div>
                                <div className={`accordion-content ${openAccordion === index ? "open" : ""} ps-4 max-w-[760px] ff-outfit leading-[1.5] text-[#3A3A3A]`}>
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MyAccordion