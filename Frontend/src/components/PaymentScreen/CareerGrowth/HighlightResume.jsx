import React, { useState } from 'react'
import ResumeHighlighter from '../../../images/ResumeHighlight.jpg'
import image1 from '../../../images/Vector1.jpg'
import image2 from '../../../images/Vector2.jpg'
import image3 from '../../../images/Vector3.jpg'
import image4 from '../../../images/Vector4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import Image1 from '../../../images/HighlightImage.png'
import Image2 from '../../../images/HighlightImageS4Img2.png'
import Image3 from '../../../images/HighlightSection5.png'
import Image4 from '../../../images/HighlightTip1.png'
import Image5 from '../../../images/HighlightTip2.png'
import Image6 from '../../../images/HighlightTip3.png'
import Blog from '../../Blog'
import Footer from '../../Footer'
import Contactus from '../../Contactus'

const HighlightResume = () => {

    const [price, setPrice] = useState();

    const handleRadioChange=(e)=>{
        setPrice(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(e.target.buyPackage.value)
        console.log('Package price', price);
    }

    return (
        <div>
            {/* hero section */}
            <div className='flex flex-col lg:flex-row h-full lg:max-h-[450px] max-w-[1600px] mx-auto'>
                {/* left part */}
                <div className='hidden sm:block w-full h-[300px] lg:h-auto lg:w-[47%]'>
                    <img src={ResumeHighlighter} alt="" className='h-full w-full object-fill' loading='lazy'/>
                </div>
                {/* right part */}
                <div className='font-bold bg-[#F58634] flex flex-col gap-4 md:gap-y-8 justify-center lg:text-left h-full py-10 pb-16 lg:h-auto w-full lg:w-[53%]'>
                    <h1 className='text-4xl sm:text-5xl leading-[50px] sm:leading-[75px] px-6 sm:px-12'>
                        Highlight Your Profile
                    </h1>
                    <p className='text-xl sm:text-2xl text-white px-[5px] sm:px-12 tracking-[2px] leading-[30px] sm:leading-10'>
                        Illuminate Your Potential: Unleashing Success <br /> Through Profile Highlighter Services
                    </p>
                </div>
            </div>

            {/* Key Features of a Profile Highlighter service */}
            <div className='flex flex-col gap-y-3 w-full lg:w-[70%] max-w-[1500px] mx-auto lg:my-10'>
                <div className='w-full hidden lg:flex gap-x-5'>
                    <div className='w-[70%]'></div>
                    <div className='w-[30%] text-3xl md:text-4xl lg:text-3xl text-center' style={{fontFamily:'inter'}}>
                        Buy Package
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 mb-10'>
                    {/* left part */}
                    <div className='w-full lg:w-[70%] flex flex-col gap-y-10'>
                        <div className='bg-[#4B57A3] px-2 py-4'>
                            <h1 className='text-white text-2xl sm:text-3xl md:text-4xl font-semibold'>
                                Key Features of a Profile Highlighter service
                            </h1>
                        </div>
                        <div className='grid grid-cols-2 gap-y-9 lg:grid-cols-4'>
                            <div className='flex flex-col justify-center items-center gap-y-5 lg:gap-y-2 w-[80%] sm:w-full mx-auto'>
                                <img src={image1} alt="" />
                                <p className='text-center'>
                                    Professional Endorsements
                                </p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-y-5 lg:gap-y-2 w-[80%] sm:w-full mx-auto'>
                                <img src={image2} alt="" />
                                <p>
                                    Skill Spotlight
                                </p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-y-5 lg:gap-y-2 w-[80%] sm:w-full mx-auto'>
                                <img src={image3} alt="" />
                                <p>
                                    Professional Guidance
                                </p>
                            </div>
                            <div className='flex flex-col justify-center items-center gap-y-5 lg:gap-y-2 w-[80%] sm:w-full mx-auto'>
                                <img src={image4} alt="" />
                                <p>
                                    Networking Opportunities
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* right part - buy package */}
                    <div className='w-[70%] sm:w-[50%] lg:w-[30%] mx-auto flex flex-col gap-y-5 lg:gap-y-2'>
                        <h1 className='text-3xl md:text-4xl lg:text-3xl text-center block lg:hidden'>
                            Buy Package
                        </h1>
                        <form className='flex flex-col gap-4 text-center justify-evenly text-base sm:text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 md:py-5 rounded-xl lg:rounded-none'>
                            <div className='flex items-center gap-x-3 sm:gap-x-6 '>
                                <input 
                                    type="radio" 
                                    name="buyPackage" 
                                    id="2month" 
                                    value={899} 
                                    onChange={handleRadioChange}
                                    checked={price==='899'}
                                    className='w-5 h-5 ml-[15%] sm:ml-[20%] lg:ml-8 2xl:ml-12 cursor-pointer'/>
                                <label htmlFor="2month" className='cursor-pointer'>
                                    2 Months - Rs. 899
                                </label>
                            </div>
                            <div className='flex items-center gap-x-3 sm:gap-x-6'>
                                <input 
                                    type="radio" 
                                    name="buyPackage" 
                                    id="4month" 
                                    value={1699} 
                                    onChange={handleRadioChange}
                                    checked={price==='1699'}
                                    className='w-5 h-5 ml-[15%] sm:ml-[20%] lg:ml-8 2xl:ml-12 cursor-pointer'/>
                                <label htmlFor="4month" className='cursor-pointer'>
                                    4 Months - Rs. 1699
                                </label>
                            </div>
                            <div className='flex items-center gap-x-3 sm:gap-x-6'>
                                <input 
                                    type="radio" 
                                    name="buyPackage" 
                                    id="8month" 
                                    value={3599} 
                                    onChange={handleRadioChange}
                                    checked={price==='3599'}
                                    className='w-5 h-5 ml-[15%] sm:ml-[20%] lg:ml-8 2xl:ml-12 cursor-pointer'/>
                                <label htmlFor="8month" className='cursor-pointer'>
                                    8 Months - Rs. 3599
                                </label>
                            </div>
                            <button onClick={handleSubmit} className='text-xl sm:text-2xl text-white w-[70%] font-semibold mx-auto px-4 py-2 flex justify-center items-center rounded-xl !bg-orange-500'>
                                Buy Now
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>

            {/* Your profile might go unnoticed in recruiter searches for the following reasons: */}
            <div className='bg-[#F6F6F8] py-5'>
                <h1 className='text-2xl lg:text-3xl text-center px-2 lg:w-[70%] max-w-[1500px] mx-auto'>
                    Your profile might go unnoticed in recruiter searches for the following reasons:
                </h1>
                <div className='flex lg:gap-x-14 xl:gap-x-20 w-[90%] lg:w-[70%] max-w-[1500px] mx-auto justify-center items-center mt-6 lg:mt-4 xl:mt-0'>
                    <div className='hidden md:block md:w-[30%]'>
                        <img src={Image1} alt="" className='md:w-[90%] lg:w-[120%] max-w-[400px] h-auto object-contain'/>
                    </div>
                    <div className='font-light text-[13px] sm:text-sm lg:text-lg xl:text-xl w-[90%] md:w-[90%] xl:w-[70%] flex flex-col justify-evenly items-start gap-3 md:gap-5 lg:gap-y-8 lg:h-[220px] xl:h-[300px]'>
                        <p className='text-justify mx-auto'> 
                                <FontAwesomeIcon icon={faCircle} style={{ color: "#F58634" }} className='mr-5' />
                                If your profile doesn't include the keywords commonly used in your industry or specific to the roles you are targeting, it may not appear in recruiter searches
                            </p>
                            <p className='text-justify'> 
                                <FontAwesomeIcon icon={faCircle} style={{ color: "#F58634" }} className='mr-5' />
                                Recruiters are more likely to overlook profiles that lack comprehensive details about your skills, experiences, and achievements. Keeping your profile up-to-date is crucial for visibility.
                            </p>
                            <p className='text-justify'> 
                                <FontAwesomeIcon icon={faCircle} style={{ color: "#F58634" }} className='mr-5' />
                                A smaller professional network and a lack of endorsements or recommendations can contribute to your profile going unnoticed
                            </p>
                    </div>
                </div>
            </div>

            {/* The benefits you gain from a Profile Highlighter service include */}
            <section>
                <div className='bg-[#F6F6F8] mt-5'>
                    <h1 className='bg-[#F58634] font-medium text-lg sm:text-xl md:text-2xl px-1 sm:leading-10 py-2 sm:h-12 md:h-16 flex justify-center items-center'>
                        The benefits you gain from a Profile Highlighter service include
                    </h1>
                    <div className='flex gap-x-5 w-[90%] justify-center items-center lg:w-[70%] max-w-[1500px] mx-auto py-4'>
                        <div className='hidden md:block w-[30%]'>
                            <img src={Image2} alt="" className='w-full max-w-[400px] h-auto'/>
                        </div>
                        <div className='font-light text-[13px] sm:text-sm lg:text-lg xl:text-xl w-[90%] md:w-[90%] xl:w-[70%] flex flex-col justify-evenly items-start gap-3 md:gap-5 lg:gap-y-8 lg:h-[220px] xl:h-[300px]'>
                            <p className='text-justify'>
                                <FontAwesomeIcon icon={faSquareCheck} style={{color: "#24e544"}} className='mr-5'/>
                                Increases the visibility of your profile in recruiter searches and on professional networks.
                            </p>
                            <p className='text-justify'>
                                <FontAwesomeIcon icon={faSquareCheck} style={{color: "#24e544"}} className='mr-5'/>
                                Making it stand out and capturing the attention of recruiters and hiring managers.
                            </p>
                            <p className='text-justify'>
                                <FontAwesomeIcon icon={faSquareCheck} style={{color: "#24e544"}} className='mr-5'/>
                                Provide expert guidance on optimizing your profile for specific industries or roles
                            </p>
                            <p className='text-justify'>
                                <FontAwesomeIcon icon={faSquareCheck} style={{color: "#24e544"}} className='mr-5'/>
                                Provide expert guidance on optimizing your profile for specific industries or roles
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* how your profile look to recruiter - image */}
            <div className='lg:w-[70%] max-w-[1500px] mx-auto'>
                <img src={Image3} alt="" className='w-full mx-auto p-5 pt-2 pb-4'/>
            </div>

            {/* To get the best out of a Profile Highlighter service, consider the following tips */}
            <div className='bg-[#F8F8F8] flex flex-col gap-5 w-[90%] lg:w-[70%] max-w-[1500px] mx-auto p-4 px-2 rounded-2xl'>
                <h1 className='xl:text-[26px] lg:text-2xl md:text-xl sm:text-base text-center'>
                    To get the best out of a Profile Highlighter service, consider the following tips
                </h1>
                <div className='flex flex-col md:flex-row gap-5 justify-around items-center text-base font-light font-inter'>
                    <div className='flex flex-col gap-3 place-items-center w-[60%] lg:w-[50%] md:max-w-[20%] lg:p-4 md:p-0 rounded-xl'>
                        <img src={Image4} alt="" />
                        <p>
                            Keep your profile up-to-date with your latest experiences, skills, and achievements.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 place-items-center w-[50%] md:max-w-[20%]  lg:p-4 md:p-0 rounded-xl'>
                        <img src={Image5} alt="" />
                        <p>
                            Provide comprehensive information about your skills, experiences, and achievements
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 place-items-center w-[50%] md:max-w-[20%]  lg:p-4 md:p-0 rounded-xl'>
                        <img src={Image6} alt="" />
                        <p>
                            Highlight your key accomplishments and successes
                        </p>
                    </div>
                </div>
            </div>

            {/* Talk to our experts */}
            <Contactus/>
            
            {/* Blog */}
            {/* <Blog/> */}

            {/* Footer */}
            {/* <Footer/> */}
        </div>
      )
}

export default HighlightResume