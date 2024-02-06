import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "@fontsource/sintony";
import Contactus from "../../Contactus";

const ResumeCritique = () => {
  return (
    <>
      <div className="w-full h-auto mx-auto" style={{ fontFamily: "inter" }}>
        {/*  First Section */}
        <div className="flex flex-col md:flex lg:flex-row mx-auto max-w-[2000px] w-full">
          <div className="bg-[#F58634] w-[100%] flex justify-center flex-col pt-4 sm:pt-0 lg:w-[45%]">
            <div className=" w-[100%] sm:w-[90%] text-left  px-5 p-3 pb-5 mt-2">
              <div className="text-black text-3xl font-semibold leading-[38px]">
                Unlock Your Potential with Professional Resume Critique Services{" "}
              </div>
            </div>

            <p className=" w-[100%] md:w-[90%]  text-[#FFFFFF] font-semibold text-xl text-justify px-5  lg:tracking-wide pb-4 sm:pb-0 ">
              Elevate your career prospects with personalized feedback on
              formatting, content, and strategic presentation. Secure your dream
              job with a standout resume.
            </p>
          </div>

          <div
            className="w-full flex justify-center
            lg:w-[55%]"
          >
            <img
              src={require("./../../../images/ScreeningServices/CoverImage.jpg")}
              alt="CoverImage"
              className="hidden lg:block w-full h-auto"
            />
          </div>
        </div>

        {/*  Second Section  */}

        <div className="p-1 md:mt-4 w-[95%] lg:w-[70%] max-w-[1500px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 justify-between w-full lg:my-10 mb-8">
            {/* left part */}
            <div className="w-full lg:w-[60%]  flex flex-col gap-y-10  py-3 lg:py-10  ">
              <p className="max-sm:text-lg text-[28px] text-justify  text-black leading-8 lg:leading-[45px] xl:leading-[53px] px-2 py-3">
                Investing in a professional resume critique service provides
                valuable insights and transforms your resume into a powerful
                tool for career success. Invest in Doledge Resume Critique
                Services to unlock the full potential of your resume and advance
                your career with confidence.
              </p>
            </div>

            {/* right part */}
            <div className="w-[70%] sm:w-[37%] mx-auto flex flex-col gap-y-5 lg:gap-y-5">
              <h1 className="text-2xl lg:text-3xl text-center md:leading-[53px]">
                Resume Critique Service
              </h1>

              <form className="flex flex-col gap-4 text-center justify-evenly text-base sm:text-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 md:py-5 rounded-xl lg:rounded-none">
                <div className="mt-4  p-4 bg-[#D9D9D9] ">
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
            Benefits of Doledge Resume Critique Services
          </h1>
          <table className="table table-bordered table-striped table-auto !w-[70%] max-w-[1500px] mx-auto my-10">
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
          <h1 className="font-semibold text-lg md:text-2xl lg:text-3xl p-2 my-4">
            Unlocking Career Success: The Crucial Role of Resume Critique
            Services
          </h1>
          <div className="text-center">
            <div className="flex flex-col items-center lg:justify-center lg:flex-row lg:items-stretch gap-10 xl:gap-8 min-[1900px]:gap-x-14 w-full lg:w-[70%] max-w-[1500px] mx-auto">
              <div className="flex flex-col gap-2 p-3 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-full min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/1.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h1 className="font-medium text-[#000000] text-2xl p-2">
                  Expert Assessment
                </h1>
                <p className="text-[18px]  text-[#000000] lg:px-2">
                  Receive a comprehensive analysis of your resume by industry
                  experts for valuable insights.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-3 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-full min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/3.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h1 className="font-medium text-[#000000] text-2xl p-2">
                  Improved Visibility
                </h1>
                <p className="text-[18px]  text-[#000000] lg:px-2">
                  Enhance your resume's visibility to recruiters, increasing
                  your chances of being shortlisted.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-3 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-full min-h-[300px] rounded-xl">
                <img
                  src={require("./../../../images/ScreeningServices/2.jpg")}
                  alt=""
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h1 className="font-medium text-[#000000] text-[23px] p-1">
                  Professional Formatting
                </h1>
                <p className="text-[18px]  text-[#000000]  lg:px-2">
                  Elevate the visual appeal of your resume with expert advice on
                  layout and design.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Services Section  */}
        <div className="pt-7">
          <h1 className="bg-[#F58634] font-semibold text-lg md:text-2xl lg:text-3xl py-3 my-5">
            Doledge Premium Services
          </h1>
          <div className="my-6 text-center m-2 w-[95%] lg:w-[70%] max-w-[1500px] mx-auto">
            <div className="flex flex-col items-center lg:justify-center lg:items-stretch lg:flex-row gap-10  w-full mx-auto">
              <div className="flex flex-col gap-2 p-3 md:py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-full md:min-h-[350px] rounded-xl">
                <h1 className="font-medium text-[#000000] max-sm:text-xl text-2xl p-2 text-left">
                  Highlight Your Resume
                </h1>
                <p className="text-lg md:text-xl  text-[#000000] leading-8 lg:leading-10 tracking-wide lg:p-3 text-left">
                  Attract recruiters' attention with a standout resume,
                  increasing your chances of landing interviews. Let our service
                  spotlight your strengths, ensuring your application stands out
                  in the competitive job market.
                </p>
              </div>

              <div className="flex flex-col gap-2 p-3 md:py-5 shadow-[rgba(0,_0,_0,_0.14)_0px_0px_10px] w-[85%] sm:w-[70%] md:w-[50%] xl:w-full md:min-h-[350px] rounded-xl">
                <h1 className="font-medium text-[#000000] max-sm:text-xl text-2xl p-2 text-left">
                  Job Search Assistant
                </h1>
                <p className="text-lg md:text-xl  text-[#000000] leading-8 lg:leading-10 tracking-wide lg:p-3 text-left">
                  Receive tailored job recommendations, refine your search
                  criteria, and stay organized with application tracking. Let
                  our assistant guide you towards your ideal career
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Contactus />

        {/* <Blog /> */}

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default ResumeCritique;
