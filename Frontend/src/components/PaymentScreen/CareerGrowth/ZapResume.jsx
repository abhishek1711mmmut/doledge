import React, {useState} from 'react'
import { FaAnglesRight } from "react-icons/fa6";
import image from '../../../images/zapResume.png'
import icon from '../../../images/zapIcon.png'
import Image from '../../../images/JobSearch1.png'
import Blog from '../../Blog';
import Footer from '../../Footer';

const ZapResume = () => {

    const [formData, setFormData]=useState({
        name:'',
        email:'',
        phoneNo:''
    })
    
    const {name, email, phoneNo}=formData;

    const handleOnChange = (e) => {
        if(e.target.type==="number" && e.target.value.length > e.target.maxLength){
            e.target.value=e.target.value.slice(0, e.target.maxLength)
        }
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
    }

    const submitContactFormData=(e)=>{
        e.preventDefault();
        console.log(formData)
        // write your code here
    }

    const handleBuyNow=()=>{
        // write your code here
    }

    // ZAP Your Resume Writing FAQ
    const zapYourResume=[
        {
            title:'What is the "Zap Your Resume" service?',
            content:'"Zap Your Resume" is a professional resume optimization service designed to modernize and enhance your resume, making it more appealing to employers'
        },
        {
            title:'How does the service work?',
            content:'The service involves a comprehensive review and refinement of your resume, focusing on modern formatting, keyword optimization, quantifiable achievements, and overall visual appeal. It aims to present your professional story in the best possible light.'
        },
        {
            title:'How long does the resume optimization process take?',
            content:'The duration can vary based on individual requirements and the complexity of the resume. Typically, the service aims to be efficient while ensuring a high-quality outcome.'
        },
        {
            title:'How long does the resume optimization process take?',
            content:'Yes, the service can tailor your resume for specific job applications, ensuring that it aligns with the requirements of the positions you are targeting.'
        }
    ]


  return (
    <div className='flex flex-col gap-5'>
        {/* hero section */}
        <div className='bg-[#2180ba] h-[300px] xl:h-[350px] flex flex-col xl:gap-y-16 justify-evenly xl:justify-center items-center text-center'>
            <h1 className='text-2xl md:text-4xl font-semibold lg:text-left' style={{fontFamily:'inter'}}>
                Ignite Success with a Resume that Speaks <br className='hidden md:block'/> Innovation and Impact!
            </h1>
            <h2 className='text-white text-xl md:text-3xl font-semibold' style={{fontFamily:'inter'}}>
                Unleash the Power of 'Zap Your Resume' Services
            </h2>
        </div>

        {/* Benefits for Zap Your Resume Service */}
        <div className='flex flex-col gap-4 xl:gap-5'>
            <h1 className='text-xl md:text-3xl xl:text-4xl font-semibold lg:font-bold bg-[#f58634] text-white max-[767px]:p-2 md:p-3 lg:py-5' style={{fontFamily:'inter'}}>
                Benefits for Zap Your Resume Service
            </h1>
            
            <div className='flex flex-col md:flex-row justify-between items-center shadow-[0px_12px_28px_0px_rgba(0,0,0,0.2),_0px_2px_4px_0px_rgba(0,0,0,0.1),_0px_0px_0px_1px_rgba(255,255,255,0.05)] inset-1 p-3 xl:p-4 w-[90%] mx-auto gap-8'>
                <ul className=' bg-[#E9EAEC] rounded-xl md:w-[50%] flex flex-col justify-center items-start gap-y-4 md:gap-y-6 xl:gap-y-8 text-lg md:text-xl xl:text-[28px] font-medium px-3 py-4 xl:px-6 xl:py-8' style={{fontFamily:'inter'}}>
                   <li className='flex justify-center items-center gap-x-5 text-left'>
                        <FaAnglesRight color='#f58634'/>
                        Modernized Professional Image
                   </li> 
                   <li className='flex justify-center items-center gap-x-5 text-left'>
                        <FaAnglesRight color='#f58634'/>
                        ATS Optimization
                   </li> 
                   <li className='flex justify-center items-center gap-x-5 text-left'>
                        <FaAnglesRight color='#f58634'/>
                        Quantifiable Achievements
                   </li> 
                   <li className='flex justify-center items-center gap-x-5 text-left'>
                        <FaAnglesRight color='#f58634'/>
                        Tech-Savvy Presentation
                   </li> 
                   <li className='flex justify-center items-center gap-x-5 text-left'>
                        <FaAnglesRight color='#f58634'/>
                        Increased Visibility
                   </li> 
                   <li className='flex justify-center items-center gap-x-5 text-left'>
                        <FaAnglesRight color='#f58634'/>
                        Strategic Keyword Integration
                   </li> 
                </ul>
                <div className='md:w-[50%] flex flex-col gap-y-6'>
                    <h1 className='text-2xl xl:text-3xl font-semibold' style={{fontFamily:'inter'}}>
                        Zap Your Resume Service
                    </h1>
                    <div className='grid grid-rows-3 border-2 rounded-lg w-full xl:w-[75%] mx-auto'>
                        <div className='bg-white'></div>
                        <div className='bg-[#D9D9D9] h-20 md:h-[88px] xl:h-24 grid place-content-center'>
                            <h1 className='text-2xl xl:text-3xl font-medium' style={{fontFamily:'inter'}}>
                                Rs. 5299/-
                            </h1>
                            <em>
                                (*Applicable Taxes may apply)
                            </em>
                        </div>
                        <div className='bg-white grid place-content-center'>
                            <button className='bg-[#F58634] text-white text-2xl xl:text-3xl font-semibold flex justify-center items-center px-3 md:px-4 py-1 rounded-xl mx-auto' style={{fontFamily:'inter'}} onClick={handleBuyNow}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <hr/>

        {/* Why ZAP Resume? */}
        <div className='flex flex-col gap-y-8 w-[90%] mx-auto'>
            <div className='flex flex-col gap-y-3 w-fit max-md:mx-auto'>
                <h1 className='text-2xl md:text-3xl xl:text-4xl font-bold text-left w-fit' style={{fontFamily:'inter'}}>
                    Why ZAP Resume?
                </h1>
                <hr className='h-[6px] bg-[#F58634] border-[#F58634] text-[#F58634] rounded-xl'/>
            </div>
            <div className='flex justify-between items-center'>
                <ul className='text-lg md:text-xl xl:text-3xl flex flex-col gap-y-5 text-left' style={{fontFamily:'inter'}}>
                    <li className='flex justify-start items-center gap-2'>
                        <img src={icon} alt="" className='h-10 w-10 md:h-14 md:w-14'/>
                        <p>
                            Time Efficiency and Professional Assistance
                        </p>
                    </li>
                    <li className='flex justify-start items-center gap-2'>
                        <img src={icon} alt="" className='h-10 w-10 md:h-14 md:w-14'/>
                        <p className=''>
                            Adaptation to Modern Standards
                        </p>
                    </li>
                    <li className='flex justify-start items-center gap-2'>
                        <img src={icon} alt="" className='h-10 w-10 md:h-14 md:w-14'/>
                        <p>
                            Career Confidence Boost
                        </p>
                    </li>
                    <li className='flex justify-start items-center gap-2'>
                        <img src={icon} alt="" className='h-10 w-10 md:h-14 md:w-14'/>
                        <p>
                            Enhanced Readability
                        </p>
                    </li>
                </ul>
                <div className='hidden md:block md:w-[30%]'>
                    <img src={image} alt="" loading='lazy' className='w-full h-full object-contain'/>
                </div>
            </div>
        </div>

        <hr />

        {/* ZAP Your Resume Writing FAQ */}
        <div className='flex flex-col gap-y-6 md:gap-y-10'>
            <h1 className='text-xl md:text-3xl xl:text-4xl max-[1023px]:p-1 lg:py-4 leading-[54px] font-semibold xl:font-bold bg-[#f58634] text-white' style={{fontFamily:'inter'}}>
                ZAP Your Resume Writing FAQ
            </h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 border w-[90%] md:w-[90%] mx-auto'>
            {
                zapYourResume.map((item, index)=>(
                    <div key={index} className='flex flex-col gap-y-4 md:gap-y-6 leading-10 md:leading-[54px] border text-left p-4' style={{fontFamily:'inter'}}>
                        <h1 className='text-2xl font-bold'>
                            {item.title}
                        </h1>
                        <p className='text-xl md:text-[22px] font-extralight tracking-wide md:tracking-widest'>
                            {item.content}
                        </p>
                    </div>
                ))
            }
            </div>
        </div>

        {/* Talk to our experts */}
        <div className='flex flex-col md:flex-row justify-evenly gap-2 my-5 w-[90%] mx-auto border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
                {/* left part - image */}
                <div className='p-3 w-full'>
                    <h1 className='font-inter font-semibold text-2xl'>
                        Talk to our experts
                    </h1>
                    <img src={Image} alt="" className='hidden md:block mx-auto'/>
                </div>
                {/* right part - form input */}
                <div className='flex flex-col justify-evenly items-center w-full p-3 gap-y-4 md:gap-2'>
                    <div className='flex flex-col justify-center items-center lg:items-start'>
                        <h1 className='font-inter font-semibold text-2xl text-left md:text-center'>
                            Contact Us
                        </h1>
                        <p className='text-lg md:text-base lg:text-xl font-light' style={{fontFamily:'inter'}}>
                            Our executive will contact your shortly
                        </p>
                    </div>
                    <form onSubmit={submitContactFormData} className='flex flex-col gap-2 w-full sm:w-[90%] md:w-[80%]'>
                        <div className='flex flex-col items-start gap-2'>
                            <label htmlFor="name" className='font-inter font-semibold max-[500px]:text-xl text-2xl'>
                                Name
                            </label>
                            <input 
                                type="text"
                                name='name'
                                value={name}
                                onChange={handleOnChange}
                                placeholder='Enter your name here'
                                required
                                className='px-4 py-2 outline-none border-2 rounded-lg w-full'
                            />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <label htmlFor="email" className='font-inter font-semibold  max-[500px]:text-xl text-2xl'>
                                Email Id
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder='Enter your email here'
                                required
                                className='px-4 py-2 outline-none border-2 rounded-lg w-full'
                            />
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <label htmlFor="phoneNo" className='font-inter font-semibold  max-[500px]:text-xl text-2xl'>
                                Phone Number
                            </label>
                            <div className='flex justify-center items-center gap-2 w-full'>
                                <p className='p-2 border-2 rounded-lg'>
                                    +91
                                </p>
                                <input 
                                    type="number" 
                                    name="phoneNo"
                                    maxLength={10}
                                    value={phoneNo}
                                    onChange={handleOnChange}
                                    placeholder='Enter your phone number'
                                    required
                                    className='px-4 py-2 outline-none border-2 rounded-lg w-full hide-arrow'
                                />
                            </div>
                        </div>
                        <button type="submit" className='!bg-[#F58634] text-white py-2 mt-3 rounded-xl font-inter font-semibold text-lg flex justify-center items-center mx-auto w-[70%]'>
                            Call Me Back
                        </button>
                    </form>
                </div>
        </div>

        {/* Bolg */}
        <Blog/>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default ZapResume