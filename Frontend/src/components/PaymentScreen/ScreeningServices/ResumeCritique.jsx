import React, { useState } from "react";
import { useTheme } from "@mui/material";
import Blog from "./../../Blog";
import Footer from "./../../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "./../../../images/JobSearch1.png";
import "@fontsource/sintony";

const ResumeCritique = () => {
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
      <div className="w-full h-auto mx-auto">
        {/*  First Section */}
        <div className="w-full flex flex-col md:flex lg:flex-row">
          <div className="bg-[#F58634] w-[100%] flex justify-center flex-col pt-4 sm:pt-0 lg:w-[50%]">
            <div className=" w-[100%] sm:w-[90%] 2xl:w-[80%] text-left  px-5 p-3 pb-5 mt-2">
              <div className="text-black text-4xl xl:text-5xl font-medium leading-[45px] lg:leading-[55px]">
                Unlock Your Potential with Professional Resume Critique Services{" "}
              </div>
            </div>

            <p
              className=" w-[100%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] text-[#FFFFFF] font-bold text-[1.3rem] text-justify px-5  lg:tracking-widest xl:[word-spacing:5px] pb-4 sm:pb-0 "
              style={{ fontFamily: "Sintony" }}
            >
              Elevate your career prospects with personalized feedback on
              formatting, content, and strategic presentation. Secure your dream
              job with a standout resume.
            </p>
          </div>

          <div
            className="w-full flex justify-center
        lg:w-[50%]"
          >
            <img
              src={require("./../../../images/ScreeningServices/CoverImage.jpg")}
              alt="CoverImage"
              className="hidden lg:block w-full h-auto"
            />
          </div>
        </div>

        {/*  Second Section  */}

        <div className="p-1 md:mt-4">
          <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 w-full lg:my-10 mb-8">
            {/* left part */}
            <div className="w-full lg:w-[60%] xl:w-[50%] flex flex-col gap-y-10  py-3 lg:py-10  ">
              <p className="text-[1.7rem] text-justify  text-black leading-8 lg:leading-10 xl:tracking-wide lg:p-10 lg:[word-spacing:12px] px-5 py-3">
                Investing in a professional resume critique service provides
                valuable insights and transforms your resume into a powerful
                tool for career success. Invest in Doledge Resume Critique
                Services to unlock the full potential of your resume and advance
                your career with confidence.
              </p>
            </div>

            <div className="w-[70%] sm:w-[50%] mx-auto lg:w-[25%] flex flex-col gap-y-5 lg:gap-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-3xl text-center">
                Resume Critique Service
              </h1>

              <form className="flex flex-col gap-4 text-center justify-evenly text-base sm:text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 md:py-5 rounded-xl lg:rounded-none">
                <div className="mb-3 mt-3  p-4 bg-[#D9D9D9] ">
                  <p className="text-3xl font-medium md:text-4xl lg:text-3xl text-center">
                    {" "}
                    Rs. 2199/-
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

        {/* section 3 */}
        <div className="pt-4">
          <h1 className="bg-[#62B01E9C] font-semibold sm:text-lg md:text-2xl lg:text-3xl py-3">
            Benefits of Doledge Job Search Assistant Services
          </h1>
          <table className="table table-bordered table-striped table-auto !w-[70%] mx-auto my-10">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-center !bg-[#4472c4] !text-white"
                >
                  Benefits
                </th>
                <th
                  scope="col"
                  className="text-center !bg-[#4472c4] !text-white"
                >
                  Free Service
                </th>
                <th
                  scope="col"
                  className="text-center !bg-[#4472c4] !text-white"
                >
                  Paid Service
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="benefit">Apply to Jobs on Doledge</td>
                <td className="text-center sm:px-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                    size="xl"
                  />
                </td>
                <td className="text-center sm:px-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                    size="xl"
                  />
                </td>
              </tr>
              <tr className="">
                <td className="benefit">Tailored Recommendations</td>
                <td className="text-center sm:px-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: "red" }}
                    size="xl"
                  />
                </td>
                <td className="text-center sm:px-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                    size="xl"
                  />
                </td>
              </tr>
              <tr className="">
                <td className="">Strategic Content Enhancement</td>
                <td className="text-center sm:px-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: "red" }}
                    size="xl"
                  />
                </td>
                <td className="text-center sm:px-5">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                    size="xl"
                  />
                </td>
              </tr>
              <tr className="">
                <td className="">Professional Formatting</td>
                <td className="text-center sm:px-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: "red" }}
                    size="xl"
                  />
                </td>
                <td className="text-center sm:px-5">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                    size="xl"
                  />
                </td>
              </tr>

              <tr className="">
                <td className=""> Career Advancement</td>
                <td className="text-center sm:px-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: "red" }}
                    size="xl"
                  />
                </td>
                <td className="text-center sm:px-5">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                    size="xl"
                  />
                </td>
              </tr>

              <tr className="">
                <td className="">Identify areas for growth and development</td>
                <td className="text-center sm:px-5">
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: "red" }}
                    size="xl"
                  />
                </td>
                <td className="text-center sm:px-5">
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                    size="xl"
                  />
                </td>
              </tr>

              <tr className="">
                <td className="">
                  creating a more compelling and effective resume
                </td>
                <td className="text-center sm:px-5">
                  {" "}
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ color: "red" }}
                    size="xl"
                  />
                </td>
                <td className="text-center sm:px-5">
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

        {/*   Unlocling Career Success */}
        <div className="mt-12">
          <h1 className="font-semibold sm:text-lg md:text-2xl lg:text-3xl p-2">
            Unlocking Career Success: The Crucial Role of Resume Critique
            Services
          </h1>
          <div className="text-center m-2">
            <div className="flex flex-col items-center lg:justify-center lg:flex-row gap-10 xl:gap-8 w-full mx-auto p-5">
              <div className="flex flex-col gap-2 p-3 py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-full min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/1.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h1 className="font-medium text-[#000000] text-3xl p-2">
                  Expert Assessment
                </h1>
                <p className="text-xl  text-[#000000] leading-8 lg:leading-10 tracking-wide lg:p-7">
                  Receive a comprehensive analysis of your resume by industry
                  experts for valuable insights.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-3 py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-full min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/3.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h1 className="font-medium text-[#000000] text-3xl p-2">
                  Improved Visibility
                </h1>
                <p className="text-xl  text-[#000000] leading-8 lg:leading-10 tracking-wide lg:p-7">
                  Enhance your resume's visibility to recruiters, increasing
                  your chances of being shortlisted.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-3 py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-full min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/2.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h1 className="font-medium text-[#000000] text-3xl p-2">
                  Professional Formatting
                </h1>
                <p className="text-xl  text-[#000000] leading-8 lg:leading-10 tracking-wide lg:p-7">
                  Elevate the visual appeal of your resume with expert advice on
                  layout and design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Services Section  */}
        <div className="pt-7">
          <h1 className="bg-[#F58634] font-semibold sm:text-lg md:text-2xl lg:text-3xl py-3">
            Doledge Premium Services
          </h1>
          <div className="my-6 text-center m-2 ">
            <div className="flex flex-col items-center lg:justify-center lg:flex-row gap-10  w-full mx-auto p-5 ">
              <div className="flex flex-col gap-2 p-3 py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-full min-h-[350px] rounded-xl">
                <h1 className="font-medium text-[#000000] text-3xl p-2">
                  Highlight Your Resume
                </h1>
                <p className="text-xl  text-[#000000] leading-8 lg:leading-10 tracking-wide lg:p-7">
                  Attract recruiters' attention with a standout resume,
                  increasing your chances of landing interviews. Let our service
                  spotlight your strengths, ensuring your application stands out
                  in the competitive job market.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-3 py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-full min-h-[350px] rounded-xl">
                <h1 className="font-medium text-[#000000] text-3xl p-2">
                  Job Search Assistant
                </h1>
                <p className="text-xl  text-[#000000] leading-8 lg:leading-10 tracking-wide lg:p-7">
                  Receive tailored job recommendations, refine your search
                  criteria, and stay organized with application tracking. Let
                  our assistant guide you towards your ideal career
                  opportunities.
                </p>
              </div>
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

export default ResumeCritique;
