import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-[95%] mx-auto">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className=" h-[126px] w-[100%] bg-opacity-20 border-2 lg-rounded mt-10">
            <br></br>
            <div className="flex w-[50%]">
              <div className="w-[687px] text-black text-[22px] font-bold leading-[31px] tracking-[3.74px]" style={{
                color: 'black',
                fontSize: '22px',
                fontFamily: 'Inter,Arial,sans-serif',
                fontWeight: '700',
                wordWrap: 'break-word'
              }}>
                Purchase securely with Doledgeindia.com{" "}
                <div className="w-[49vw] text-black text-xl text-left ml-12 font-light tracking-wider mt-2" style={{
                  color: 'black',
                  fontSize: 20,
                  fontFamily: 'Inter,Arial,sans-serif',
                  fontWeight: '300',
                  letterSpacing: 1.60,

                }}>
                  Support secure payment method
                </div>
              </div>


              <img
                className="h-[54px] w-[60%]"
                alt="payment"
                src={require("../images/payment.png")}
              />



            </div>
            {/* <div className="w-[49vw] text-black text-xl text-left ml-12 font-light tracking-wider" style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Inter,Arial,sans-serif',
              fontWeight: '300',
              letterSpacing: 1.60,
              
            }}>
              Support secure payment method
            </div> */}
          </div>
        </div>
        <br></br>
        <div className="ml-12 justify-between py-8 flex">
          <div className="text-black text-[15px] font-light leading-[31px] tracking-[2.55px] text-left" style={{
            color: 'black',
            fontSize: 15,
            fontFamily: 'Inter,Arial,sans-serif',
            fontWeight: '300',
            letterSpacing: 2.55,
            wordWrap: 'break-word'
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
          <div className="text-black text-[15px] font-light font-['Inter'] leading-[31px] tracking-[2.55px] text-left" style={{
            color: 'black',
            fontSize: 15,
            fontFamily: 'Inter,Arial,sans-serif',
            fontWeight: '300',
            letterSpacing: 2.55,
            wordWrap: 'break-word'
          }}

          >
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
          <div className="text-black text-[15px] font-light font-['Inter'] leading-[31px] tracking-[2.55px] text-left" style={{
            color: 'black',
            fontSize: 15,
            fontFamily: 'Inter,Arial,sans-serif',
            fontWeight: '300',
            letterSpacing: 2.55,
            wordWrap: 'break-word'
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
          <div>
            <div className="text-black text-lg font-light font-['Inter'] leading-[31px] tracking-[3.06px]" style={{
              color: 'black',
              fontSize: 15,
              fontFamily: 'Inter,Arial,sans-serif',
              fontWeight: '300',
              letterSpacing: 2.55,
              wordWrap: 'break-word'
            }}>
              Download Doledge App from:
            </div>
            <br></br>
            <div className="flex items-center justify-center w-[300px] h-14 bg-white rounded-[20px] border-2 border-zinc-400">
              <div className="w-[155px] text-black text-sm font-light font-['Inter'] leading-[31px] tracking-widest" style={{
                color: 'black',
                fontSize: 14,
                fontFamily: 'Inter,Arial,sans-serif',
                fontWeight: '300',
                // lineHeight: 31;
                letterSpacing: 2.38,
                wordWrap: 'break-word'

              }}>
                Google Play Store
              </div>
              <img
                className="w-10 h-[43px] ml-[10%]"
                alt="play"
                src={require("../images/play.png")}
              />
            </div>
            <br></br>
            <div className="flex items-center justify-center w-[300px] h-14 bg-white rounded-[20px] border-2 border-zinc-400">
              <div className="w-[155px] text-left text-sm font-light font-['Inter'] tracking-widest" style={{
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
                className="w-10 h-[43px] ml-[10%]"
                alt="play"
                src={require("../images/apple.png")}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[157px] h-[49px] flex "
            alt="ji"
            src={require("../images/tweet.png")}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
