import React from "react";
import image2 from "../../../images/SocialProfiler.png";
import bulleticon from "../../../images/bullet.png";
import Contactus from "../../Contactus";
import Blog from "../../Blog";
import Footer from "../../Footer";
import image from "../../../images/image 150.png";

const SocialProfiler = () => {
  return (
    <div>
      {/* hero section */}
      <div className="flex flex-col lg:flex-row h-full xl:h-[450px] max-w-[1900px] mx-auto">
        {/* left part */}
        <div className="hidden lg:block w-full lg:w-[50%] xl:w-[45%]">
          <img src={image} loading="lazy" className="w-full h-full" />
        </div>
        {/* right part */}
        <div className="font-semibold bg-[#4B57A3] flex flex-col gap-4 md:gap-y-8 justify-center lg:text-left h-full py-10 pb-16 lg:h-auto w-full lg:w-[50%] xl:w-[55%]">
          <div
            className="text-4xl text-white sm:text-[35px] lg:text-[40px] leading-[50px] sm:leading-[50px] lg:leading-[60px] xl:leading-[67px] px-6 sm:px-14"
            style={{ fontFamily: "inter" }}
          >
            Transform Your Presence with <br /> Our Social Profiler Service
          </div>

          <p className="text-2xl sm:text-[35px] lg:text-[40px] text-[#F58634] max-sm:px-5 sm:px-14 tracking-2px leading-30px sm:leading-10 lg:leading-[67px]">
            Uncover, Amplify, Succeed!
          </p>
        </div>
      </div>

      {/*  Second Section  */}

      <div className="mt-4 w-[90%] lg:w-[80%] xl:w-[70%] max-w-[1500px] mx-auto">
        <div className="flex flex-col lg:flex-row xl:items-stretch justify-between gap-y-8 w-full lg:my-10 mb-8">
          {/* Left part */}
          <div
            className="w-full md:w-[80%] mx-auto lg:w-[60%] flex flex-col gap-y-4"
            style={{ fontFamily: "poppins" }}
          >
            <p className="font-semibold text-xl max-lg:text-center sm:text-[28px] xl:text-[33px] text-black md:leading-[40px] xl:leading-[67px] lg:text-start items-center">
              Unlock Success with Social Profiles
            </p>

            <p className="text-lg md:text-xl text-black leading-8 md:leading-[40px] lg:leading-10 tracking-wide md:word-spacing-15 mx-auto text-justify">
              A social profile service is vital for shaping a positive online
              image, influencing career prospects, and networking.
              Professionally managed profiles on social media enhance your
              reputation, presenting individuals and businesses in the best
              light for success in today's digital landscape.
            </p>
          </div>

          {/* Right part */}
          <div
            className="w-[85%] sm:w-[55%] md:w-[55%] mx-auto lg:w-[35%] flex flex-col gap-y-5 xl:pt-4 lg:gap-y-6 xl:gap-y-2"
            style={{ fontFamily: "inter" }}
          >
            <h1 className="text-2xl md:text-3xl text-center font-semibold">
              Social Profiler Service
            </h1>

            <form className="flex flex-col gap-4 text-center justify-evenly text-base sm:text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 md:py-5 rounded-xl lg:rounded-none">
              <div className="mt-3 p-4 bg-[#D9D9D9]">
                <p className="text-3xl font-medium md:text-4xl lg:text-3xl text-center">
                  {" "}
                  Rs. 12999/-
                </p>
                <p>(*Applicable Taxes may apply)</p>
              </div>
              <button className="text-xl sm:text-3xl text-white w-[60%] font-medium mx-auto px-4 py-2 flex justify-center items-center rounded-xl !bg-orange-500">
                Buy Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Third Section */}

      <h1
        className="font-semibold text-3xl max-md:p-2 md:py-4 bg-[#F58634] mb-8"
        style={{ fontFamily: "inter" }}
      >
        Unlocking Success with Social Profiler
      </h1>

      {/* fourth Section*/}

      <div
        className="flex flex-col justify-center items-center mt-2 gap-y-6 w-[90%] xl:w-[70%] max-w-[1500px] mx-auto mb-6"
        style={{ fontFamily: "inter" }}
      >
        {/* <h1 className='font-medium text-3xl leading-[53px] self-start'>
                    Document Verification Services FAQs: Your Questions Answered
                </h1> */}
        <div className="flex justify-between items-center">
          <div className="w-[35%] hidden md:block">
            <img
              src={image2}
              alt=""
              className="w-[90%] object-contain mx-auto"
            />
          </div>
          <div className="flex flex-col gap-y-5 md:w-[63%]">
            <div className="text-left  flex flex-col gap-y-3">
              <h2 className="text-2xl lg:text-3xl md:leading-[42px]">
                Professional Image
              </h2>
              <p className="text-xl lg:text-2xl tracking-wide font-extralight md:leading-[40px] md:text-justify">
                Craft a polished and professional online presence
              </p>
            </div>
            <div className="text-left  flex flex-col gap-y-3">
              <h2 className="text-2xl lg:text-3xl md:leading-[42px]">
                Career Opportunities
              </h2>
              <p className="text-xl lg:text-2xl tracking-wide font-extralight md:leading-[40px] md:text-justify">
                Enhance visibility for improved job prospects and networking
              </p>
            </div>
            <div className="text-left  flex flex-col gap-y-3">
              <h2 className="text-2xl lg:text-3xl md:leading-[42px]">
                Networking Advantage
              </h2>
              <p className="text-xl lg:text-2xl tracking-wide font-extralight md:leading-[40px] md:text-justify">
                Facilitate effective networking by showcasing skills and
                achievements
              </p>
            </div>
            <div className="text-left  flex flex-col gap-y-3">
              <h2 className="text-2xl lg:text-3xl leading-[42px]">
                Visibility in Searches
              </h2>
              <p className="text-xl lg:text-2xl tracking-wide font-extralight md:leading-[40px] md:text-justify">
                Increase visibility in online searches, making it easier for
                others to find and connect with you
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FIfth Section Points */}
      <div
        className="flex flex-col justify-center items-center mt-12"
        style={{ fontFamily: "inter" }}
      >
        <h1 className="font-medium text-[25px] lg:text-[30px] leading-[42px] mb-4 px-2">
          Unlocking Your Digital Potential: How Our Social Profiler Service
          Works
        </h1>

        {/* <div className="flex justify-center"> */}
        <div className="flex justify-center align-center w-[90%] md:w-[85%] lg:w-[70%] mx-auto max-w-[1500px]">
          <div className="mt-2 p-3 sm:p-6 xl:p-8 bg-white rounded-lg [filter:drop-shadow(3px_3px_20px_#f9b685)] border-2">
            <div className="flex items-center gap-x-2 mb-4">
              <div className="w-6 h-6 mr-3">
                <img src={bulleticon} alt="" className="w-full" />
              </div>
              <p className="self-start text-lg lg:text-xl text-justify text-gray-800 font-light">
                Begin with a personalized consultation to understand your goals,
                target audience, and desired online image.
              </p>
            </div>

            <div className="flex items-center gap-x-2 mb-4">
              <div className="w-6 h-6 mr-3">
                <img src={bulleticon} alt="" className="w-full scale-[120%]" />
              </div>
              <p className="self-start text-lg lg:text-xl text-justify text-gray-800 font-light">
                Conduct a comprehensive audit of your existing social media
                profiles to identify strengths, weaknesses, and areas for
                improvement
              </p>
            </div>

            <div className="flex mb-4 gap-x-2 items-center">
              <div className="w-6 h-6 mr-3">
                <img src={bulleticon} alt="" className="w-full" />
              </div>
              <p className="self-start text-lg lg:text-xl text-justify text-gray-800 font-light">
                Evaluate the quality and relevance of your existing content,
                providing recommendations for improvement.
              </p>
            </div>

            <div className="flex gap-x-2 mb-4 items-center">
              <div className="w-6 h-6 mr-3">
                <img src={bulleticon} alt="" className="w-full" />
              </div>
              <p className="self-start text-lg lg:text-xl text-justify text-gray-800 font-light">
                Align your social media presence with your personal or
                professional brand, ensuring a cohesive and impactful image.
              </p>
            </div>

            <div className="flex gap-x-2 mb-4 items-center">
              <div className="w-6 h-6 mr-3">
                <img src={bulleticon} alt="" className="w-full" />
              </div>
              <p className="self-start text-lg lg:text-xl text-justify text-gray-800 font-light">
                Develop a strategy for engaging with your target audience,
                fostering meaningful connections and interactions.
              </p>
            </div>

            <div className="flex gap-x-2 mb-4 items-center">
              <div className="w-6 h-6 mr-3">
                <img src={bulleticon} alt="" className="w-full" />
              </div>
              <p className="self-start text-lg lg:text-xl text-justify text-gray-800 font-light">
                Generate compelling and relevant content to enhance your
                profile, including bio, posts, and visual elements.
              </p>
            </div>

            <div className="flex gap-x-2 mb-4 items-center">
              <div className="w-6 h-6 mr-3">
                <img src={bulleticon} alt="" className="w-full" />
              </div>
              <p className="self-start text-lg lg:text-xl text-justify text-gray-800 font-light">
                Implement strategies to manage and enhance your online
                reputation, addressing any negative content or misinformation.
              </p>
            </div>

            <div className="flex gap-x-2 mb-4 items-center">
              <div className="w-6 h-6 mr-3">
                <img src={bulleticon} alt="" className="w-full" />
              </div>
              <p className="self-start text-lg lg:text-xl text-justify text-gray-800 font-light">
                Regularly provide insights and analytics on the performance of
                your social media profiles, enabling informed decisions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts */}

      <Contactus />
    </div>
  );
};

export default SocialProfiler;
