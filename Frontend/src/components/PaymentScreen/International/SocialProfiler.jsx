import React from 'react'
import ResumeHighlighter from './../../../images/ResumeHighlight.jpg'
import image2 from '../../../images/SocialProfiler.png'
import bulleticon from '../../../images/bullet.png'
import Contactus from '../../Contactus'
import Blog from '../../Blog'
import Footer from '../../Footer'

const SocialProfiler = () => {
    return (
        <div>
            {/* hero section */}
            <div className='flex flex-col lg:flex-row h-full lg:max-h-[650px]'>
                {/* left part */}
                <div className='hidden sm:block w-full h-[300px] lg:h-auto lg:w-[45%]'>
                    <img src='https://s3-alpha-sig.figma.com/img/6c15/ee14/8345efc3b69ab528d5dc7f6862b8e6cd?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FKYKUMQ3pqcw~cw841L4gSRr4GYMIUKCDmtdW~u1yZVoY3wHzWiTD1F7Tc~K9RErJVw44YrwpIinIzl86FJViIWwOTjngan~r6sBGrXMaTUdnE9vnobtHksp2pkoHr17NE1bUWGxTqwPWNxkR0zdd~qqWbGfibm1wxrUPV~DvGvb-ljskEyBFuFFitVx619xxowBLeWHX176nep9KNHLccHt~B8-plAn8GxBoa9HaNRuy8LVkrrk45GlI3084DrebYl4UbSWAOtx-lfdDgG18xTWxSo~KmZuayi1FFcniXn8FgSibiv6Aktwui~3NUdkyngu52odcXsNDtPscfTNOQ__' alt="" className='h-full w-full object-fill' loading='lazy' />
                </div>
                {/* right part */}
                <div className='font-semibold bg-[#4B57A3] flex flex-col gap-4 md:gap-y-8 justify-center lg:text-left h-full py-10 pb-16 lg:h-auto w-full lg:w-[55%]'>
                    <div className='text-4xl text-white sm:text-5xl leading-[50px] sm:leading-[75px] px-6 sm:px-12'>
                        Transform Your Presence with <br /> Our Social Profiler Service
                    </div>




                    <p className='text-xl sm:text-3xl text-[#F58634] px-5 sm:px-12 tracking-2px leading-30px sm:leading-10'>
                        Uncover, Amplify, Succeed!
                    </p>


                </div>
            </div>



            {/*  Second Section  */}

            <div className="p-1 mt-4">
                <div className="flex flex-col lg:flex-row gap-y-5 w-full lg:my-10 mb-8">

                    {/* Left part */}
                    <div className="w-full xl:w-[60%] flex flex-col gap-y-10 xl:gap-y-4 py-5 xl:p-7">
                        <p className="font-medium text-xl sm:text-3xl md:text-4xl text-black md:leading-10 tracking-[2px] text-start items-center px-3 md:px-5">
                            Unlock Success with Social Profiles:
                        </p>

                        <p className="text-lg md:text-xl lg:text-2xl text-start text-black leading-8 lg:leading-10 tracking-wider lg:tracking-widest lg:p-2 md:word-spacing-15 px-3 md:px-5 mx-auto">
                            A social profile service is vital for shaping a positive online image, influencing career prospects, and networking. Professionally managed profiles on social media enhance your reputation, presenting individuals and businesses in the best light for success in today's digital landscape.
                        </p>
                    </div>

                    {/* Right part */}
                    <div className="w-[85%] sm:w-[55%] mx-auto lg:w-[27%] flex flex-col gap-y-5 lg:gap-y-2">
                        <h1 className="text-2xl md:text-4xl lg:text-3xl text-center">
                            Social Profiler Service
                        </h1>

                        <form className="flex flex-col gap-4 text-center justify-evenly text-base sm:text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 md:py-5 rounded-xl lg:rounded-none">
                            <div className="mt-3 mb-3 p-4 bg-[#D9D9D9]">
                                <p className="text-3xl font-medium md:text-4xl lg:text-3xl text-center">
                                    {" "}
                                    Rs. 12999/-
                                </p>
                                <p>(*Applicable Taxes may apply)</p>
                            </div>
                            <button className="text-xl sm:text-3xl text-white w-[60%] font-medium mx-auto px-4 py-2 flex justify-center items-center rounded-xl !bg-orange-500">
                                Buy Now
                            </button>
                        </form>
                    </div>

                </div>
            </div>


            {/* Third Section */}

            <h1 className='font-semibold text-3xl leading-[70px] p-2 bg-[#F58634]'>
                Unlocking Success with Social Profiler
            </h1>









            {/* fourth Section*/}







            <div className='flex flex-col justify-center items-center mt-2 gap-y-6 w-[90%] mx-auto mb-6'>
                {/* <h1 className='font-medium text-3xl leading-[53px] self-start'>
                    Document Verification Services FAQs: Your Questions Answered
                </h1> */}
                <div className='flex justify-between items-center'>
                    <div className='w-[35%]'>
                        <img src={image2} alt="" className='w-[90%] object-contain mx-auto' />
                    </div>
                    <div className='flex flex-col gap-y-5 w-[60%]'>
                        <div className='text-justify'>
                            <h2 className='text-2xl leading-[53px]'>
                                Professional Image
                            </h2>
                            <p className='text-lg font-light leading-[41px]'>
                                Craft a polished and professional online presence
                            </p>
                        </div>
                        <div className='text-justify'>
                            <h2 className='text-2xl leading-[53px]'>
                                Career Opportunities
                            </h2>
                            <p className='text-lg font-light leading-[41px]'>
                                Enhance visibility for improved job prospects and networking
                            </p>
                        </div>
                        <div className='text-justify'>
                            <h2 className='text-2xl leading-[53px]'>
                                Networking Advantage
                            </h2>
                            <p className='text-lg font-light leading-[41px]'>
                                Facilitate effective networking by showcasing skills and achievements
                            </p>
                        </div>
                        <div className='text-justify'>
                            <h2 className='text-2xl leading-[53px]'>
                                Visibility in Searches
                            </h2>
                            <p className='text-lg font-light leading-[41px]'>
                                Increase visibility in online searches, making it easier for others to find and connect with you
                            </p>
                        </div>
                    </div>
                </div>
            </div>





            {/* FIfth Section Points */}
            <div className='flex flex-col justify-center items-center mt-2 mt-10'>
                <h1 className='font-medium text-3xl leading-[53px]'>
                    Unlocking Your Digital Potential: How Our Social Profiler Service Works
                </h1>
           

            {/* <div className="flex justify-center"> */}
                <div className="flex justify-center align-center w-[90%]">
                <div className='mt-2 ml-6 p-6 bg-white rounded-lg shadow-lg'>
    {/* //              style={{  */}
    {/* //    boxShadow: '9px 11px 14px -8px rgba(245, 134, 52, 0.71)' */}
    {/* // }}> */}
            
    
                        <div className='flex items-start mb-4'>
                            <div className='w-6 h-6 mr-4'>
                                <img src={bulleticon} alt="" />
                            </div>
                            <p className='text-lg text-gray-800 font-medium'>Begin with a personalized consultation to understand your goals, target audience, and desired online image.</p>
                        </div>

                        <div className='flex mb-4'>
                            <div className='w-6 h-6 mr-3'>
                                <img src={bulleticon} alt="" />
                            </div>
                            <p className='self-start text-lg text-gray-800 font-medium'>Conduct a comprehensive audit of your existing social media profiles to identify strengths, weaknesses, and areas for improvement.</p>
                        </div>

                        <div className='flex mb-4'>
                            <div className='w-6 h-6 mr-3'>
                                <img src={bulleticon} alt="" />
                            </div>
                            <p className='self-start text-lg text-gray-800 font-medium'>Evaluate the quality and relevance of your existing content, providing recommendations for improvement.</p>
                        </div>


                        <div className='flex mb-4'>
                            <div className='w-6 h-6 mr-3'>
                                <img src={bulleticon} alt="" />
                            </div>
                            <p className='self-start text-lg text-gray-800 font-medium'>Align your social media presence with your personal or professional brand, ensuring a cohesive and impactful image.</p>
                        </div>


                        <div className='flex mb-4'>
                            <div className='w-6 h-6 mr-3'>
                                <img src={bulleticon} alt="" />
                            </div>
                            <p className='self-start text-lg text-gray-800 font-medium'>Develop a strategy for engaging with your target audience, fostering meaningful connections and interactions.</p>
                        </div>




                        <div className='flex mb-4'>
                            <div className='w-6 h-6 mr-3'>
                                <img src={bulleticon} alt="" />
                            </div>
                            <p className='self-start text-lg text-gray-800 font-medium'>Generate compelling and relevant content to enhance your profile, including bio, posts, and visual elements.</p>
                        </div>




                        <div className='flex mb-4'>
                            <div className='w-6 h-6 mr-3'>
                                <img src={bulleticon} alt="" />
                            </div>
                            <p className='self-start text-lg text-gray-800 font-medium'>Implement strategies to manage and enhance your online reputation, addressing any negative content or misinformation.</p>
                        </div>



                        <div className='flex mb-4'>
                            <div className='w-6 h-6 mr-3'>
                                <img src={bulleticon} alt="" />
                            </div>
                            <p className='self-start text-lg text-gray-800 font-medium'>Regularly provide insights and analytics on the performance of your social media profiles, enabling informed decisions</p>
                        </div>













                     
                    </div>
                </div>

            </div>

            {/* Contacts */}

            <Contactus/>
            <Blog/>
            <Footer/>











        </div>
    )
}


export default SocialProfiler




