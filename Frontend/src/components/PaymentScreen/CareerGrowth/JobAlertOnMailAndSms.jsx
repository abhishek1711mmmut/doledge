import React, { useState } from "react";
import iconarrow from "../../../images/image 112.png";
import image from "../../../images/image 113.png";
import image1 from "../../../images/image 114.png";
import image2 from "../../../images/image 66.png";
import image3 from "../../../images/image 99.png";
import Blog from "../../Blog";
import Footer from "../../Footer";
import Contactus from "../../Contactus";

function JobAlertOnMailAndSms() {

  const [price, setPrice] = useState(0);

  const handleCheckBoxChange = (e) => {
    e.target.checked
      ? setPrice((prev) => prev + parseInt(e.target.value))
      : setPrice((prev) => prev - parseInt(e.target.value));
  };

  const handlePriceAssistant = () => {
    console.log("price", price);
  };

  return (
    <div style={{fontFamily:'inter'}}>
    
   <div style={{fontFamily:'inter'}} className="lg:flex flex-col h-full w-full lg:flex-row max-w-[2000px] mx-auto lg:max-h-[400px]">
      {/* left part*/}
        <div className="bg-[#F58634] flex flex-col items-start justify-center lg:w-[55%] w-full p-5  gap-y-3">
            <h1 className="text-2xl sm:text-2xl md:text-4xl font-medium text-left !leading-[52px]"> 
              Receive Instant Job Alerts <br className="hidden lg:block"/> on Mail & SMS for Your Next <br className="hidden lg:block"/> Big Opportunity.
              </h1>
            <h2 className="text-xl lg:text-2xl font-light !leading-[43px] text-white text-left"> 
            Your Dream Job Awaits!
            </h2>
        </div>
        {/* right part */}
        <div className="w-full lg:w-[45%] flex justify-center items-center  max-lg:h-[300px]">
        
        <img className="h-full w-full object-fill" src={image3} alt="" />
        </div>

   </div>
      
      <div style={{fontFamily:'inter'}} className="lg:w-3/4 max-w-[1500px] mx-auto">
      {/*Section 2*/}
      <div className=" bg-white md:pt-3 md:mx-auto pt-3 lg:pt-3 p-2">
        {/* Title on the left top with padding */}
        
        {/* cards */}
        <div className="md:flex bg-white justify-start">
          {/* Cards section on the left */}
          <div className="flex flex-col w-[95%] mx-auto md:w-[50%]">
            <div className=" text-xl font-bold mb-4 text-left pt-2 lg:pl-[4%]">
              Importance of alerts!
            </div>
            {/* Container with 6 items arranged in two rows */}
            <div className="grid grid-cols-3  gap-8 justify-center items-end">
              {/* Item 1 */}
              <div className=" p-4  flex flex-col items-center">
                <img
                  src={require("../../../images/image 100.png")}
                  alt="Banner"
                  className="w-12 h-auto"
                />
                <span>Timely notification</span>
              </div>
              {/* Item 2 */}
              <div className=" p-4  flex flex-col items-center">
                <img
                  src={require("../../../images/image 101.png")}
                  alt="Banner"
                  className="w-12 h-auto"
                />
                <span>Efficient job search</span>
              </div>
              {/* Item 3 */}
              <div className=" p-4  flex flex-col items-center">
                <img
                  src={require("../../../images/image 102.png")}
                  alt="Banner"
                  className="w-12 h-auto"
                />
                <span>Time Management</span>
              </div>
              {/* Item 4 */}
              <div className=" p-4  flex flex-col items-center">
                <img
                  src={require("../../../images/image 103.png")}
                  alt="Banner"
                  className="w-12 h-auto"
                />
                <span>Opportunity Awareness</span>
              </div>
              {/* Item 5 */}
              <div className=" p-4  flex flex-col items-center">
                <img
                  src={require("../../../images/image 104.png")}
                  alt="Banner"
                  className="w-12 h-auto"
                />
                <span>Targeted job Application</span>
              </div>
              {/* Item 6 */}
              <div className=" p-4  flex flex-col items-center">
                <img
                  src={require("../../../images/image 105.png")}
                  alt="Banner"
                  className="w-12 h-auto"
                />
                <span>Proactive Approach</span>
              </div>
            </div>

            {/* Add more cards as needed */}
          </div>
          

          {/* Right side */}
          <div className=' flex flex-col justify-evenly md:justify-start md:pt-5 gap-y-4 md:gap-y-8 md:w-[40%]'>
                    <h1 className='w-full font-medium text-base sm:pr-0 mx-auto sm:text-xl lg:text-xl xl:text-2xl xl:leading-[43px] break-words sm:w-full'>
                    Job alert on mail and message
                    </h1>
                    <div className='w-[70%] md:w-[80%] lg:w-full xl:w-[80%] mx-auto flex flex-col max-auto max-sm:items-center items-start 2xl:pl-[5%] min-[1800px]:pl-[10%] justify-center gap-y-2 sm:gap-y-3 md:gap-y-2 xl:gap-y-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-xl:p-4 xl:px-4 xl:py-8 rounded-lg' style={{fontFamily:'Poppins'}}>
                        <div className='flex justify-start items-center gap-x-1 sm:gap-x-8 md:gap-x-4 lg:gap-x-8 sm:ml-3 md:ml-0 lg:ml-2 xl:ml-5 max-[500px]:p-1 max-[500px]:gap-x-3'>
                            <input type="checkbox" name="input1" id="input1" value="8999" onChange={handleCheckBoxChange} className='lg:w-5 lg:h-5 md:h-4 md:w-4 sm:w-5 sm:h-5 cursor-pointer'/>
                            <label htmlFor="input1" className='text-sm sm:text-lg md:text-base lg:text-lg xl:text-xl text-left lg:font-medium lg:leading-[43px] cursor-pointer'>3 Months Rs. 1699/-</label>
                        </div>
                        <div className='flex justify-start max-auto items-center gap-x-1 sm:gap-x-8 md:gap-x-4 lg:gap-x-8 sm:ml-3 md:ml-0 lg:ml-2 xl:ml-5 max-[500px]:p-1 max-[500px]:gap-x-3'>
                            <input type="checkbox" name="input2" id="input2" value="17999" onChange={handleCheckBoxChange} className='lg:w-5 lg:h-5 md:h-4 md:w-4 sm:w-5 sm:h-5 cursor-pointer'/>
                            <label htmlFor="input2" className='text-sm sm:text-lg md:text-base lg:text-lg xl:text-xl text-left lg:font-medium lg:leading-[43px] cursor-pointer'>6 Months Rs. 2799/-</label>
                        </div>
                        <div className='flex justify-start max-auto items-center gap-x-1 sm:gap-x-8 md:gap-x-4 lg:gap-x-8 sm:ml-3 md:ml-0 lg:ml-2 xl:ml-5 max-[500px]:p-1 max-[500px]:gap-x-3'>
                            <input type="checkbox" name="input3" id="input3" value="28999" onChange={handleCheckBoxChange} className='lg:w-5 lg:h-5 md:h-4 md:w-4 sm:w-5 sm:h-5 cursor-pointer'/>
                            <label htmlFor="input3" className='text-sm sm:text-lg md:text-base lg:text-lg xl:text-xl text-left lg:font-medium lg:leading-[43px] cursor-pointer'>12 Months Rs. 4299/-</label>
                        </div>
                        <em className='self-center md:text-base text-xs'>
                            (*Applicable Taxes may apply)
                        </em>
                        <button className='bg-[#F58634] font-semibold  md:text-lg lg:text-2xl leading-[38px] text-[#FFF8F8] flex justify-center items-center px-3 md:py-1 rounded-xl mx-auto' onClick={handlePriceAssistant}>
                          Buy Now
                        </button>
                    </div>
                </div>
            </div>  
          </div>
        
      
      </div>
      {/*Section 3 */}
      <div style={{fontFamily:'inter'}}>
        <div className="mt-5 sm:text-sm">
          <h1 className="bg-[#F58634] font-medium text-base sm:text-xl md:text-2xl xl:text-3xl px-1 sm:leading-[53px] py-2 sm:h-12 md:h-16 xl:h-20 flex justify-center items-center  mx-auto">
            How employees are getting benefited from jobs alert services
          </h1>
          <hr className="mt-4 mb-6"/>
          <div className="flex gap-x-5 w-[100%] md:w-[90%] lg:w-[70%] max-w-[1500px] justify-center items-center mx-auto py-4 text-xs">
            <div className="font-light text-sm md:text-lg w-[90%] md:w-[90%] xl:w-[70%] flex flex-col justify-evenly items-start gap-y-3 md:gap-y-5 xl:gap-y-6 leading-[30px] md:leading-[40px] lg:leading-[53px] text-black">
              <div className="flex items-center gap-x-3">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                    
                  className="mr-2 w-6"
                />
                <p className="text-left max-md:text-justify">
                  Receive instant notifications about new job openings
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  
                  className="mr-2 w-6"
                />
                <p className="text-left max-md:text-justify">
                  Reducing the time and effort spent on manual searches
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  
                  className="mr-2 w-6"
                />
                <p className="text-left max-md:text-justify">
                  Stay competitive by being among the first to apply for new
                  positions
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  
                  className="mr-2 w-6"
                />
                <p className="text-left max-md:text-justify">
                  increasing the chances of being noticed by employers.
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  
                  className="mr-2 w-6"
                />
                <p className="text-left max-md:text-justify">
                  Stay informed about industry trends, skill requirements, and
                  market demands
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  
                  className="mr-2 w-6"
                />
                <p className="text-left max-md:text-justify">
                  Connect with potential employers and industry professionals
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  
                  className="mr-2 w-6"
                />
                <p className="text-left max-md:text-justify">
                  Access valuable insights into the job market, salary trends,
                  and career paths
                </p>
              </div>
              {/* ... Repeat for other items */}
            </div>

            <div className="hidden lg:block w-[30%]">
              <img src={image} alt="" className="w-full h-auto scale-125 scale-y-[135%]" />
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4"/>

      {/*Section 4 */}
      <div style={{fontFamily:'inter'}}>
        <div className="mt-5 sm:text-sm">
          <h1 className="bg-white font-medium text-xl md:text-2xl lg:text-3xl px-1 sm:leading-[53px] py-2 sm:h-12 md:h-16 flex justify-center items-center mx-auto max-sm:tracking-wide">
            Job Alert Services FAQs: <br className="sm:hidden"/> Your Questions Answered
          </h1>
          <div className="flex gap-x-5 w-[90%] lg:w-[70%] max-w-[1500px] justify-between items-center mx-auto py-4 text-xs">
            <div className="font-light text-[13px] sm:text-sm lg:text-lg xl:text-xl w-[100%] md:w-[90%] lg:w-[65%] flex flex-col justify-evenly items-start gap-3 md:gap-5 lg:gap-y-10  ">
            <h1 className="text-left w-full text-lg md:text-2xl text-black font-normal">
                What are job alert services?
              </h1>
              <p className="text-base lg:text-lg xl:text-xl xl:leading-[43px] text-justify font-light">
                Job alert services are automated systems that notify users about
                new job opportunities based on their specified criteria, such as
                industry, job type, location, and keywords.
              </p>
              <h1 className="text-left w-full text-lg md:text-2xl text-black font-normal">
                How do job alert services work?
              </h1>
              <p className="text-base lg:text-lg xl:text-xl xl:leading-[43px] text-justify font-light">
                Users set preferences for the type of jobs they're interested
                in. The service then sends them notifications, typically via
                email or SMS, whenever a new job matching their criteria is
                posted.
              </p>

              <h1 className="text-left w-full text-lg md:text-2xl text-black font-normal">
                Are job alert services free?
              </h1>
              <p className="text-base lg:text-lg xl:text-xl xl:leading-[43px] text-justify font-light">
                Many job alert services are free for users. However, some
                platforms may offer premium services with additional features
                for a fee
              </p>

              <h1 className="text-left w-full text-lg md:text-2xl text-black font-normal">
                Can I receive job alerts for specific companies?
              </h1>
              <p className="text-base lg:text-lg xl:text-xl xl:leading-[43px] text-justify font-light">
                Yes, some job alert services allow users to specify preferences
                for particular companies, ensuring they receive notifications
                for relevant positions.
              </p>
            </div>

            <div className="hidden md:block w-[30%]">
              <img src={image1} alt="" className="w-auto h-auto" />
            </div>
          </div>
        </div>
      </div>
{/*      
        <div className="bg-[#F6F6F8] mt-3 ">
          <h1 className=" font-medium text-sm sm:text-xl lg:text-2xl md:text-2xl px-1 sm:leading-10 py-2 sm:h-12 md:h-16 flex justify-center items-center">
          Job Alert Services FAQs: Your Questions Answered
          </h1>
          <div className="flex  gap-x-5 w-[70%] justify-center items-center mx-auto  text-xs ">
            <div className="font-light text-[13px] sm:text-sm lg:text-lg xl:text-xl w-[100%] md:w-[90%] xl:w-[70%] flex flex-col  items-start gap-3 md:gap-5 lg:gap-y-8 lg:h-[220px] xl:h-[300px]">
              <h1 className="text-left w-full text-2xl text-black font-normal">
                What are job alert services?
              </h1>
              <p className="lg:text-lg xl:text-xl xl:leading-[43px] text-justify font-light">
                Job alert services are automated systems that notify users about
                new job opportunities based on their specified criteria, such as
                industry, job type, location, and keywords.
              </p>
              <h1 className="text-left w-full text-2xl text-black font-normal">
                How do job alert services work?
              </h1>
              <p className="lg:text-lg xl:text-xl xl:leading-[43px] text-justify font-light">
                Users set preferences for the type of jobs they're interested
                in. The service then sends them notifications, typically via
                email or SMS, whenever a new job matching their criteria is
                posted.
              </p>

              <h1 className="text-left w-full text-2xl text-black font-normal">
                Are job alert services free?
              </h1>
              <p className="lg:text-lg xl:text-xl xl:leading-[43px] text-justify font-light">
                Many job alert services are free for users. However, some
                platforms may offer premium services with additional features
                for a fee
              </p>

              <h1 className="text-left w-full text-2xl text-black font-normal">
                Can I receive job alerts for specific companies?
              </h1>
              <p className="lg:text-lg xl:text-xl xl:leading-[43px] text-justify font-light">
                Yes, some job alert services allow users to specify preferences
                for particular companies, ensuring they receive notifications
                for relevant positions.
              </p>
            </div>
            <div className="hidden md:block w-[30%] ">
              <img
                src={image1}
                alt=""
                className=" w-auto max-w-[400px] h-auto  "
              />
            </div>
          </div>
        </div> */}
        
      {/*section 5 */}
      {/*  */}
        
       <Contactus/>
       
        {/* Bolg */}
        {/* <Blog /> */}
        
        {/* Footer */}
        {/* <Footer /> */}
        
        
    </div>
  );
}

export default JobAlertOnMailAndSms;
