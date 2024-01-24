import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import payment1 from '../images/mastercard.png'
import payment2 from '../images/visa.png'
import payment3 from '../images/american-express.png'
import payment4 from '../images/maestro.png'
import payment5 from '../images/Rupay-Logo.png'

const Footer = () => {
  return (
    <>
      <div className="w-[100%]">
        {/* Payment Section */}
        <div className="w-[70%] max-w-[1500px] mx-auto mx-autoborder-t-2 py-3 mt-5">
          <div className="w-full">
            <div className="w-full text-black leading-[31px] tracking-[3.74px]" style={{
              color: 'black',
              fontSize: '22px',
              fontFamily: 'Inter,Arial,sans-serif',
              fontWeight: '700',
              wordWrap: 'break-word',
              // border: '1px solid black'
            }}>
              Purchase securely with Doledgeindia.com
            </div>

            <div className="w-full text-black text-xl text-center my-2 mb-4" style={{
              fontSize: '20px',
              fontFamily: 'Inter,Arial,sans-serif',
              fontWeight: '300',
              letterSpacing: 1.60,
              // border: '1px solid black'
            }}>
              Support secure payment method
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 bg-white">
            <img
              className="w-[100%] h-[60px] px-3
              sm:w-[70%]
              md:w-[50%]"
              alt="payment"
              src={require("../images/payment.png")}
            // style={{border: '1px solid black'}}
            />
            {/* <img src={payment1} alt="" className="h-[60px] w-[90px] !bg-white"/>
            <img src={payment2} alt="" className="h-[60px] w-[90px] bg-white"/>
            <img src={payment3} alt="" className="h-[60px] w-[90px] bg-white"/>
            <img src={payment4} alt="" className="h-[60px] w-[90px] bg-white"/>
            <img src={payment5} alt="" className="h-[60px] w-[90px] bg-white"/> */}
          </div>
        </div>

        <hr className="h-[2px] text border-gray-400 bg-gray-400"/>

        {/* Footer Information */}
        <div className="flex flex-row justify-evenly items-center px-0 pt-4 w-[70%] max-w-[1500px] mx-auto">
          {/* section 1 */}
          <div className="flex flex-col
          lg:flex lg:flex-row">
            {/* Col 1 */}
            <div className="m-2 p-2 text-black text-[15px] font-light font-['Inter'] leading-[31px] tracking-[2.55px] text-left
            h-[300px]" style={{
                color: 'black',
                fontSize: 15,
                fontFamily: 'Inter,Arial,sans-serif',
                fontWeight: '300',
                letterSpacing: 2.55,
                wordWrap: 'break-word',
                // border: '1px solid black'
              }}>
              Resume Writing
              <br />
              Text Resume
              <br />
              Visual Resume
              <br />
              Resume Critique
              <br />
              Resume Quality Score
              <br />
              Resume Samples
              <br />
              Cover Letter Samples
              <br />
              Job Letter Samples
            </div>

            {/* Col 2 */}
            <div className="m-2 p-2 text-black text-[15px] font-light font-['Inter'] leading-[31px] tracking-[2.55px] text-left
            h-[300px]" style={{
                color: 'black',
                fontSize: 15,
                fontFamily: 'Inter,Arial,sans-serif',
                fontWeight: '300',
                letterSpacing: 2.55,
                wordWrap: 'break-word',
                // border: '1px solid black'
              }}>
              Recruiter Reach
              <br />
              Resume Display
              <br />
              RecruiterConnection
              <br />
              Priority Applicant
              <br />
              Certification Highlighter
            </div>
          </div>

          <div className="flex flex-col
          lg:flex lg:flex-row">
            {/* Col 3 */}
            <div className="m-2 p-2 text-black text-[15px] font-light font-['Inter'] leading-[31px] tracking-[2.55px] text-left
            h-[300px]" style={{
                color: 'black',
                fontSize: 15,
                fontFamily: 'Inter,Arial,sans-serif',
                fontWeight: '300',
                letterSpacing: 2.55,
                wordWrap: 'break-word',
                // border: '1px solid black'
              }}>
              Register / Login
              <br />
              Job Search
              <br />
              Create Free Job Alert
              <br />
              Job Assistance Services
              <br />
              Courses
              <br />
              Fraud Alert
            </div>

            {/* Download */}
            <div className="m-2 p-2 h-[300px]" style={{ border: '0px solid black' }}>
              <div className="text-black text-lg font-light font-['Inter'] tracking-[3.06px]" style={{
                color: 'black',
                fontSize: 15,
                fontFamily: 'Inter,Arial,sans-serif',
                fontWeight: '700',
                letterSpacing: 2.55,
                wordWrap: 'break-word'
              }}>
                Download Doledge App:
              </div>


              <div className="flex items-center justify-center p-1 mt-2 bg-white rounded-[20px] border-2 border-[#ccc]">
                <div className="text-black text-sm font-light font-['Inter']" style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: 'Inter,Arial,sans-serif',
                  fontWeight: '300',
                  // lineHeight: 31;
                  letterSpacing: 2.38,
                  wordWrap: 'break-word'

                }}>
                  Play Store
                </div>
                <img
                  className="h-[30px] w-[30px] ml-2"
                  alt="play"
                  src={require("../images/play.png")}
                />
              </div>

              <div className="flex items-center justify-center p-1 mt-2 bg-white rounded-[20px] border-2 border-[#ccc]">
                <div className="text-left text-sm font-light font-['Inter']" style={{
                  color: 'black',
                  fontSize: 14,
                  fontFamily: 'Inter,Arial,sans-serif',
                  fontWeight: '300',
                  // lineHeight: 31;
                  letterSpacing: 2.38,
                  wordWrap: 'break-word'
                }}>
                  App Store
                </div>
                <img
                  className="h-[30px] w-[30px] ml-2"
                  alt="play"
                  src={require("../images/apple.png")}
                />
              </div>
            </div>
          </div>
        </div>

        <hr className="h-[2px] text border-gray-400 bg-gray-400"/>

        {/* Social Networks */}
        <div className="flex justify-center items-center py-2">
          <img
            className="w-[25px] h-[25px] mx-1"
            src={require("../images/social-facebook.png")} />
          <img
            className="w-[25px] h-[25px] mx-1"
            src={require("../images/social-instagram.png")} />
          <img
            className="w-[25px] h-[25px] mx-1"
            src={require("../images/social-twitter.png")} />
        </div>
      </div>
    </>
  );
};

export default Footer;
