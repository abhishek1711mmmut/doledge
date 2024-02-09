import React, { useState } from "react";
import { useTheme } from "@mui/material";
import Contactus from "../../Contactus";
import Blog from "../../Blog";

const InterviewPreparation = () => {
  const theme = useTheme();

  return (
    <>
      <div className="w-full h-auto mx-auto mt-2">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row  h-full 2xl:h-[330px] lg:max-h-[500px]">
          <div
            className="bg-[url('./images/Rectangle119.svg')] bg-cover bg-center flex flex-col gap-4 md:gap-y-8 justify-center lg:text-left h-full py-10 pb-16 lg:h-full w-full items-center"
          >
            <div
              className="w-full max-w-[1000px] mx-auto flex flex-col gap-y-5"
              style={{ fontFamily: "poppins" }}
            >
              <h1 className=" font-normal text-4xl leading-[50px] px-6 sm:px-12 text-start w-[95%] lg-w-[70%] mx-auto">
                Interview Ready: Elevate Your Confidence{" "}
                <br className="hidden lg:block" /> with Expert Guidance
              </h1>
              <p className="font-medium text-xl sm:text-2xl text-[#FFFFFF] px-6 sm:px-12 tracking-[2px] leading-[30px] sm:leading-10 text-start  w-[95%] lg-w-[70%] mx-auto">
                Unlock Success with Our Interview Preparation Services
              </p>
            </div>
          </div>
        </div>

        {/*  Second Section  */}

        <div className="p-1 mt-4 lg:w-3/4  max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-y-5 lg:gap-x-5 w-full lg:my-10 mb-8">
            {/* Left part */}
            <div className="w-full lg:w-[70%] xl:w-[65%] flex flex-col gap-y-10 xl:gap-y-4 xl:p-7">
              <p className="font-medium  text-xl sm:text-3xl md:text-[33px] lg:text-[34px] text-black  md:leading-10 tracking-[2px] text-start  items-center  px-3 md:px-5">
                Why Interview Preparation Matters?
              </p>

              <p
                className="text-lg md:text-xl text-start  text-black leading-8 lg:leading-10 tracking-wider lg:tracking-widest lg:p-2  md:[word-spacing:15px] px-3 md:px-5 mx-auto font-light"
                style={{ fontFamily: "poppins" }}
              >
                It ensures candidates are ready to articulate their
                achievements, align with company values, and stand{" "}
                <br className="hidden 2xl:block" /> out to employers.
                Comprehensive preparation significantly improves the chances of
                making a positive and lasting impression.
              </p>
            </div>

            {/*  Right part*/}
            <div className="w-[85%] sm:w-[55%] mx-auto lg:w-[35%] flex flex-col gap-y-5 lg:gap-y-2">
              <h1 className=" text-2xl md:text-4xl lg:text-[22px] font-medium text-center">
                Interview Preparation Service
              </h1>

              <form className="flex flex-col gap-4 text-center justify-evenly text-base sm:text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 md:py-5 rounded-xl lg:rounded-none">
                <div className="h-2"></div>
                <div className="mt-3 mb-3 p-4 bg-[#D9D9D9] ">
                  <p className="text-3xl font-medium md:text-4xl lg:text-3xl text-center">
                    {" "}
                    Rs. 12999/-
                  </p>
                  <em>(*Applicable Taxes may apply)</em>
                </div>
                <button className="text-xl sm:text-3xl text-white w-[60%] font-medium mx-auto px-4 py-2 flex justify-center items-center rounded-xl !bg-orange-500">
                  Buy Now
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Section-3  */}
        <div className=" mt-14 lg:w-3/4 max-w-[1500px] mx-auto">
          <h1 className="font-semibold sm:text-xl md:text-2xl lg:text-3xl px-2 py-2 xl:py-5 ">
            Mastering the Art of Interview Practice: Your Guide to Success
          </h1>
          <div className="text-center" style={{ fontFamily: "poppins" }}>
            <div className="flex flex-col flex-wrap items-center lg:items-stretch lg:justify-center lg:flex-row gap-10 mx-auto  p-5">
              <div className="flex flex-col gap-2 p-3 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-[40%] min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/Prep1.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto  w-[80%]"
                />

                <p className="text-xl  text-[#000000] leading-8 tracking-wide ">
                  Research Company and Job Description
                </p>
              </div>
              <div className="flex flex-col gap-2 p-3 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-[40%] min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/Prep2.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto w-[80%]"
                />

                <p className="text-xl  text-[#000000] leading-8  tracking-wide">
                  Mock Interviews
                </p>
              </div>

              <div className="flex flex-col gap-2 p-3 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-[40%] min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/Prep3.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto w-[80%]"
                />

                <p className="text-xl  text-[#000000] leading-8  tracking-wide ">
                  Prepare Thoughtful Questions
                </p>
              </div>
              <div className="flex flex-col gap-2 p-3 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-[40%] min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/Prep4.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto w-[80%]"
                />

                <p className="text-xl  text-[#000000] leading-8  tracking-wide">
                  Incorporate Feedback from Mock Interviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  Interview Prep Section  */}

        <div className="pt-7">
          <h1 className="bg-[#F58634] font-semibold sm:text-lg md:text-2xl lg:text-3xl py-3">
            Decoding Interview Preparation: A Strategic Approach to Success
          </h1>

          <div className="flex gap-x-1 xl:gap-x-4  w-[90%] lg:w-3/4 max-w-[1500px] justify-center items-center mx-auto py-5">
            <div className="hidden md:block w-[40%]">
              <img
                src={require("./../../../images/ScreeningServices/pic.jpg")}
                alt=""
                className=" h-full"
              />
            </div>

            <div className="w-[95%] lg:w-[70%] xl:w-[60%]">
              <p
                className="text-lg md:text-xl text-justify  text-black font-light leading-6 lg:leading-9  xl:leading-10 tracking-wide lg:p-2 [word-spacing:14px] px-3 md:px-5 mx-auto"
                style={{ fontFamily: "poppins" }}
              >
                Interview preparation involves strategic planning and practice
                to enhance one's readiness for a job interview. It includes
                researching the company, understanding the job role, developing
                responses to common and behavioral questions, practicing with
                mock interviews, refining communication and body language, and
                seeking feedback for continuous improvement. The goal is to
                present oneself confidently and effectively during the interview
                process.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Contact us */}
        <Contactus />

        <Blog />

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default InterviewPreparation;
