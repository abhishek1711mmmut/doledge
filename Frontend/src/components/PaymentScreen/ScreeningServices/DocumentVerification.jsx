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

        <div className='relative'>
            <div className='bg-[#4b57ac]'>
                <div className='flex justify-evenly items-center gap-4 xl:w-[90%]'>
                    <img src={image1} alt="" className='h-fit w-fit object-contain object-center'/>
                    <div className='flex flex-col gap-8 text-left self-start translate-y-[15%]' style={{fontFamily:'inter'}}>
                        <h1 className='text-[#FFFCFA] font-semibold text-3xl leading-[54px]'>
                            Document Verification Services: Ensuring <br className='hidden lg:block'/> Trust, Accuracy, and Compliance
                        </h1>
                        <p className='text-[#FEFEFE] font-light text-2xl'>
                            Unveiling Assurance through Verified Documents
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex w-[90%] mx-auto'>
                {/* left part */}
                <div className='w-[50%] text-justify self-end pt-20' style={{fontFamily:'inter'}}>
                    <h1 className='font-semibold text-2xl leading-[55px]'>
                        Importance of document verification
                    </h1>
                    <p className='font-light text-xl leading-[44px] text-justify'>
                        Document verification services are crucial for ensuring trust and credibility in various sectors. By confirming the accuracy and legitimacy of documents, they mitigate the risk of fraud, enhance security in transactions, and ensure compliance with legal requirements. These services are instrumental in fostering reliability and maintaining the integrity of professional and personal interactions.
                    </p>
                </div>

                {/* right part absolute*/}
                <div className='absolute right-[5%] -translate-y-[15%] w-[40%] flex flex-col gap-y-10 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-white py-4' style={{fontFamily:'inter'}}>
                    <h1 className='bg-[#D9D9D9] font-light text-2xl p-3'>
                        Document Verification Service
                    </h1>
                    <div className='flex flex-col justify-between gap-y-5' style={{fontFamily:'inter'}}>
                        <div className='flex justify-around text-xl'>
                            <div className='flex flex-col gap-y-5'>
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
                        <em className='text-xl'>
                            (*Applicable Taxes may apply)
                        </em>
                        <button className='font-semibold text-3xl text-[#FFF8F8] bg-[#F58634] w-fit flex justify-center items-center mx-auto px-4 py-2 rounded-xl' onClick={handleDocumentVerify}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>

            <div className='flex flex-col gap-y-10'>
                <h1 className='font-semibold text-3xl leading-[70px] p-2 bg-[#F0AF73]'>
                    Document Verification - STEPS
                </h1>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src={step1} alt="" />
                        <p className='text-2xl'>
                            Submission of Documents
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src={step2} alt="" />
                        <p className='text-2xl'>
                            Submission of Documents
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src={step3} alt="" />
                        <p className='text-2xl'>
                            Submission of Documents
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src={step4} alt="" />
                        <p className='text-2xl'>
                            Submission of Documents
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src={step5} alt="" />
                        <p className='text-2xl'>
                            Submission of Documents
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <img src={step6} alt="" className=''/>
                        <p className='text-2xl'>
                            Submission of Documents
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-2 gap-y-6 w-[90%] mx-auto'>
                <h1 className='font-medium text-3xl leading-[53px] self-start'>
                    Document Verification Services FAQs: Your Questions Answered
                </h1>
                <div className='flex justify-between items-center'>
                    <div className='w-[35%]'>
                        <img src={image2} alt="" className='w-[90%] object-contain mx-auto'/>
                    </div>
                    <div className='flex flex-col gap-y-5 w-[60%]'>
                        <div className='text-justify'>
                            <h2 className='text-2xl leading-[53px]'>
                                What is document verification?
                            </h2>
                            <p className='text-lg font-light leading-[41px]'>
                                Document verification is a process of confirming the authenticity and accuracy of submitted documents, often used in various contexts such as employment, education, and financial transactions.
                            </p>
                        </div>
                        <div className='text-justify'>
                            <h2 className='text-2xl leading-[53px]'>
                                What documents are typically verified?
                            </h2>
                            <p className='text-lg font-light leading-[41px]'>
                                Commonly verified documents include identification proofs, educational certificates, employment records, financial statements, and legal documents.
                            </p>
                        </div>
                        <div className='text-justify'>
                            <h2 className='text-2xl leading-[53px]'>
                                Is document verification a legal requirement?
                            </h2>
                            <p className='text-lg font-light leading-[41px]'>
                                In many industries, document verification is a legal requirement to ensure compliance with regulations and maintain the security of transactions.
                            </p>
                        </div>
                        <div className='text-justify'>
                            <h2 className='text-2xl leading-[53px]'>
                                How long does document verification take?
                            </h2>
                            <p className='text-lg font-light leading-[41px]'>
                                The duration varies based on the complexity of the verification process and the type of documents being reviewed. It can range from a few days to several weeks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        <div>
            <h1 className='font-semibold text-3xl text-justify'>
                ID’s Verification using Doledge Verify
            </h1>
            <div className='flex justify-between items-center'>
                <div>
                    <div></div>
                </div>
                <div>
                    <img src={image3} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default DocumentVerification