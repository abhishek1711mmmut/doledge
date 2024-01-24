import React, {useState} from "react";
import { useTheme } from "@mui/material";
import Blog from "./../../Blog";
import Footer from "./../../Footer";
import Image from "./../../../images/JobSearch1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const ComboResume = () => {
  const theme = useTheme();
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

  const submitContactFormData = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="w-full h-auto mx-auto pt-2">

     {/* Section 1 */}
     <div className="flex flex-col lg:flex-row  h-full 2xl:h-[40vh] lg:max-h-[450px] xl:mb-4  2xl:mb-6">
          <div className="bg-gradient-to-tr from-orange-500 to-amber-400 flex flex-col gap-4 md:gap-y-8 justify-center lg:text-left h-full py-10 pb-16 lg:h-auto w-full items-center">
            <h1 className=" font-medium  text-4xl sm:text-5xl leading-[50px] sm:leading-[65px] px-6 sm:px-12 text-start w-[95%] lg-w-[70%] xl:w-[80%] 2xl:w-[55%]">
            Career Catalysts: Elevate Your Journey with Job Boost Services
            </h1>
            <p className="font-normal text-xl sm:text-3xl xl:text-4xl text-[#000000] px-6 sm:px-12 tracking-[2px] leading-[30px] sm:leading-10 text-start  w-[95%] lg-w-[70%] xl:w-[80%] 2xl:w-[55%]">
            Unlock Opportunities, Ignite Success!
            </p>
          </div>
        </div>


        {/* Section-2 Table  */}
        <div className="pt-4 xl:pt-6">
          <h1 className="bg-[#62B01E] font-semibold text-2xl md:text-3xl lg:text-4xl  xl:text-[2.5rem]  py-[0.7rem] md:py-[2rem] tracking-normal">
          Combo Resume Packs
          </h1>
          <table className="table table-bordered  border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] table-auto   !w-[70%] mx-auto my-10">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-center !text-black  text-xl md:text-2xl lg:text-3xl "
                >
                 Text Resume
                  <p className="text-lg  md:text-xl xl:text-2xl  md:m-2 font-medium">Rs. 5899/-</p>
                </th>
                <th
                  scope="col"
                  className="text-center !text-black text-xl md:text-2xl lg:text-3xl "
                >
                Visual Resume
                  <p className="text-lg  md:text-xl xl:text-2xl  md:m-2 font-medium">Rs. 7999/-</p>
                </th>
                <th
                  scope="col"
                  className="text-center !text-black text-xl  md:text-2xl  lg:text-3xl "
                >
                International Resume
                  <p className="text-lg  md:text-xl xl:text-2xl md:m-2 font-medium">Rs. 15999/-</p>
                </th>
               
              </tr>
            </thead>
            <tbody>
              <tr className="mt-2">
                <td className=" text-base  md:text-lg   lg:text-2xl lg:tracking-wide text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"10px"}}
                   size="md"
                 /> Professional Presentation</td>
               <td className="text-start  text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 /> Eye-Catching Design</td>
                 <td className="text-start text-base  md:text-lg   lg:text-2xl lg:tracking-wide">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 />Global Standards Compliance</td>
              </tr>

              <tr className="">
                <td className="  text-base  md:text-lg   lg:text-2xl lg:tracking-wide text-start">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"10px"}}
                   size="md"
                 /> Concise and Clear Information</td>
               <td className="text-start  text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 /> Enhanced Storytelling</td>
                 <td className="text-start  text-base  md:text-lg  lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 />Cultural Sensitivity</td>
              </tr>

              <tr className="mt-2">
                <td className="  text-base  md:text-lg   lg:text-2xl lg:tracking-wide text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"10px"}}
                   size="md"
                 /> Customization for Targeted Roles</td>
               <td className="text-start text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 /> Increased Visual Impact</td>
                 <td className="text-start  text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 />Language Optimization</td>
              </tr>


              <tr className="mt-2">
                <td className="  text-base  md:text-lg   lg:text-2xl lg:tracking-wide text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"10px"}}
                   size="md"
                 /> Quantifiable Achievements</td>
               <td className="text-start text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 /> Highlight Key Achievements</td>
                 <td className="text-start text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 />Format Adaptation</td>
              </tr>


              <tr className="mt-2">
                <td className="  text-base  md:text-lg   lg:text-2xl lg:tracking-wide text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"10px"}}
                   size="md"
                 /> Increased Readability</td>
               <td className="text-start text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 /> Infographic Elements</td>
                 <td className="text-start  text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 />Global Networking Strategies</td>
              </tr>


              <tr className="mt-2">
                <td className="  text-base  md:text-lg   lg:text-2xl lg:tracking-wide text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"10px"}}
                   size="md"
                 /> Standout Appeal</td>
               <td className="text-start text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 /> Modern and Innovative Image</td>
                 <td className="text-start text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 />Understanding Visa and Work Authorization Requirements</td>
              </tr>

              

              <tr className="mt-2">
                <td className="  text-base  md:text-lg   lg:text-2xl lg:tracking-wide text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"10px"}}
                   size="md"
                 /> Career Confidence Boost</td>
               <td className="text-start text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 /> Online Portfolio Integration</td>
                 <td className="text-start text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 />Industry-Specific Insights</td>
              </tr>

              <tr className="mt-2">
                <td className="  text-base  md:text-lg   lg:text-2xl lg:tracking-wide text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"10px"}}
                   size="md"
                 /> ATS Compatibility</td>
               <td className="text-start  text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 /> Increased Engagement</td>
                 <td className="text-start  text-base  md:text-lg   lg:text-2xl lg:tracking-wide">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 />Understanding Global Job Market Trends</td>
              </tr>

              <tr className="mt-2">
                <td className="  text-base  md:text-lg   lg:text-2xl lg:tracking-wide text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"10px"}}
                   size="md"
                 /> Professional Presentation</td>
               <td className="text-start  text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 /> Online Portfolio Integration</td>
                 <td className="text-start  text-base  md:text-lg   lg:text-2xl lg:tracking-wide ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"10px" }}
                   size="md"
                 />International Job Search Strategies</td>
              </tr>

              <tr className="mt-2">
                <td className="text-center ">
                <button className="text-base sm:text-lg md:text-xl 2xl:text-2xl  text-black w-max-content font-medium mx-auto px-2 md:px-4 py-1 justify-center   rounded-3xl bg-[#62B01E]">
                Know more   
                </button></td>
                <td className="text-center ">
                <button className="text-base sm:text-lg md:text-xl 2xl:text-2xl  text-black w-max-content font-medium mx-auto  px-2 md:px-4 py-1 justify-center   rounded-3xl bg-[#62B01E]">
                Know more
                </button></td>
                <td className="text-center">
                <button className="text-base sm:text-lg md:text-xl 2xl:text-2xl  text-black w-max-content font-medium mx-auto  px-2 md:px-4 py-1 justify-center   rounded-3xl bg-[#62B01E]">
                Know more
                </button></td>
              </tr>

              
              </tbody>
          </table>

          </div>

       

       {/* Buy Section  */}
       <div className="w-[90%] mx-auto  flex  flex-col  md:flex lg:flex-row justify-around  items-center mt-8 xl:mt-12  ">

        {/* Left Section  */}
             <div className="basis-1/2 2xl:basis-1/3   w-[95%] md:w-[70%] text-left border-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]   md:p-2  mx-auto  ">
             
             <div className="mx-auto p-2 md:p-4 lg:p-8">

              <ul className="text-justif  y justify-start   w-full md:w-[90%] ">
                <li className='flex  text-justify justify-between  gap-5 mt-4 text-xl md:text-2xl lg:px-2'>
                Text Resume
                  <span className="text-right">Rs. 5899/-</span>
                </li>
                <li className='flex  text-justify justify-between  gap-2 md:gap-5 mt-4 text-xl md:text-2xl lg:px-2'>
                International Resume
                <span className="-end">Rs. 7999/-</span>
                </li>
                <li className='flex text-justify justify-between gap-5 mt-4 text-xl md:text-2xl lg:px-2'>
                Visual Resume
                <span className="text-end">Rs. 15999/-</span>
                </li>
                <li className='flex text-justify justify-between  gap-5 mt-4 text-xl md:text-2xl lg:px-2'>
                Cover Letter
                <span className="text-right">Rs. 1899/-</span>
                </li>
                <li className='flex text-justify font-medium  px-2  md:px-4 mt-8 text-xl md:text-2xl'>
                Buy all 4 services in combo pack and save Rs. 2400/- now
               
                </li>
                <li className='text-end mt-8 text-2xl px-2  xl:text-4xl font-semibold lg:tracking-wide'>
             Rs. <span className="line-through">31796</span>/-
                </li>

             
                <li className='flex  text-justify  justify-around  gap-4 md:gap-5  md:mt-4 text-2xl  xl:text-4xl font-semibold lg:tracking-wide'>
                Combo Offer
                  <span className="text-right">Rs. 29396/-</span>
                </li>

                </ul>
             </div>

             
<div> 
<p className=" text-2xl lg:text-3xl font-medium mt-10 text-center lg:tracking-wide ">You Save - Rs. 2400</p>
</div>


<div  className="mt-12">
     <p className="text-xl text-center  ">(*Applicable Taxes may apply)</p>
               <button className="text-xl sm:text-3xl text-white w-max-content  font-medium mx-auto px-4 py-2 flex justify-center items-center rounded-xl !bg-orange-500 m-3">
                  Buy Now
                </button> 
                </div>
            </div>


{/*     Right Part  */}
          <div
               className="lg:basis-1/3 mr-[5rem]" >
            <img
              src={require("./../../../images/ScreeningServices/ComboResume.jpg")}
              alt="CoverImage"
              className="hidden lg:block w-full "
            />
          </div>
 </div>



{/* Contact us */}
<div className="flex flex-col md:flex-row justify-evenly gap-2 my-5 w-[90%] mx-auto border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
          {/* left part */}
          <div className="p-3 w-full">
            <h1 className="font-inter font-semibold text-2xl">
              Talk to our experts
            </h1>
            <img src={Image} alt="" className="hidden md:block mx-auto" />
          </div>
          {/* right part */}
          <div className="flex flex-col justify-evenly items-center w-full p-3 gap-y-4 md:gap-2">
            <div className="flex flex-col justify-center items-start md:items-center">
              <h1 className="font-inter font-semibold text-2xl">Contact Us</h1>
              <p
                className="text-lg md:text-base lg:text-xl font-light"
                style={{ fontFamily: "inter" }}
              >
                Our executive will contact your shortly
              </p>
            </div>
            <form
 onSubmit={submitContactFormData}
 className="flex flex-col gap-2 w-full sm:w-[90%] md:w-[80%]"
>
 <div className="flex flex-col items-start gap-2">
   <label
     htmlFor="name"
     className="font-inter font-semibold max-[500px]:text-xl text-2xl"
   >
     Name
   </label>
   <input
     type="text"
     name="name"
     value={name}
     onChange={handleOnChange}
     placeholder="Enter your name here"
     required
     className="px-4 py-2 outline-none border-2 rounded-lg w-full"
   />
 </div>
 <div className="flex flex-col items-start gap-2">
   <label
     htmlFor="email"
     className="font-inter font-semibold  max-[500px]:text-xl text-2xl"
   >
     Email Id
   </label>
   <input
     type="email"
     name="email"
     value={email}
     onChange={handleOnChange}
     placeholder="Enter your email here"
     required
     className="px-4 py-2 outline-none border-2 rounded-lg w-full"
   />
 </div>
 <div className="flex flex-col items-start gap-2">
   <label
     htmlFor="phoneNo"
     className="font-inter font-semibold  max-[500px]:text-xl text-2xl"
   >
     Phone Number
   </label>
   <div className="flex justify-center items-center gap-2 w-full">
     <p className="p-2 border-2 rounded-lg">+91</p>
     <input
       type="number"
       name="phoneNo"
       maxLength={10}
       value={phoneNo}
       onChange={handleOnChange}
       placeholder="Enter your phone number"
       required
       className="px-4 py-2 outline-none border-2 rounded-lg w-full hide-arrow"
     />
   </div>
 </div>

 <button
   type="submit"
   className="!bg-[#F58634] text-white py-2 mt-3 rounded-xl font-inter font-semibold text-lg flex justify-center items-center mx-auto w-[70%]"
 >
   Call Me Back
 </button>
</form>
</div>
</div>


        {/* Blog  */}
      <Blog />
      {/* Footer Section  */}
      <Footer />
    </div>
  );
};

export default ComboResume;
