import React, { useState } from "react";
import iconarrow from "../../../images/image 112.png";
import image from "../../../images/image 113.png";
import image1 from "../../../images/image 114.png";
import image2 from "../../../images/image 66.png";
import Blog from "../../Blog";
import Footer from "../../Footer";
import Contactus from "../../Contactus";

function JobAlertOnMailAndSms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const { name, email, phoneNo } = formData;

  const handleOnChange = (e) => {
    if (
      e.target.type === "number" &&
      e.target.value.length > e.target.maxLength
    ) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const [price, setPrice] = useState(0);

  const handleCheckBoxChange = (e) => {
    e.target.checked
      ? setPrice((prev) => prev + parseInt(e.target.value))
      : setPrice((prev) => prev - parseInt(e.target.value));
  };

  const submitContactFormData = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handlePriceAssistant = () => {
    console.log("price", price);
  };

  return (
    <>
    
      <section>
      {/*Section 2*/}
      <div className=" bg-white md:w-[70%] md:pt-0 md:mx-auto">
        {/* Title on the left top with padding */}
        <div className=" text-2xl font-bold mb-4 text-left mx-px before:">
          Importance of alerts!
        </div>
        {/* cards */}
        <div className="md:flex bg-white justify-start ">
          {/* Cards section on the left */}
          <div className="flex flex-col mr-4">
            {/* Container with 6 items arranged in two rows */}
            <div className="grid grid-cols-3  gap-8 mb-4  justify-items-center">
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
          <div className='w-[60%] sm:w-[55%] md:w-[40%] flex flex-col gap-3 md:gap-4 mx-auto'>
                    <h1 className='font-medium text-base pr-5 sm:pr-0 mx-auto sm:text-2xl md:text-base lg:text-xl xl:text-2xl xl:leading-[43px] w-52 break-words sm:w-full'>
                        Job Search Assistant Service
                    </h1>
                    <div className='flex flex-col max-auto items-start justify-center gap-y-2 sm:gap-y-3 md:gap-y-2 xl:gap-y-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-3 xl:p-4 rounded-lg'>
                        <div className='flex justify-start items-center gap-x-1 sm:gap-x-8 md:gap-x-4 lg:gap-x-8 sm:ml-3 md:ml-0 lg:ml-2 xl:ml-5 max-[500px]:p-1 max-[500px]:gap-x-3'>
                            <input type="checkbox" name="input1" id="input1" value="8999" onChange={handleCheckBoxChange} className='lg:w-5 lg:h-5 md:h-4 md:w-4 sm:w-5 sm:h-5 cursor-pointer'/>
                            <label htmlFor="input1" className='text-xs sm:text-lg md:text-base lg:text-lg xl:text-xl text-left lg:font-medium lg:leading-[43px] cursor-pointer'>3 Months Rs. 8999/-</label>
                        </div>
                        <div className='flex justify-start max-auto items-center gap-x-1 sm:gap-x-8 md:gap-x-4 lg:gap-x-8 sm:ml-3 md:ml-0 lg:ml-2 xl:ml-5 max-[500px]:p-1 max-[500px]:gap-x-3'>
                            <input type="checkbox" name="input2" id="input2" value="17999" onChange={handleCheckBoxChange} className='lg:w-5 lg:h-5 md:h-4 md:w-4 sm:w-5 sm:h-5 cursor-pointer'/>
                            <label htmlFor="input2" className='text-xs sm:text-lg md:text-base lg:text-lg xl:text-xl text-left lg:font-medium lg:leading-[43px] cursor-pointer'>6 Months Rs. 17999/-</label>
                        </div>
                        <div className='flex justify-start max-auto items-center gap-x-1 sm:gap-x-8 md:gap-x-4 lg:gap-x-8 sm:ml-3 md:ml-0 lg:ml-2 xl:ml-5 max-[500px]:p-1 max-[500px]:gap-x-3'>
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
      </section>
      {/*Section 3 */}
      <section>
        <div className="bg-[#F6F6F8] mt-5 sm:text-sm">
          <h1 className="bg-[#F58634] font-medium text-lg sm:text-xl md:text-2xl px-1 sm:leading-10 py-2 sm:h-12 md:h-16 flex justify-center items-center md:mt-8 mx-auto">
            The benefits you gain from a Profile Highlighter service include
          </h1>
          <div className="flex gap-x-5 w-[70%] justify-center items-center mx-auto py-4">
            <div className="font-light text-[13px] sm:text-sm lg:text-lg xl:text-xl w-[90%] md:w-[90%] xl:w-[70%] flex flex-col justify-evenly items-start gap-3 md:gap-5 lg:gap-y-10  ">
              <div className="flex items-center">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  style={{ color: "#24e544" }}  
                  className="mr-2"
                />
                <p className="text-left">
                  Receive instant notifications about new job openings
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  style={{ color: "#24e544" }}
                  className="mr-2"
                />
                <p className="text-left">
                  Reducing the time and effort spent on manual searches
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  style={{ color: "#24e544" }}
                  className="mr-2"
                />
                <p className="text-left">
                  Stay competitive by being among the first to apply for new
                  positions
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  style={{ color: "#24e544" }}
                  className="mr-2"
                />
                <p className="text-left">
                  increasing the chances of being noticed by employers.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  style={{ color: "#24e544" }}
                  className="mr-2"
                />
                <p className="text-left">
                  Stay informed about industry trends, skill requirements, and
                  market demands
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  style={{ color: "#24e544" }}
                  className="mr-2"
                />
                <p className="text-left">
                  Connect with potential employers and industry professionals
                </p>
              </div>
              <div className="flex items-center">
                <img
                  src={iconarrow}
                  alt="Arrow Icon"
                  style={{ color: "#24e544" }}
                  className="mr-2"
                />
                <p className="text-left">
                  Access valuable insights into the job market, salary trends,
                  and career paths
                </p>
              </div>
              {/* ... Repeat for other items */}
            </div>

            <div className="hidden md:block w-[30%]">
              <img src={image} alt="" className="w-full max-w-[400px] h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/*Section 4 */}
      <section>
        <div className="bg-[#F6F6F8] mt-5">
          <h1 className=" font-medium text-lg sm:text-xl md:text-2xl px-1 sm:leading-10 py-2 sm:h-12 md:h-16 flex justify-center items-center">
            The benefits you gain from a Profile Highlighter service include
          </h1>
          <div className="flex gap-x-5 w-[70%] justify-center items-center mx-auto py-4">
            <div className="font-light text-[13px] sm:text-sm lg:text-lg xl:text-xl w-[90%] md:w-[90%] xl:w-[70%] flex flex-col  items-start gap-3 md:gap-5 lg:gap-y-8">
              <h1 className="text-left w-full font-medium">
                What are job alert services?
              </h1>
              <p className="lg:text-lg xl:text-xl xl:leading-[43px] text-justify">
                Job alert services are automated systems that notify users about
                new job opportunities based on their specified criteria, such as
                industry, job type, location, and keywords.
              </p>
              <h1 className="text-left w-full font-medium">
                How do job alert services work?
              </h1>
              <p className="lg:text-lg xl:text-xl xl:leading-[43px] text-justify">
                Users set preferences for the type of jobs they're interested
                in. The service then sends them notifications, typically via
                email or SMS, whenever a new job matching their criteria is
                posted.
              </p>

              <h1 className="text-left w-full font-medium">
                Are job alert services free?
              </h1>
              <p className="lg:text-lg xl:text-xl xl:leading-[43px] text-justify">
                Many job alert services are free for users. However, some
                platforms may offer premium services with additional features
                for a fee
              </p>

              <h1 className="text-left w-full font-medium">
                Can I receive job alerts for specific companies?
              </h1>
              <p className="lg:text-lg xl:text-xl xl:leading-[43px] text-justify">
                Yes, some job alert services allow users to specify preferences
                for particular companies, ensuring they receive notifications
                for relevant positions.
              </p>
            </div>
            <div className="hidden md:block w-[30%]">
              <img
                src={image1}
                alt=""
                className="w-full max-w-[400px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/*section 5 */}
      <Contactus/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default JobAlertOnMailAndSms;
