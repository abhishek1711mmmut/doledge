import React, { useState } from "react";
import Rectangle105 from "../../../images/CombosHighlights/Rectangle105.png";
import Blog from "../../Blog";
import Footer from "../../Footer";
import { faCheck, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../../../images/JobSearch1.png";
import image87 from "../../../images/CombosHighlights/image87.png";
import Contactus from "../../Contactus";

const CombosHighlights = () => {

  return (
    <div className="w-full">
      {/*********************** herobanner **********************/}
      <div className="relative max-w-[1900px] mx-auto">
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

      <div className="border-1 mx-auto flex flex-col items-center shadow-xl">
        <div className="mx-auto mt-[13px] flex w-[270px] items-center justify-center rounded-[15px] bg-[#F58634] sm:w-[350px] md:w-[450px] lg:w-[570px] xl:w-[641px]">
          <div className="font-inter text-2xl font-semibold leading-[65px]  text-white sm:text-3xl sm:leading-[75px] md:text-4xl md:leading-[100px]">
            Combo Highlights
          </div>
        </div>

        {/********************* table  ***********************/}
        <div className=" mx-auto w-[90%] pt-[60px] sm:pt-[76px] md:w-[80%] lg:w-[70%] max-w-[1500px]">
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-white sm:h-[1043px] xl:h-[800px]">
              <thead className="align-middle ">
                <tr>
                  <th className="border-1 border-white  !bg-[#4472c4] text-center text-2xl text-white sm:py-6">
                    Doledge Benefits
                  </th>
                  <th className="border-1 border-white  !bg-[#4472c4] text-center text-xl !text-white">
                    Highlight Your Resume Rs.3599/-
                  </th>
                  <th className="border-1 border-white  !bg-[#4472c4] text-center text-xl !text-white">
                    Zap Your Resume Rs.5299/-
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#f2f2f2] border-white text-lg">
                <tr className="">
                  <td className="benefit border-2 border-white  pl-3 text-left">
                    Ensuring recruiters focus on your most impactful
                    qualifications
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5 ">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                </tr>
                <tr className="">
                  <td className="border-2 border-white pl-3 text-left">
                    Visual elements to enhance the overall look of your resume
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                </tr>
                <tr className="">
                  <td className="border-2 border-white pl-3 text-left">
                    Match the specific requirements of your target industry or
                    job application
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                  <td className="border-2 border-white text-center sm:px-5">
                  <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                </tr>

                <tr className="">
                  <td className="border-2 border-white pl-3 text-left">
                    Optimize your resume for Applicant Tracking Systems [ATS].
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                  <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                </tr>

                <tr className="">
                  <td className="border-2 border-white pl-3 text-left">
                    Incorporate quantifiable metrices to highlight your
                    achievements
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                </tr>

                <tr className="">
                  <td className="border-2 border-white pl-3 text-left">
                    Showcase your proficiency with technology by incorporating
                    innovative design elements and digital enhancements
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                </tr>
                <tr className="">
                  <td className="border-2 border-white pl-3 text-left">
                    Streamline the resume creation process with profesional
                    assistance
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                </tr>
                <tr className="">
                  <td className="border-2 border-white pl-3 text-left">
                    Enhanced exposure to an extensive network of over 100,000
                    recruiters, expanding your professional reach
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                </tr>
                <tr className="">
                  <td className="border-2 border-white pl-3 text-left">
                    Expertly crafted profile for a standard presentation,
                    ensuring a more compelling and responsive appeal.
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                  <td className="border-2 border-white text-center  sm:px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" height={30} width={30} className="mx-auto" viewBox="0 0 512 512"><path fill="green" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/************************ combo offer section *********************/}
        <div className="w-[90%] pt-[10px] sm:pt-[10px] md:w-[70%] max-w-[1500px]">
          <div className="flex sm:flex-row">
            <div className="w-full sm:w-[70%]">
              <div className="non-italic mt-4 text-3xl font-semibold tracking-[0] text-black [font-family:'Poppins-SemiBold',Helvetica] sm:ml-5 sm:text-left md:mt-4">
                Combo Offer
              </div>
              <div className="non-italic mt-3 text-xl font-medium tracking-[0] text-black [font-family:'Poppins-SemiBold',Helvetica] sm:ml-5 sm:text-left md:pr-7 lg:mt-4 lg:text-2xl" style={{fontFamily:'poppins'}}>
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

              <div className="mt-4 max-sm:mx-auto max-sm:mb-5 md:translate-x-[10%] lg::translate-x-[15%] sm:tram flex h-12 w-44 items-center justify-center rounded-2xl bg-[#F58634]  hover:bg-black sm:ml-6">
                <button
                  type="submit"
                  className="font-family:'Inter-Regular',Helvetica text-justify text-2xl font-semibold text-[#FFF8F8]"
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className=" flex justify-end md:h-[465px] w-fit">
              <img
                src={image87}
                alt="image87" 
                className=" mt-1 hidden sm:block sm:h-3/5 sm:w-4/5 lg:h-4/5 xl:h-[401px] xl:w-[401px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/********************  Contact us *************************/}
      <Contactus/>
      <Blog/>
    </div>
  );
};

export default CombosHighlights;
