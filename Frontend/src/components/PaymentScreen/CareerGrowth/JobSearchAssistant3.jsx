import React, { useState } from 'react'
import Image2 from '../../../images/JobSearch2.png'
import Image3 from '../../../images/JobSearch3.png'
import Image4 from '../../../images/JobSearch4.png'
import Icon from '../../../images/JobCheckIcon.png'
import Icon1 from '../../../images/JobIcon1.png'
import Icon2 from '../../../images/JobIcon2.png'
import Icon3 from '../../../images/JobIcon3.png'
import Arrow1 from '../../../images/JobArrow1.png'
import Arrow2 from '../../../images/JobArrow2.png'
import Arrow3 from '../../../images/JobArrow3.png'
import Arrow4 from '../../../images/JobArrow4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import Blog from '../../Blog'
import Footer from '../../Footer'
import Contactus from '../../Contactus'

const JobSearchAssistant3 = () => {

    const [price, setPrice] = useState(0);

    const handleCheckBoxChange=(e)=>{
        e.target.checked ? setPrice((prev)=>(prev + parseInt(e.target.value))) : setPrice((prev)=>(prev - parseInt(e.target.value)));
    }

    const handlePriceAssistant=()=>{
        console.log('price', price)
    }




  return (
    <div>
        {/* Hero section */}
        <div className="relative bg-[url('./images/bgJobSearch.png')] bg-cover max-[300px]:h-[350px] h-[300px] md:h-[400px] xl:h-[430px]">
           <div className='flex justify-around items-center mx-auto pt-3 max-w-[1500px]'>
                <div className='flex flex-col justify-center items-center gap-y-4 md:gap-y-8 w-[90%] md:w-[40%]'>
                    <h1 className='font-medium text-2xl sm:text-3xl md:text-3xl lg:text-[34px] xl:text-[38px] lg:leading-[40px] xl:leading-[43px] tracking-wider'>
                        Job Search Assistant
                    </h1>
                    <p className='font-medium text-lg sm:text-xl md:text-lg lg:text-xl lg:leading-[30px] xl:text-[24px] xl:leading-[43px] tracking-[3px]'>
                        Unlock Your Career Potential with Our Expert Job Search Services
                    </p>
                </div>
                <div className='hidden md:block max-w-[28%]'>
                    <img src={Image4} alt="" className='mix-blend-darken w-full h-full object-contain'/>
                </div>
           </div>

           {/* Benefits of Doledge Job Search Assistant Services - div to be overlaped */}
           <div className='absolute left-[50%] -translate-x-[50%] top-[55%] md:top-[60%] lg:top-[72%] bg-white w-[85%] xl:w-[70%] max-w-[1500px] mx-auto py-4 sm:py-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col gap-y-8'>
            <h1 className='font-semibold text-base p-1 px-2 md:p-2 md: md:text-xl md:leading-[43px] bg-[#F58634] w-[90%] sm:w-[85%] md:w-[80%] mx-auto rounded-xl'>
                Benefits of Doledge Job Search Assistant Services
            </h1>
            <div className='flex flex-col md:flex-row justify-around items-center gap-y-4 md:gap-y-0 md:pt-3'>
                {/* left part */}
                <div className='flex flex-col justify-start items-center gap-4 w-[90%] md:w-[55%]'>
                    <div className='flex justify-start items-center gap-3 lg:gap-4 w-full'>
                        <div className='w-12'>
                            <img src={Icon1} alt="" className='w-full h-full object-contain'/>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-1 md:text-lg lg:text-xl xl:text-2xl lg:leading-[43px]'>
                            <h1 className='text-left w-full font-medium'>
                                Smart Job Matching
                            </h1>
                            <p className='lg:text-lg xl:text-xl xl:leading-[43px] text-justify'>
                                Effortlessly find the perfect job match through advanced algorithms and personalized criteria
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-3 lg:gap-4 w-full'>
                        <div className='w-12'>
                            <img src={Icon2} alt="" className='w-full h-full object-contain'/>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-1 md:text-lg lg:text-xl xl:text-2xl lg:leading-[43px]'>
                            <h1 className='text-left w-full font-medium'>
                                Networking Opportunities
                            </h1>
                            <p className='lg:text-lg xl:text-xl xl:leading-[43px] text-justify'>
                                Expand your professional network with curated connections and networking events
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-3 lg:gap-4 w-full'>
                        <div className='w-12'>
                            <img src={Icon3} alt="" className='w-full h-full object-contain'/>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-1 md:text-lg lg:text-xl xl:text-2xl lg:leading-[43px]'>
                            <h1 className='text-left w-full font-medium'>
                                Career Guidance
                            </h1>
                            <p className='lg:text-lg xl:text-xl xl:leading-[43px] text-justify'>
                                Access expert advice and resources for strategic career planning and development
                            </p>
                        </div>
                    </div>
                </div>

                {/* buy now checkbox */}
                <div className='w-[70%] sm:w-[55%] md:w-[30%] flex flex-col gap-3 md:gap-4'>
                    <h1 className='font-medium text-base pr-5 sm:pr-0 mx-auto sm:text-2xl md:text-base lg:text-xl xl:text-2xl xl:leading-[43px] w-52 break-words sm:w-full'>
                        Job Search Assistant Service
                    </h1>
                    <div className='flex flex-col items-start justify-center gap-y-2 sm:gap-y-3 md:gap-y-2 xl:gap-y-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-xl:p-3 max-xl:py-4 xl:px-4 xl:py-8 rounded-lg'>
                        <div className='flex justify-start items-center gap-x-1 sm:gap-x-8 md:gap-x-4 lg:gap-x-8 sm:ml-3 md:ml-0 lg:ml-2 xl:ml-5 max-[500px]:p-1 max-[500px]:gap-x-3'>
                            <input type="checkbox" name="input1" id="input1" value="8999" onChange={handleCheckBoxChange} className='lg:w-5 lg:h-5 md:h-4 md:w-4 sm:w-5 sm:h-5 cursor-pointer'/>
                            <label htmlFor="input1" className='text-xs sm:text-lg md:text-base lg:text-lg xl:text-xl text-left lg:font-medium lg:leading-[43px] cursor-pointer'>3 Months Rs. 8999/-</label>
                        </div>
                        <div className='flex justify-start items-center gap-x-1 sm:gap-x-8 md:gap-x-4 lg:gap-x-8 sm:ml-3 md:ml-0 lg:ml-2 xl:ml-5 max-[500px]:p-1 max-[500px]:gap-x-3'>
                            <input type="checkbox" name="input2" id="input2" value="17999" onChange={handleCheckBoxChange} className='lg:w-5 lg:h-5 md:h-4 md:w-4 sm:w-5 sm:h-5 cursor-pointer'/>
                            <label htmlFor="input2" className='text-xs sm:text-lg md:text-base lg:text-lg xl:text-xl text-left lg:font-medium lg:leading-[43px] cursor-pointer'>6 Months Rs. 17999/-</label>
                        </div>
                        <div className='flex justify-start items-center gap-x-1 sm:gap-x-8 md:gap-x-4 lg:gap-x-8 sm:ml-3 md:ml-0 lg:ml-2 xl:ml-5 max-[500px]:p-1 max-[500px]:gap-x-3'>
                            <input type="checkbox" name="input3" id="input3" value="28999" onChange={handleCheckBoxChange} className='lg:w-5 lg:h-5 md:h-4 md:w-4 sm:w-5 sm:h-5 cursor-pointer'/>
                            <label htmlFor="input3" className='text-xs sm:text-lg md:text-base lg:text-lg xl:text-xl text-left lg:font-medium lg:leading-[43px] cursor-pointer'>12 Months Rs. 28999/-</label>
                        </div>
                        <em className='self-center md:text-base text-xs'>
                            (*Applicable Taxes may apply)
                        </em>
                    </div>
                    <button className='bg-[#F58634] font-semibold  md:text-lg lg:text-2xl leading-[38px] text-[#FFF8F8] flex justify-center items-center px-3 md:py-1 rounded-xl mx-auto' onClick={handlePriceAssistant}>
                        Buy Now
                    </button>
                </div>
            </div>
           </div>
        </div>
        <div className='bg-white max-[300px]:h-[800px] max-[550px]:h-[650px] h-[800px] sm:h-[600px] md:h-[400px] xl:h-[500px]'></div>

        {/* Benefits of Doledge Job Search Assistant Services */}
        <div>
            <div className='lg:max-[1372px]:mt-8'>
                <h1 className='bg-[#62B01E9C] font-semibold sm:text-lg md:text-2xl lg:text-3xl py-3'>
                    Benefits of Doledge Job Search Assistant Services
                </h1>

                {/* table */}
                <table className="table table-bordered table-striped table-auto !w-[85%] md:!w-[70%] max-w-[1500px] mx-auto my-10">
                    <thead >
                        <tr>  
                            <th scope="col" className="text-center !bg-[#4472c4] !text-white">Benefits</th>
                            <th scope="col" className="text-center !bg-[#4472c4] !text-white">Free Service</th>
                            <th scope="col" className="text-center !bg-[#4472c4] !text-white">Paid Service</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className='benefit' >Premium Job Matches</td>
                            <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                            <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' /></td>
                        </tr>
                        <tr className="">
                            <td className=''>Advanced Resume Optimisation</td>
                            <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                            <td className='text-center sm:px-5'>
                            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                            </td>
                        </tr>
                        <tr className="">
                            <td className=''>Personal Career Coach</td>
                            <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                            <td className='text-center sm:px-5'>
                            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                            </td>
                        </tr>

                        <tr className="">

                            <td className=''>Detailed Industry Reports</td>
                            <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                            <td className='text-center sm:px-5'>
                            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                            </td>
                        </tr>

                        <tr className="">

                            <td className=''>Enhanced networking Oppurtunities</td>
                            <td className='text-center sm:px-5'>
                            <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' />
                            </td>
                            <td className='text-center sm:px-5'>
                            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                            </td>
                        </tr>

                        <tr className="">

                            <td className=''>Priority Application Processing</td>
                            <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                            <td className='text-center sm:px-5'>
                            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Why Job Search Assistant services is important? */}
            <div className='flex flex-col gap-6 mt-20'>

                <h1 className='font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl' style={{fontFamily:'inter'}}>
                    Why Job Search Assistant services is important?
                </h1>

                <hr className='h-[2px] bg-black/30'/>

                <div className='flex justify-around items-center w-[90%] md:w-[70%] max-w-[1500px] mx-auto'>
                    <div className='flex flex-col justify-center items-start gap-y-8 font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] leading-[35px] w-[90%] md:w-[65%]'>
                        <div className='flex justify-start items-center gap-x-6 text-justify' style={{fontFamily:'poppins'}}>
                            <img src={Icon} alt="" className='h-8 w-8'/>
                            <p>
                                Streamlines the job search process, saving time and effort for job seekers
                            </p>
                        </div>
                        <div className='flex justify-start items-center gap-x-6 text-justify' style={{fontFamily:'poppins'}}>
                            <img src={Icon} alt="" className='h-8 w-8'/>
                            <p>
                                Provides tailored job recommendations based on individual skills, preferences, and career goals
                            </p>
                        </div>
                        <div className='flex justify-start items-center gap-x-6 text-justify' style={{fontFamily:'poppins'}}>
                            <img src={Icon} alt="" className='h-8 w-8'/>
                            <p>
                                Offers valuable insights into industry trends, market demands, and specific job market dynamics
                            </p>
                        </div>
                        <div className='flex justify-start items-center gap-x-6 text-justify' style={{fontFamily:'poppins'}}>
                            <img src={Icon} alt="" className='h-8 w-8'/>
                            <p>
                                Assists in interview preparation, enhancing candidates' confidence and performance during job interviews
                            </p>
                        </div>
                        <div className='flex justify-start items-center gap-x-6 text-justify' style={{fontFamily:'poppins'}}>
                            <img src={Icon} alt="" className='h-8 w-8'/>
                            <p>
                                Facilitates networking opportunities, connecting job seekers with industry professionals and potential employers
                            </p>
                        </div>
                    </div>
                    <div className='hidden md:block w-[30%]'>
                        <img src={Image3} alt="" className='h-full w-full object-contain'/>
                    </div>
                </div>

                <hr className='h-[2px] bg-black/30'/>

                {/* HOW JOB SEARCH ASSISTANT HELPS  */}
                <div className='my-3 flex flex-col justify-center items-center gap-y-4'>
                    <h1 className='bg-[#62B01E9C] font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl py-3 w-full'>
                        HOW JOB SEARCH ASSISTANT HELPS 
                    </h1>
                    <div className='flex justify-between items-center py-8 w-[90%] md:w-[70%] max-w-[1500px] mx-auto'>
                        <div className='hidden md:block w-[30%]'>
                            <img src={Image2} alt="" className='h-full w-full object-contain'/>
                        </div>
                        <div className='flex flex-col justify-center items-start gap-y-8 md:w-[65%] font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px]'>
                            <div className='flex justify-start items-center gap-x-6 text-left '>
                                <img src={Arrow1} alt="" className='h-12 w-12'/>
                                <p style={{fontFamily:'poppins'}}>
                                    Delivers personalized job recommendations based on skills, experience, and preferences
                                </p>
                            </div>
                            <div className='flex justify-start items-center gap-x-6 text-left'>
                                <img src={Arrow2} alt="" className='h-12 w-12'/>
                                <p style={{fontFamily:'poppins'}}>
                                    Offers insights and suggestions to optimize resumes, making them more appealing to applicant tracking systems (ATS) and potential employers
                                </p>
                            </div>
                            <div className='flex justify-start items-center gap-x-6 text-left'>
                                <img src={Arrow3} alt="" className='h-12 w-12'/>
                                <p style={{fontFamily:'poppins'}}>
                                    Sends instant notifications about new job opportunities that match the user's criteria, ensuring timely application submissions
                                </p>
                            </div>
                            <div className='flex justify-start items-center gap-x-6 text-left'>
                                <img src={Arrow4} alt="" className='h-12 w-12'/>
                                <p style={{fontFamily:'poppins'}}>
                                    Offers insights into specific industries, market trends, and demands, helping users stay informed and competitive in their field
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Talk to our experts */}
            <Contactus/>

            {/* blog */}
            <Blog/>

            {/* footer */}
            {/* <Footer/> */}
        </div>
    </div>
  )
}

export default JobSearchAssistant3