import React from 'react'
import bgImage from '../../../images/bgJobSearch.png'
import Image from '../../../images/JobSearch1.png'
import Image2 from '../../../images/JobSearch2.png'
import Image3 from '../../../images/JobSearch3.png'
import Image4 from '../../../images/JobSearch4.png'
import Icon1 from '../../../images/JobIcon1.png'
import Icon2 from '../../../images/JobIcon2.png'
import Icon3 from '../../../images/JobIcon3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

const JobSearchAssistant3 = () => {
  return (
    <div>
        {/* section 1 */}
        <div className={`relative bg-[url(${bgImage})] bg-cover h-[500px]`}>
           <div className='flex justify-around items-center mx-auto pt-10'>
                <div className='flex flex-col justify-center items-center gap-y-8 w-[34%]'>
                    <h1 className='font-medium text-[38px] leading-[43px] tracking-wider'>
                        Job Search Assistant
                    </h1>
                    <p className='font-medium text-[24px] leading-[43px] tracking-[3px]'>
                        Unlock Your Career Potential with Our Expert Job Search Services
                    </p>
                </div>
                <div className=''>
                    <img src={Image4} alt="" className='mix-blend-darken w-full h-full object-contain'/>
                </div>
           </div>

           {/*div to be overlaped */}
           <div className='absolute left-[50%] -translate-x-[50%] top-[70%] bg-white w-[90%] mx-auto py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col gap-y-8'>
            <h1 className='font-semibold text-xl leading-[43px] bg-[#F58634] w-[50%] mx-auto rounded-xl'>
                Benefits of Doledge Job Search Assistant Services
            </h1>
            <div className='flex justify-around items-center'>
                {/* left part */}
                <div className='flex flex-col justify-center items-center w-[55%]'>
                    <div className='flex justify-center items-center gap-4'>
                        <div className='w-12 h-12'>
                            <img src={Icon1} alt="" className='w-full h-full object-contain'/>
                        </div>
                        <div className='flex flex-col justify-center items-center text-2xl leading-[43px]'>
                            <h1 className='text-left w-full font-medium'>
                                Smart Job Matching
                            </h1>
                            <p className='text-xl leading-[43px] text-justify'>
                                Effortlessly find the perfect job match through advanced algorithms and personalized criteria
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <div className='w-12 h-12'>
                            <img src={Icon2} alt="" className='w-full h-full object-contain'/>
                        </div>
                        <div className='flex flex-col justify-center items-center text-2xl leading-[43px]'>
                            <h1 className='text-left w-full font-medium'>
                                Networking Opportunities
                            </h1>
                            <p className='text-xl leading-[43px] text-justify'>
                                Expand your professional network with curated connections and networking events
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <div className='w-12 h-12'>
                            <img src={Icon3} alt="" className='w-full h-full object-contain'/>
                        </div>
                        <div className='flex flex-col justify-center items-center text-2xl leading-[43px]'>
                            <h1 className='text-left w-full font-medium'>
                                Career Guidance
                            </h1>
                            <p className='text-xl leading-[43px] text-justify'>
                                Access expert advice and resources for strategic career planning and development
                            </p>
                        </div>
                    </div>
                </div>
                {/* right part */}
                <div className='w-[30%] flex flex-col gap-4'>
                    <h1 className='font-medium text-2xl leading-[43px]'>
                        Job Search Assistant Service
                    </h1>
                    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 rounded-lg'>
                        <div className='flex justify-start items-center gap-x-8 ml-5'>
                            <input type="checkbox" name="input1" id="input1" className='w-5 h-5 cursor-pointer'/>
                            <label htmlFor="input1" className='text-xl text-left font-medium leading-[43px] cursor-pointer'>3 Months Rs. 8999/-</label>
                        </div>
                        <div className='flex justify-start items-center gap-x-8 ml-5'>
                            <input type="checkbox" name="input2" id="input2" className='w-5 h-5 cursor-pointer'/>
                            <label htmlFor="input2" className='text-xl text-left font-medium leading-[43px] cursor-pointer'>6 Months Rs. 17999/-</label>
                        </div>
                        <div className='flex justify-start items-center gap-x-8 ml-5'>
                            <input type="checkbox" name="input3" id="input3" className='w-5 h-5 cursor-pointer'/>
                            <label htmlFor="input3" className='text-xl text-left font-medium leading-[43px] cursor-pointer'>12 Months Rs. 28999/-</label>
                        </div>
                        <em>
                            (*Applicable Taxes may apply)
                        </em>
                    </div>
                    <button className='bg-[#F58634] font-semibold text-2xl leading-[38px] text-[#FFF8F8] flex justify-center items-center px-3 py-1 rounded-xl mx-auto'>
                        Buy Now
                    </button>
                </div>
            </div>
           </div>
        </div>
        <div className='bg-white h-[450px]'></div>

        {/* section 2 */}
        <div>
            <div>
                <h1 className='bg-[#62B01E9C] font-semibold text-3xl py-3'>
                    Benefits of Doledge Job Search Assistant Services
                </h1>
                <table className="table-striped table-bordered table" style={{ fontSize: '14px' }}>
                    <thead>
                    <tr>  
                        <th scope="col" className="text-center benefits-header bg-red-500">Benefits</th>
                        <th scope="col" className="text-center">Free Service</th>
                        <th scope="col" className="text-center" style={{ color: 'white', backgroundColor: '#2e3339', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 700, }}>Paid Service</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="">
                        <td className='benefit text-left sm:px-5' >Premium Job Matches</td>
                        <td className='text-center sm:px-5 benefitGiven'> <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' /></td>
                        <td className='text-center sm:px-5 benefitGiven'> <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' /></td>
                    </tr>
                    <tr className="">
                        <td className='text-left sm:px-5'>Advanced Resume Optimisation</td>
                        <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                        <td className='text-center sm:px-5'>
                        <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                        </td>
                    </tr>
                    <tr className="">
                        <td className='text-left sm:px-5'>Personal Career Coach</td>
                        <td className='text-center sm:px-5 benefitGiven'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                        <td className='text-center sm:px-5'>
                        <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                        </td>
                    </tr>

                    <tr className="">

                        <td className='text-left sm:px-5'>Detailed Industry Reports</td>
                        <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                        <td className='text-center sm:px-5 benefitGiven'>
                        <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                        </td>
                    </tr>

                    <tr className="">

                        <td className='text-left sm:px-5'>Enhanced networking Oppurtunities</td>
                        <td className='text-center sm:px-5'>
                        <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' />
                        </td>
                        <td className='text-center sm:px-5'>
                        <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                        </td>
                    </tr>

                    <tr className="">

                        <td className='text-left sm:px-5'>Priority Application processing</td>
                        <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                        <td className='text-center sm:px-5 benefitGiven'>
                        <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                        </td>
                    </tr>

                    <tr className="">

                        <td className='text-left sm:px-5'>Enhanced Efficiency</td>
                        <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                        <td className='text-center sm:px-5 benefitGiven'>
                        <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                        </td>
                    </tr>

                    <tr className="">

                        <td className='text-left sm:px-5'>Results - Driven</td>
                        <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                        <td className='text-center sm:px-5 benefitGiven'>
                        <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                        </td>
                    </tr>



                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default JobSearchAssistant3