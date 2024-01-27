import React, {useState} from "react";
import { useTheme } from "@mui/material";
import Blog from "./../../Blog";
import Footer from "./../../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Contact from "../../Contact";


const ComboResume = () => {
  const theme = useTheme();

  return (
    <div className="w-full h-auto mx-auto pt-2">

     {/* Section 1 */}
     <div className="flex flex-col lg:flex-row  h-full 2xl:h-[45vh] lg:max-h-[450px]  xl:mb-4  2xl:mb-6">
     
      <img
          src={require("./../../../images/ScreeningServices/Background.png")}
          alt="Verification"
          className="object-cover w-full h-auto"
        />
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
                  className="text-center !text-black  text-base sm:text-xl md:text-2xl lg:text-3xl "
                >
                 Text Resume
                  <p className="text-base  md:text-xl xl:text-2xl  md:m-2 font-medium">Rs. 5899/-</p>
                </th>
                <th
                  scope="col"
                  className="text-center !text-black text-base sm:text-xl  md:text-2xl lg:text-3xl"
                >
                Visual Resume
                  <p className="text-base  md:text-xl xl:text-2xl  md:m-2 font-medium">Rs. 7999/-</p>
                </th>
                <th
                  scope="col"
                  className="text-center !text-black text-base sm:text-xl  md:text-2xl  lg:text-3xl "
                >
                International Resume
                  <p className="text-base  md:text-xl xl:text-2xl md:m-2 font-medium">Rs. 15999/-</p>
                </th>
               
              </tr>
            </thead>
            <tbody>
              <tr className="mt-2">
                <td className=" text-xs sm:text-base  md:text-lg lg:text-xl text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"2px"}}
                   size="md"
                 /> Professional Presentation</td>
               <td className="text-start   text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 /> Eye-Catching Design</td>
                 <td className="text-start  text-xs sm:text-base  md:text-lg lg:text-xl">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 />Global Standards Compliance</td>
              </tr>

              <tr className="">
                <td className=" text-xs sm:text-base  md:text-lg lg:text-xl text-start">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"2px"}}
                   size="md"
                 /> Concise and Clear Information</td>
               <td className="text-start  text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 /> Enhanced Storytelling</td>
                 <td className="text-start  text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 />Cultural Sensitivity</td>
              </tr>

              <tr className="mt-2">
                <td className="   text-xs sm:text-base  md:text-lg lg:text-xl text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"2px"}}
                   size="md"
                 /> Customization for Targeted Roles</td>
               <td className="text-start  text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 /> Increased Visual Impact</td>
                 <td className="text-start   text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 />Language Optimization</td>
              </tr>


              <tr className="mt-2">
                <td className=" text-xs sm:text-base  md:text-lg lg:text-xl text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"2px"}}
                   size="md"
                 /> Quantifiable Achievements</td>
               <td className="text-start  text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 /> Highlight Key Achievements</td>
                 <td className="text-start  text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 />Format Adaptation</td>
              </tr>


              <tr className="mt-2">
                <td className="  text-xs sm:text-base  md:text-lg lg:text-xl text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"2px"}}
                   size="md"
                 /> Increased Readability</td>
               <td className="text-start text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 /> Infographic Elements</td>
                 <td className="text-start text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 />Global Networking Strategies</td>
              </tr>


              <tr className="mt-2">
                <td className="text-xs sm:text-base  md:text-lg lg:text-xl text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"2px"}}
                   size="md"
                 /> Standout Appeal</td>
               <td className="text-start text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 /> Modern and Innovative Image</td>
                 <td className="text-start text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 />Understanding Visa and Work Authorization Requirements</td>
              </tr>

              

              <tr className="mt-2">
                <td className=" text-xs sm:text-base  md:text-lg lg:text-xl text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"2px"}}
                   size="md"
                 /> Career Confidence Boost</td>
               <td className="text-start text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 /> Online Portfolio Integration</td>
                 <td className="text-start text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 />Industry-Specific Insights</td>
              </tr>

              <tr className="mt-2">
                <td className="  text-xs sm:text-base  md:text-lg lg:text-xl text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"2px"}}
                   size="md"
                 /> ATS Compatibility</td>
               <td className="text-start  text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 /> Increased Engagement</td>
                 <td className="text-start  text-xs sm:text-base  md:text-lg lg:text-xl">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 />Understanding Global Job Market Trends</td>
              </tr>

              <tr className="mt-2">
                <td className=" text-xs sm:text-base  md:text-lg lg:text-xl text-start ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red", marginRight:"2px"}}
                   size="md"
                 /> Professional Presentation</td>
               <td className="text-start  text-xs sm:text-base  md:text-lg lg:text-xl ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 /> Online Portfolio Integration</td>
                 <td className="text-start text-xs sm:text-base  md:text-lg lg:text-xle ">
                <FontAwesomeIcon
                    icon={faArrowRight}
                   style={{ color: "red",marginRight:"2px" }}
                   size="md"
                 />International Job Search Strategies</td>
              </tr>

              <tr className="mt-2">
                <td className="text-right ">
                <button className="text-xs  sm:text-lg md:text-xl  text-black w-max-content font-medium mx-auto px-1 sm:px-2 md:px-4 py-1 justify-center  rounded-3xl bg-[#62B01E]">
                Know more   
                </button></td>
                <td className="text-right">
                <button className="text-xs sm:text-lg md:text-xl  text-black w-max-content font-medium mx-auto   px-1 sm:px-2 md:px-4 py-1 justify-center   rounded-3xl bg-[#62B01E]">
                Know more
                </button></td>
                <td className="text-right">
                <button className="text-xs sm:text-lg md:text-xl  text-black w-max-content font-medium mx-auto  px-1 sm:px-2 md:px-4 py-1 justify-center   rounded-3xl bg-[#62B01E]">
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
                <li className='text-right  mt-8 text-lg sm:text-xl md:text-2xl  xl:text-3xl font-semibold '>
             Rs. <span className="line-through">31796</span>/-
                </li>

             
                <li className='flex gap-2 md:gap-5 justify-between md:mt-4 text-lg sm:text-xl p-2  md:text-2xl xl:text-3xl font-semibold '>
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
<Contact/> 

{/* Blog  */}
{/* <Blog /> */}

{/* Footer Section  */}
{/* <Footer /> */}


    </div>
  );
};

export default ComboResume;
