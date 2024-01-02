import React from 'react'
import blueBg from '../../../../images/qualityScoreBlueBg.jpg'
import leftImage from '../../../../images/scoreLeftImage.png'
import { Link } from 'react-router-dom'
import { MyDropzone } from './Dropzone'
import work1 from '../../../../images/work1.png'
import work2 from '../../../../images/work2.png'
import work3 from '../../../../images/work3.png'
import Footer from '../../../Footer'


const ResumeQualityScore = () => {
  return (
    <div>
        <div>
            {/* blue image div */}
            <div className={`bg-[url(${blueBg})] bg-no-repeat bg-cover lg:bg-contain h-[300px] relative mx-auto`}>
              <div className='absolute top-[9%] left-[50%] translate-x-[-50%] mx-auto'>
                  {/* header */}
                  <h1 className='text-lg lg:text-2xl xl:text-4xl font-medium text-white break-normal'>Know where your resume quality stands amongst others</h1>
                  <p className='text-base xl:text-lg mt-3 text-white'>Analyze your current resume and get a feedback to make it better</p>

                  {/* box */}
                  <div className='w-[70vw] mx-auto flex flex-col items-center gap-y-8 xl:flex-row text-center p-10 pt-14 mt-4 bg-white drop-shadow-xl'>
                    {/* left section */}
                    <div className='w-[40%] text-xl font-medium flex flex-col gap-5'>
                      <h2>
                        Get resume feedback report and <br /> know what to improve
                      </h2>
                      <img src={leftImage} alt="" width={315} height={216} className='mx-auto'/>
                      <div className='text-[16px]'>
                        <h2>Don’t you have resume?</h2>
                        <Link className='text-[#4a90e2] text-sm'>Get your resume written by expert</Link>
                      </div>
                    </div>

                    {/* right section */}
                    <div className='border-dashed border-2 border-gray-400 p-8 w-[60%]'>
                      <h2 className='text-lg lg:text-2xl font-medium'>
                        Upload your resume to evaluate your score
                      </h2>
                      <p className='text-[#414c5f]'>
                        Choose any of the methods from below
                      </p>
                      <MyDropzone/>
                    </div>
                  </div>

                  {/* how it works */}
                  <div className='mt-14 text-center'>
                    <h1 className='text-3xl mb-7'>How it works</h1>
                    <div className='flex flex-col items-center xl:justify-center xl:flex-row gap-10 xl:gap-3'>
                      <div className='flex flex-col gap-2 p-3 py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[60%] xl:w-full min-h-[300px]'>
                        <img src={work1} alt="" width={100} height={100} className='mx-auto'/>
                        <p>
                          1. Upload or fetch resume from naukri
                        </p>
                        <p>
                          Yes, thats all that is needed. Upload your resume no matter what state it is in.
                        </p>
                      </div>
                      <div className='flex flex-col gap-2 p-3 py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[60%] xl:w-full min-h-[300px]'>
                        <img src={work2} alt="" width={100} height={100} className='mx-auto'/>
                        <p>
                          2. Our algorithm scores your resume
                        </p>
                        <p>
                          Our algorithm scores your resume on the basis of 25+ parameters & benchmarks against other job seekers.
                        </p>
                      </div>
                      <div className='flex flex-col gap-2 p-3 py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[60%] xl:w-full min-h-[300px]'>
                        <img src={work3} alt="" width={100} height={100} className='mx-auto'/>
                        <p>
                          3. Get instant Feedback on resume
                        </p>
                        <p>
                          You will get your resume score. If it’s high, great! If Score is low, You can get detail feedback from our expert to fix the issues.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='w-full mx-auto'>
                    <Footer/>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ResumeQualityScore