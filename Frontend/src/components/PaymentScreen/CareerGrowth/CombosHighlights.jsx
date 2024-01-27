import React, { useState } from "react";
import Rectangle105 from "../../../images/CombosHighlights/Rectangle105.png";
import Blog from "../../Blog";
import Footer from "../../Footer";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../../../images/JobSearch1.png";
import image87 from "../../../images/CombosHighlights/image87.png";

const CombosHighlights = () => {
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
    <div className="w-full">
      {/*********************** herobanner **********************/}
      <div className="relative ">
        <img
          src={Rectangle105}
          alt="Rectangle105"
          className="h-[275px] w-full"
        />

        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center">
          <div className="px-2 text-center text-2xl font-bold text-black [font-family:'Inter'] md:text-3xl">
            Unleash the Power of Your Professional Story!
          </div>

          <div className="[font-family:'Inter] mt-4 px-2 text-center text-2xl font-medium text-black md:text-3xl">
            Revolutionize Your Career
          </div>
        </div>
      </div>

      <div className="border-1 mx-auto flex flex-col items-center shadow-xl sm:h-[1714px]">
        <div className="mx-auto mt-[13px] flex w-[270px] items-center justify-center rounded-[15px] bg-[#F58634] hover:bg-black sm:w-[350px] md:w-[450px] lg:w-[570px] xl:w-[641px]">
          <div className="font-inter text-2xl font-semibold leading-[65px]  text-white sm:text-3xl sm:leading-[75px] md:text-4xl md:leading-[100px]">
            Combo Highlights
          </div>
        </div>

        {/********************* table  ***********************/}
        <div className=" mx-auto w-[90%] pt-[60px] sm:pt-[76px] md:w-[70%]">
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-separate  sm:h-[1043px]">
              <thead className="align-middle ">
                <tr>
                  <th className="border-1 border-gray-300  !bg-[#4472c4] text-center text-2xl text-white sm:py-6">
                    Doledge Benefits
                  </th>
                  <th className="border-1 border-gray-300  !bg-[#4472c4] text-center text-xl !text-white">
                    Highlight Your Resume Rs.3599/-
                  </th>
                  <th className="border-1 border-gray-300  !bg-[#4472c4] text-center text-xl !text-white">
                    Zap Your Resume Rs.5299/-
                  </th>
                </tr>
              </thead>
              <tbody className="bg-slate-200  text-lg">
                <tr className="">
                  <td className="benefit border-2 border-gray-300  pl-1 text-left">
                    Ensuring recruiters focus on your most impactful
                    qualifications
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5 ">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="border-2 border-gray-300 pl-1 text-left">
                    Visual elements to enhance the overall look of your resume
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="border-2 border-gray-300 pl-1 text-left">
                    Match the specific requirements of your target industry or
                    job application
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                </tr>

                <tr className="">
                  <td className="border-2 border-gray-300 pl-1 text-left">
                    Optimize your resume for Applicant Tracking Systems [ATS].
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                </tr>

                <tr className="">
                  <td className="border-2 border-gray-300 pl-1 text-left">
                    Incorporate quantifiable metrices to highlight your
                    achievements
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                </tr>

                <tr className="">
                  <td className="border-2 border-gray-300 pl-1 text-left">
                    Showcase your proficiency with technology by incorporating
                    innovative design elements and digital enhancements
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="border-2 border-gray-300 pl-1 text-left">
                    Streamline the resume creation process with profesional
                    assistance
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="border-2 border-gray-300 pl-1 text-left">
                    Enhanced exposure to an extensive network of over 100,000
                    recruiters, expanding your professional reach
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                </tr>
                <tr className="">
                  <td className="border-2 border-gray-300 pl-1 text-left">
                    Expertly crafted profile for a standard presentation,
                    ensuring a more compelling and responsive appeal.
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    {" "}
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                  <td className="border-2 border-gray-300 text-center  sm:px-5">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ color: "green" }}
                      size="xl"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/************************ combo offer section *********************/}
        <div className=" h-[465px] w-[90%] pt-[10px] sm:pt-[10px] md:w-[70%]">
          <div className=" flex h-[465px] sm:flex-row">
            <div className=" w-full sm:w-1/2  md:h-[465px]">
              <div className="non-italic mt-4  text-3xl font-semibold  tracking-[0] text-black [font-family:'Poppins-SemiBold',Helvetica] sm:ml-5 sm:text-left md:mt-4 ">
                Combo Offer
              </div>
              <div className="non-italic mt-3 text-xl font-medium tracking-[0] text-black [font-family:'Poppins-SemiBold',Helvetica] sm:ml-5 sm:text-left md:pr-7 lg:mt-4 lg:text-2xl">
                Highlight Your Resume + Zap Your Resume
              </div>

              <div className="non-italic mt-3 text-3xl font-semibold  tracking-[0] text-black [font-family:'Poppins-SemiBold',Helvetica] sm:ml-5 sm:text-left md:mt-5">
                Rs. <span className="line-through">8898/</span>-
              </div>
              <div className="non-italic mt-3 text-3xl font-semibold  tracking-[0] text-black [font-family:'Poppins-SemiBold',Helvetica] sm:ml-5 sm:text-left lg:mt-4">
                Rs. 7799/-
              </div>
              <div className="non-italic mt-3 text-2xl font-medium tracking-[0]  text-black [font-family:'Poppins-SemiBold',Helvetica] sm:ml-5 sm:text-left sm:text-xl lg:mt-4 lg:text-2xl ">
                {" "}
                You Save - Rs.1099
              </div>
              <div className="non-italic mt-4 text-base font-normal tracking-[0] text-black [font-family:'Inter-Regular',Helvetica]  sm:ml-5 sm:text-left md:ml-6 lg:text-lg ">
                {" "}
                (*Applicable Taxes may apply)
              </div>

              <div className="mx-auto mt-4  flex h-12 w-44 items-center justify-center rounded-2xl bg-[#F58634]  hover:bg-black sm:ml-6">
                <button
                  type="submit"
                  className=" font-family:'Inter-Regular',Helvetica text-justify text-2xl font-semibold text-[#FFF8F8]"
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className=" flex justify-end sm:w-1/2 md:h-[465px] ">
              <img
                src={image87}
                alt="image87"
                className="lg:w-9/10 mt-1 hidden sm:block sm:h-3/5 sm:w-4/5 lg:h-4/5 xl:h-[401px] xl:w-[401px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/********************  Contact us *************************/}
      <div className="mx-auto w-[90%] pt-16 md:w-[70%]">
        <div className="mx-auto my-5 flex w-[100%] flex-col justify-evenly gap-2 rounded-xl border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:flex-row">
          {/********************* left part *************************/}
          <div className="w-full p-3">
            <h1 className="font-inter text-2xl font-semibold">
              Talk to our experts
            </h1>
            <img src={Image} alt="" className="mx-auto hidden md:block" />
          </div>
          {/**********************  right part *******************/}
          <div className="flex w-full flex-col items-center justify-evenly gap-y-4 p-3 md:gap-2">
            <div className="flex flex-col items-start justify-center md:items-center">
              <h1 className="font-inter text-2xl font-semibold">Contact Us</h1>
              <p
                className="text-lg font-light md:text-base lg:text-xl"
                style={{ fontFamily: "inter" }}
              >
                Our executive will contact your shortly
              </p>
            </div>
            <form
              onSubmit={submitContactFormData}
              className="flex w-full flex-col gap-2 sm:w-[90%] md:w-[80%]"
            >
              <div className="flex flex-col items-start gap-2">
                <label
                  htmlFor="name"
                  className="font-inter text-2xl font-semibold max-[500px]:text-xl"
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
                  className="w-full rounded-lg border-2 px-4 py-2 outline-none"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label
                  htmlFor="email"
                  className="font-inter text-2xl  font-semibold max-[500px]:text-xl"
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
                  className="w-full rounded-lg border-2 px-4 py-2 outline-none"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <label
                  htmlFor="phoneNo"
                  className="font-inter text-2xl  font-semibold max-[500px]:text-xl"
                >
                  Phone Number
                </label>
                <div className="flex w-full items-center justify-center gap-2">
                  <p className="rounded-lg border-2 p-2">+91</p>
                  <input
                    type="number"
                    name="phoneNo"
                    maxLength={10}
                    value={phoneNo}
                    onChange={handleOnChange}
                    placeholder="Enter your phone number"
                    required
                    className="hide-arrow w-full rounded-lg border-2 px-4 py-2 outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mx-auto mt-3 flex w-[70%] items-center justify-center rounded-xl !bg-[#F58634] py-2 font-inter text-lg font-semibold text-white "
              >
                Call Me Back
              </button>
            </form>
          </div>
        </div>
      </div>

      {/************************ Blog *****************************/}
      {/* <Blog className="mx-auto  w-[90%] md:w-[70%]" /> */}
      {/********************************** Footer ****************************/}
      {/* <Footer className="mx-auto  w-[90%] md:w-[70%]" /> */}
    </div>
  );
};

export default CombosHighlights;
