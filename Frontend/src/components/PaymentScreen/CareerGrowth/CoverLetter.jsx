import React from 'react'
import BgImage from '../../../images/coverletterBanner.png'
import resume1 from '../../../images/resume1.png'
import resume2 from '../../../images/resume2.png'
import resume3 from '../../../images/resume3.png'
import resume4 from '../../../images/resume4.png'
import Contactus from '../../Contactus'
import Blog from '../../Blog'
import image1 from '../../../images/image 167.png'
import icon from '../../../images/image 168.png'


const CoverLetter = () => {
    return (
        <div className='flex flex-col gap-y-8' style={{ fontFamily: 'inter' }}>
            {/* hero section */}
            <section className='flex justify-center w-full max-w-[2000px] mx-auto'>
                <div className='bg-[#F58634] text-white max-md:text-center text-left flex flex-col gap-y-4 justify-center max-md:items-center items-start py-4 p-2 !pl-5 xl:!pl-10 w-full md:w-[35%]'>
                    <h1 className='text-2xl md:text-2xl xl:text-3xl min-[1800px]:text-4xl max-md:tracking-wide   max-md:leading-[38px] xl:leading-[42px] min-[1800px]:leading-[50px] font-semibold'>
                        Crafting Your Success <br className='' /> Story: Professional Cover <br className='' /> Letter Services
                    </h1>
                    <p className='md:text-lg min-[1800px]:text-xl'>
                        Unlock Opportunities with Tailored Cover Letters <br className='max-[500px]:hidden md:max-[1400px]:hidden' /> That Speak Your Success
                    </p>
                </div>
                <img src={BgImage} alt="" loading='lazy' className='max-md:hidden w-[65%]' />
            </section>

            {/* section 2 */}
            <section className='flex flex-col max-lg:gap-y-5'>
                <h1 className='text-2xl xl:text-3xl font-bold bg-[#F58634] px-3 py-3'>
                    Unveiling the Power of Cover Letters: Why They're Essential for Your Success
                </h1>

                <div className="w-[90%] lg:w-[80%] xl:w-[70%] max-w-[1500px] flex flex-col gap-y-10 lg:gap-y-5 mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between gap-y-8 w-full lg:my-10 mb-8">
                        {/* Left part */}
                        <div className="w-full md:w-[80%] mx-auto lg:w-[55%] max-w-[600px]">
                            <p className="text-lg md:text-xl text-black leading-8 md:leading-[40px] lg:leading-10 tracking-[9%] md:word-spacing-15 mx-auto text-justify">
                                A cover letter serves as your personal introduction to potential employers, offering a platform beyond your resume to showcase your candidacy. It's pivotal in today's competitive job market for several reasons. Firstly, it allows you to elaborate on your achievements and experiences, providing context that may not be evident in your resume alone. Tailoring your cover letter to the specific role and company demonstrates your understanding of their needs, showcasing your fit for the position.
                            </p>
                        </div>

                        {/* Right part */}
                        <div
                            className="w-[85%] sm:w-[55%] md:w-[55%] mx-auto lg:w-[35%] flex flex-col gap-y-5 lg:gap-y-6 xl:gap-y-2 translate-y-[4%]"
                            style={{ fontFamily: "inter" }}
                        >
                            <h1 className="text-2xl md:text-3xl text-center font-semibold">
                                Cover Letter
                            </h1>

                            <form className="flex flex-col gap-4 text-center justify-evenly shadow-[4.0px_4.0px_4.0px_rgba(0,0,0,0.2)] border py-4 md:py-5 rounded-xl lg:rounded">
                                <div className="mt-2 p-3 bg-[#D9D9D9]">
                                    <p className="text-3xl font-medium md:text-4xl lg:text-3xl text-center">
                                        {" "}
                                        Rs. 1899/-
                                    </p>
                                    <em>(*Applicable Taxes may apply)</em>
                                </div>
                                <button className="text-xl sm:text-2xl text-white font-medium mx-auto px-4 py-2 flex justify-center items-center rounded-xl !bg-orange-500">
                                    Buy Now
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-10 lg:gap-y-16'>
                        <h1 className='border-[3px] border-[#00000033] w-fit mx-auto  text-2xl sm:text-3xl font-bold max-sm:px-3 sm:px-10 md:px-20 py-6 rounded-xl'>
                            Doledge Sample Cover Letters
                        </h1>
                        <div className='grid md:grid-cols-2 gap-x-24 gap-y-16 mx-auto p-5 shadow-[4.0px_8.0px_16px_rgba(0,0,0,0.20),-4.0px_-4.0px_16px_rgba(0,0,0,0.20)] border rounded max-[700px]:w-[90%] max-md:w-[80%]'>
                            <img src={resume1} alt="" loading='lazy' className='border' />
                            <img src={resume2} alt="" loading='lazy' className='border' />
                            <img src={resume3} alt="" loading='lazy' className='border' />
                            <img src={resume4} alt="" loading='lazy' className='border' />
                        </div>
                    </div>
                </div>
            </section>

            {/* section 3 */}
            <section className='flex flex-col gap-y-6 mt-4'>
                <h1 className='text-3xl font-bold bg-[#F58634] px-2 py-3'>
                    Unlock Opportunities with Tailored Cover Letters That Speak Your Success
                </h1>
                <div className='flex flex-col gap-y-6 sm:gap-y-12 w-[90%] lg:w-[70%] xl:w-[70%] mx-auto max-w-[1500px]'>
                    <h2 className='font-medium text-xl sm:text-2xl text-center w-[90%] mx-auto'>
                        In today's competitive job market, a compelling cover letter can be <br className='max-[1100px]:hidden' /> the key to unlocking career opportunities. Here's why
                    </h2>
                    <div className='flex justify-between items-center'>
                        {/* left */}
                        <div className='flex flex-col gap-y-4 sm:gap-y-8 w-[95%] max-lg:mx-auto lg:w-[50%]'>
                            <div className='flex items-center gap-x-5'>
                                <img src={icon} alt="" loading='lazy' className='h-6 w-6 md:w-9 md:h-9' />
                                <p className='text-lg leading-[35px] text-justify tracking-[3%] font-light'>
                                    It introduces you beyond your resume, showcasing your personality and passion for the role
                                </p>
                            </div>
                            <div className='flex items-center gap-x-5'>
                                <img src={icon} alt="" loading='lazy' className='h-6 w-6 md:w-9 md:h-9' />
                                <p className='text-lg leading-[35px] text-justify tracking-[3%] font-light'>
                                    Tailoring your cover letter to the specific role and company demonstrates your understanding of their needs and how you can fulfill them
                                </p>
                            </div>
                            <div className='flex items-center gap-x-5'>
                                <img src={icon} alt="" loading='lazy' className='h-6 w-6 md:w-9 md:h-9' />
                                <p className='text-lg leading-[35px] text-justify tracking-[3%] font-light'>
                                    Provides an opportunity to address any potential concerns or gaps in your resume proactively
                                </p>
                            </div>
                            <div className='flex items-center gap-x-5'>
                                <img src={icon} alt="" loading='lazy' className='h-6 w-6 md:w-9 md:h-9' />
                                <p className='text-lg leading-[35px] text-justify tracking-[3%] font-light'>
                                    Submitting a polished cover letter demonstrates professionalism and attention to detail, qualities valued by employers
                                </p>
                            </div>
                        </div>
                        {/* right */}
                        <img src={image1} alt="" loading='lazy' className='max-lg:hidden w-[45%] h-fit' />
                    </div>
                </div>
            </section>

            <Contactus />
            <Blog />
        </div>
    )
}

export default CoverLetter