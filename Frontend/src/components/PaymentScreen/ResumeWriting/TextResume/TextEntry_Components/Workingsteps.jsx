import React from 'react'
import Frame from '../../../../../images/Frame.svg'
import ContentFrame from '../../../../../images/ContentFrame.png'
import ApplicationFrame from '../../../../../images/ApplicationFrame.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faCircleInfo, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
const Workingsteps = () => {
   return (
      <>
         <div className="main w-[75%]">

            <div className="text-orange-400 text-4xl font-medium  mt-10">
               How it works?
            </div>

            {/* Step 1 */}
            <div>

               <div className="flex flex-wrap justify-around mt-5">
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
                     <div style={{ color: '#5E5E5E', fontSize: 17, fontFamily: 'Poppins', fontWeight: 700 }}>STEP 1</div>
                     <br />
                     <div style={{ fontSize: 17, fontFamily: 'Poppins', fontWeight: 700 }}>Information Gathering</div>

                     <div className="bg-gradient-to-r from-[#abdd8d] to-[#688f4e]] border-2  p-6 rounded mt-3 text-center">
                        <div className="flex justify-center items-center">
                        <FontAwesomeIcon icon={faCircleInfo} style={{color: "#93aa55",width: '2.8vw', height: '5vh'}} />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl h-[15vh] mt-2" style={{
                           fontSize: 13,
                           fontFamily: 'Poppins',
                           fontWeight: '300',
                        }}>Our team reviews your information to understand your career goals, strengths, and unique selling points</p>
                     </div>
                  </div>

                  {/* 2 */}
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
                     <div style={{ color: '#5E5E5E', fontSize: 17, fontFamily: 'Poppins', fontWeight: 700 }}>STEP 2</div>
                     <br />
                     <div style={{ fontSize: 17, fontFamily: 'Poppins', fontWeight: 700 }}>Content Optimization</div>
                     <div className="bg-gradient-to-r from-[#abdd8d] to-[#688f4e]] border-2 0 p-6 rounded mt-3 text-center">
                     <div className="flex justify-center items-center">
                           <img className='max-w-full h-auto' src={ContentFrame} alt="" style={{ width: '2.5vw', height: '2vh' }}/>
                        </div>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl h-[15vh] mt-2" style={{
                           fontSize: 13,
                           fontFamily: 'Poppins',
                           fontWeight: '300',
                        }}>The text resume is formatted for maximum readability on various devices, ensuring it maintains a professional appearance</p>
                     </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
                     <div style={{ color: '#5E5E5E', fontSize: 17, fontFamily: 'Poppins', fontWeight: 700 }}>STEP 3</div>
                     <br />
                     <div style={{ fontSize: 17, fontFamily: 'Poppins', fontWeight: 700 }}>Application Process</div>
                     <div className="bg-gradient-to-r from-[#abdd8d] to-[#688f4e]] border-2 p-6 rounded mt-3 text-center">
                     <div className="flex justify-center items-center">
                           <img className='max-w-full h-auto' src={ApplicationFrame} alt=""  style={{ width: '2.5vw', height: '2vh' }}/>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl h-[15vh] mt-2" style={{
                           fontSize: 13,
                           fontFamily: 'Poppins',
                           fontWeight: '300'
                        }}>We deliver the text-optimized resume. Use it for online applications where text submission is accepted</p>
                     </div>
                  </div>
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
                     <div style={{ color: '#5E5E5E', fontSize: 17, fontFamily: 'Poppins', fontWeight: 700 }}>STEP 4</div>
                     <br />
                     <div style={{ fontSize: 17, fontFamily: 'Poppins', fontWeight: 700 }}>Results and Opportunities</div>
                     <div className="bg-gradient-to-r from-[#abdd8d] to-[#688f4e]] border-2  p-6 rounded mt-3 text-center">
                     <div className="flex justify-center items-center">
                     <FontAwesomeIcon icon={faSquarePollVertical} style={{color: "#81bd70",width: '2.8vw', height: '5vh'}} />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl h-[15vh] mt-2" style={{
                           fontSize: 13,
                           fontFamily: 'Poppins',
                           fontWeight: '300',
                        }}>our text resume is designed to make an instant impression, helping you stand out in the competitive job market</p>
                     </div>
                  </div>
               </div>

            </div>




         </div>

      </>
   )
}

export default Workingsteps