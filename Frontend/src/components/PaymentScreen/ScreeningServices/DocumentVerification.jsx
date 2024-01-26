import React, { useState } from 'react'
import image1 from '../../../images/DocumentVerification/image1.png'
import image2 from '../../../images/DocumentVerification/image2.png'
import image3 from '../../../images/DocumentVerification/image3.png'
import step1 from '../../../images/DocumentVerification/step1.png'
import step2 from '../../../images/DocumentVerification/step2.png'
import step3 from '../../../images/DocumentVerification/step3.png'
import step4 from '../../../images/DocumentVerification/step4.png'
import step5 from '../../../images/DocumentVerification/step5.png'
import step6 from '../../../images/DocumentVerification/step6.png'
import id1 from '../../../images/DocumentVerification/id1.png'
import id2 from '../../../images/DocumentVerification/id2.png'
import id3 from '../../../images/DocumentVerification/id3.png'
import id4 from '../../../images/DocumentVerification/id4.png'
import id5 from '../../../images/DocumentVerification/id5.png'
import Contactus from '../../Contactus'
import Footer from '../../Footer'
import Blog from '../../Blog'

const DocumentVerification = () => {

    const [price, setPrice] = useState(0);

    const handleCheckBoxChange=(e)=>{
        e.target.checked ? setPrice((prev)=>(prev + parseInt(e.target.value.split("-")[0]))) : setPrice((prev)=>(prev - parseInt(e.target.value.split("-")[0])));
    }

    const handleDocumentVerify=()=>{
        console.log('price', price)
    }

  return (
    <div className='flex flex-col gap-y-20' style={{fontFamily:'inter'}}>

        <div className='w-full'>
            <div className='bg-[#4b57ac]'>
                <div className='flex flex-col md:flex-row justify-evenly items-center gap-4 max-md:py-4 max-md:pb-8 md:w-11/12 max-w-[1500px] mx-auto'>
                    <img src={image1} alt="" loading='lazy' className='max-md:order-last max-md:w-[50%] h-fit w-fit object-contain object-center'/>
                    <div className='flex flex-col gap-8 md:max-lg:gap-4 text-left self-start md:pt-4 lg:translate-y-[15%] max-md:p-2 max-md:py-4 max-md:text-center' style={{fontFamily:'inter'}}>
                        <h1 className='text-[#FFFCFA] font-semibold text-3xl leading-[54px]'>
                            Document Verification Services: Ensuring <br className='hidden lg:block'/> Trust, Accuracy, and Compliance
                        </h1>
                        <p className='text-[#FEFEFE] font-light text-2xl'>
                            Unveiling Assurance through Verified Documents
                        </p>
                    </div>
                </div>
            </div>

            <div className='relative flex flex-col md:flex-row md:max-lg:justify-between gap-y-5 w-[85%] lg:w-[70%] max-w-[1500px] mx-auto'>
                {/* left part */}
                <div className='w-full md:w-[50%] text-justify self-end pt-7 md:pt-14' style={{fontFamily:'inter'}}>
                    <h1 className='font-semibold text-2xl leading-[55px] max-md:text-center'>
                        Importance of document verification
                    </h1>
                    <p className='font-light text-xl leading-[41px] max-w-[650px] text-justify'>
                        Document verification services are crucial for ensuring trust and credibility in various sectors. By confirming the accuracy and legitimacy of documents, they mitigate the risk of fraud, enhance security in transactions, and ensure compliance with legal requirements. These services are instrumental in fostering reliability and maintaining the integrity of professional and personal interactions.
                    </p>
                </div>

                {/* right part absolute*/}
                <div className='lg:absolute lg:right-[5%] lg:-translate-y-[15%] w-full md:w-[47%] lg:w-[42%] max-w-[600px] flex flex-col md:max-lg:h-fit md:max-lg:self-center gap-y-8 md:gap-y-10 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white py-4' style={{fontFamily:'inter'}}>
                    <h1 className='bg-[#D9D9D9] font-light text-2xl md:max-lg:text-xl p-3'>
                        Document Verification Service
                    </h1>
                    <div className='flex flex-col justify-between gap-y-4' style={{fontFamily:'inter'}}>
                        <div className='flex justify-around text-lg md:max-lg:text-base lg:text-xl px-2'>
                            <div className='flex flex-col gap-y-4'>
                                <div className='flex items-center gap-x-5'>
                                    <input type="checkbox" className='w-5 h-5 cursor-pointer' value="2299-aadhaar" onChange={handleCheckBoxChange} name="aadhaar" id="aadhaar" />
                                    <label htmlFor="aadhaar" className='cursor-pointer'>Aadhaar Card</label>
                                </div>
                                <div className='flex items-center gap-x-5'>
                                    <input type="checkbox" className='w-5 h-5 cursor-pointer' value="2199-pan" onChange={handleCheckBoxChange} name="pan" id="pan" />
                                    <label htmlFor="pan" className='cursor-pointer'>Pan Card</label>
                                </div>
                                <div className='flex items-center gap-x-5'>
                                    <input type="checkbox" className='w-5 h-5 cursor-pointer' value="1699-mobile" onChange={handleCheckBoxChange} name="mobile" id="mobile" />
                                    <label htmlFor="mobile" className='cursor-pointer'>Mobile Number</label>
                                </div>
                                <div className='flex items-center gap-x-5'>
                                    <input type="checkbox" className='w-5 h-5 cursor-pointer' value="3299-drivingLicence" onChange={handleCheckBoxChange} name="drivingLicense" id="drivingLicense" />
                                    <label htmlFor="drivingLicense" className='cursor-pointer'>Driving License</label>
                                </div>
                                <div className='flex items-center gap-x-5'>
                                    <input type="checkbox" className='w-5 h-5 cursor-pointer' value="2699-bankDetails" onChange={handleCheckBoxChange} name="bankDetails" id="bankDetails" />
                                    <label htmlFor="bankDetails" className='cursor-pointer'>Bank Details</label>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-end gap-y-5'>
                                <label htmlFor="aadhaar" className='cursor-pointer'>Rs. 2299/-</label>
                                <label htmlFor="pan" className='cursor-pointer'>Rs. 2199/-</label>
                                <label htmlFor="mobile" className='cursor-pointer'>Rs. 1699/-</label>
                                <label htmlFor="drivingLicense" className='cursor-pointer'>Rs. 3299/-</label>
                                <label htmlFor="bankDetails" className='cursor-pointer'>Rs. 2699/-</label>
                            </div>
                        </div>
                        <em className='text-lg md:text-xl'>
                            (*Applicable Taxes may apply)
                        </em>
                        <button className='font-semibold text-xl md:text-3xl text-[#FFF8F8] bg-[#F58634] w-fit flex justify-center items-center mx-auto px-4 py-2 rounded-xl' onClick={handleDocumentVerify}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>

            <div className='flex flex-col gap-y-10'>
                <h1 className='font-semibold text-2xl md:text-3xl leading-[50px] md:leading-[70px] p-2 bg-[#F0AF73]'>
                    Document Verification - STEPS
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 w-[70%] max-w-[1500px] mx-auto'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src={step1} alt="" loading='lazy'/>
                        <p className='text-2xl md:max-lg:text-xl'>
                            Submission of Documents
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src={step2} alt="" loading='lazy'/>
                        <p className='text-2xl md:max-lg:text-xl'>
                            Submission of Documents
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src={step3} alt="" loading='lazy'/>
                        <p className='text-2xl md:max-lg:text-xl'>
                            Submission of Documents
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src={step4} alt="" loading='lazy'/>
                        <p className='text-2xl md:max-lg:text-xl'>
                            Submission of Documents
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src={step5} alt="" loading='lazy'/>
                        <p className='text-2xl md:max-lg:text-xl'>
                            Submission of Documents
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src={step6} alt="" loading='lazy'/>
                        <p className='text-2xl md:max-lg:text-xl'>
                            Submission of Documents
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-2 gap-y-6 w-[85%] md:w-[70%] max-w-[1500px] mx-auto'>
                <h1 className='font-medium text-2xl md:text-3xl max-md:text-justify leading-[45px] md:leading-[53px] self-start'>
                    Document Verification Services FAQs: Your Questions Answered
                </h1>
                <div className='flex justify-evenly items-center'>
                    <div className='hidden lg:block w-[42%]'>
                        <img src={image2} alt="" loading='lazy' className='w-full h-full object-contain mx-auto'/>
                    </div>
                    <div className='flex flex-col gap-y-5 lg:w-[58%]'>
                        <div className='text-justify'>
                            <h2 className='text-2xl leading-[40px] md:leading-[53px]'>
                                What is document verification?
                            </h2>
                            <p className='text-[17px] font-light leading-[35px] md:leading-[41px]'>
                                Document verification is a process of confirming the authenticity and accuracy of submitted documents, often used in various contexts such as employment, education, and financial transactions.
                            </p>
                        </div>
                        <div className='text-justify'>
                            <h2 className='text-2xl leading-[40px] md:leading-[53px]'>
                                What documents are typically verified?
                            </h2>
                            <p className='text-[17px] font-light leading-[35px] md:leading-[41px]'>
                                Commonly verified documents include identification proofs, educational certificates, employment records, financial statements, and legal documents.
                            </p>
                        </div>
                        <div className='text-justify'>
                            <h2 className='text-2xl leading-[40px] md:leading-[53px]'>
                                Is document verification a legal requirement?
                            </h2>
                            <p className='text-[17px] font-light leading-[35px] md:leading-[41px]'>
                                In many industries, document verification is a legal requirement to ensure compliance with regulations and maintain the security of transactions.
                            </p>
                        </div>
                        <div className='text-justify'>
                            <h2 className='text-2xl leading-[40px] md:leading-[53px]'>
                                How long does document verification take?
                            </h2>
                            <p className='text-[17px] font-light leading-[35px] md:leading-[41px]'>
                                The duration varies based on the complexity of the verification process and the type of documents being reviewed. It can range from a few days to several weeks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        <div className='w-[85%] md:w-[70%] max-w-[1500px] mx-auto flex flex-col gap-y-5'>
            <h1 className='font-semibold text-3xl text-justify md:pl-6'>
                ID’s Verification using Doledge Verify
            </h1>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col justify-between md:gap-11 md:w-[60%] lg:w-[55%] text-lg md:text-xl tracking-wide'>
                    <div className='flex justify-evenly items-baseline flex-wrap gap-4'>
                        <div className='flex flex-col justify-center items-center md:w-[30%] md:max-lg:pt-5'>
                            <img src={id1} alt="" loading='lazy'/>
                            <p>
                                Aadhar card
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center md:w-[30%]'>
                            <img src={id2} alt="" loading='lazy'/>
                            <p>
                                Pan card
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center  md:w-[30%]'>
                            <img src={id3} alt="" loading='lazy'/>
                            <p>
                                Mobile number
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-2'>
                            <img src={id4} alt="" loading='lazy'/>
                            <p>
                                Driving license
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-y-2'>
                            <img src={id5} alt="" loading='lazy'/>
                            <p>
                                Bank details
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-[40%] md:max-lg:w-[35%] hidden md:flex justify-center items-center'>
                    <img src={image3} alt="" loading='lazy' className='w-fit hidden md:block'/>
                </div>
            </div>
        </div>

        <Contactus/>

        <Blog/>

        <Footer/>

    </div>
  )
}

export default DocumentVerification