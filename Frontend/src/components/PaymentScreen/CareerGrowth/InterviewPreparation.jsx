import React, { useState } from "react";
import { useTheme } from "@mui/material";
import Blog from "./../../Blog";
import Footer from "./../../Footer";
import Image from "./../../../images/JobSearch1.png";

const InterviewPreparation = () => {
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
    <>
      <div className="w-full h-auto mx-auto mt-2">

        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row  h-full 2xl:h-[40vh] lg:max-h-[450px]">
          <div className="bg-gradient-to-tr from-orange-500 to-amber-400 flex flex-col gap-4 md:gap-y-8 justify-center lg:text-left h-full py-10 pb-16 lg:h-auto w-full items-center">
            <h1 className=" font-normal text-4xl sm:text-5xl leading-[50px] sm:leading-[75px] px-6 sm:px-12 text-start w-[95%] lg-w-[70%] xl:w-[80%] 2xl:w-[55%]">
              Interview Ready: Elevate Your Confidence with Expert Guidance
            </h1>
            <p className="font-medium text-xl sm:text-3xl text-[#FFFFFF] px-6 sm:px-12 tracking-[2px] leading-[30px] sm:leading-10 text-start  w-[95%] lg-w-[70%] xl:w-[80%] 2xl:w-[55%]">
              Unlock Success with Our Interview Preparation Services
            </p>
          </div>
        </div>


        {/*  Second Section  */}

        <div className="p-1 mt-4">
          <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 w-full lg:my-10 mb-8">
            {/* Left part */}
            <div className="w-full lg:w-[70%] xl:w-[60%] flex flex-col gap-y-10 xl:gap-y-4 py-5 xl:p-7">
              <p className="font-medium  text-xl sm:text-3xl md:text-4xl text-black  md:leading-10 tracking-[2px] text-start  items-center  px-3 md:px-5">
                Why Interview Preparation Matters?
              </p>

              <p className="text-lg md:text-xl lg:text-2xl text-start  text-black leading-8 lg:leading-10 tracking-wider lg:tracking-widest lg:p-2  md:[word-spacing:15px] px-3 md:px-5 mx-auto">
                It ensures candidates are ready to articulate their
                achievements, align with company values, and stand out to
                employers. Comprehensive preparation significantly improves the
                chances of making a positive and lasting impression.
              </p>
            </div>

            {/*  Right part*/}
            <div className="w-[85%] sm:w-[55%] mx-auto lg:w-[27%] flex flex-col gap-y-5 lg:gap-y-2">
              <h1 className=" text-2xl md:text-4xl lg:text-3xl text-center">
                Interview Preparation Service
              </h1>

              <form className="flex flex-col gap-4 text-center justify-evenly text-base sm:text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 md:py-5 rounded-xl lg:rounded-none">
                <div className="mt-3 mb-3 p-4 bg-[#D9D9D9] ">
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

        {/* Section-3  */}
        <div className=" mt-14">
          <h1 className="font-semibold sm:text-xl md:text-2xl lg:text-3xl px-2 py-2 xl:py-5 lg:mb-5">
            Mastering the Art of Interview Practice: Your Guide to Success
          </h1>
          <div className="text-center m-2">
            <div className="flex flex-col flex-wrap items-center lg:justify-center lg:flex-row gap-10 xl:gap-x-[15rem] w-[90%] mx-auto  p-3 ">
              <div className="flex flex-col gap-2 p-3 py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-[30%] min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/Prep1.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto  w-[80%]"
                />

                <p className="text-xl  text-[#000000] leading-8 tracking-wide lg:p-7">
                  Research Company and Job Description
                </p>
              </div>
              <div className="flex flex-col gap-2 p-3 py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-[30%] min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/Prep2.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto w-[80%]"
                />

                <p className="text-xl  text-[#000000] leading-8  tracking-wide lg:p-7">
                  Mock Interviews
                </p>
              </div>

              <div className="flex flex-col gap-2 p-3 py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-[30%] min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/Prep3.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto w-[80%]"
                />

                <p className="text-xl  text-[#000000] leading-8  tracking-wide lg:p-7">
                  Prepare Thoughtful Questions
                </p>
              </div>
              <div className="flex flex-col gap-2 p-3 py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-[30%] min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/Prep4.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto w-[80%]"
                />

                <p className="text-xl  text-[#000000] leading-8  tracking-wide lg:p-6">
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

          <div className="flex gap-x-1 xl:gap-x-4  w-[90%]  justify-center items-center mx-auto py-5">
            <div className="hidden md:block w-[50%]">
              <img
                src={require("./../../../images/ScreeningServices/pic.jpg")}
                alt=""
                className=" w-[100%] 2xl:w-[90%] h-auto"
              />
            </div>

            <div className="w-[95%] lg:w-[70%] xl:w-[60%]">
              <p className="text-lg md:text-xl lg:text-2xl text-justify  text-black leading-6 lg:leading-9  xl:leading-10 tracking-wide lg:tracking-wider 2xl:tracking-widest lg:p-2 [word-spacing:14px] px-3 md:px-5 mx-auto">
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

        <Blog />

        <Footer />
      </div>
    </>
  );
};

export default InterviewPreparation;
