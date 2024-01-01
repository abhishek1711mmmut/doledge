import React from "react";

const Header = () => {
  return (
    // h-[411px]
    <div className="w-[80%] mt-5" style={{margin:'0 auto',display:'flex',
    flexWrap:'wrap'}}>
      <div className="flex flex-col items-center justify-between border-[3px] rounded border-gray-200 
      md:flex-row">
        <div className="md:w-1/2 w-full py-6 px-8  text-gray-900 text-left">
          <h1 className="text-2xl md:text-4xl font-sans mb-4 text-left" style={{
            // borderRadius:'20px',
            color: '#6B6B6B',
            fontSize: 27,
            fontFamily: 'Sintony',
            fontWeight: '700',
            letterSpacing: 2.16,
            wordWrap: 'break-word'
          }}>Text Resume</h1>
          <h1 className="text-xl text-left md:text-xl font-semibold mb-4 mt-5 text-black-600" 
          style={{
            fontFamily:'Poppins'
          }}
        
          >
            Unlock opportunities and captivate employers with our professional
            text resume services.
          </h1>
          <h1 className="text-left text-xl md:text-xl mb-8" style={{
            color: 'black',
            fontFamily: 'Poppins',
            fontWeight: '300',
            // lineHeight: 43,
            letterSpacing: 0.96,
            // wordWrap: 'break-word'
          }}>
            Concise, impactful, and ATS-friendly—your pathway to career success
            begins with us
          </h1>
          <div className="text-left md:text-left">
            <button className="bg-gray-100 rounded-lg py-2 px-4 text-black font-semibold text-xl text-green-700">
              Know more
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex-shrink-0 py-8 px-8 text-center md:text-right">
          <img
            src={require("../images/trog.png")}
            className="mx-auto md:mx-0"
            width="350px"
            height="350px"
            alt=""
          />
        </div>
      </div>

      <br />

      <div className="flex flex-col items-center justify-between border-[3px] rounded border-gray-200 
      md:flex-row mt-5 mb-5">
        <div className="md:w-1/2 w-full flex-shrink-0 py-8 px-8 text-center md:text-right">
          <img
            src={require("../images/textresume.png")}
            className="mx-auto md:mx-0"
            width="250px"
            height="250px"
            alt=""
          />
          <p className="text-xl md:text-2xl animate-pulse font-semibold mb-4 mt-4 font-sans">
            Plan starts from Rs. 670/month
          </p>
        </div>
        <div className="md:w-1/2 w-full py-6 px-8 text-gray-900 text-left">
          <h1 className="text-2xl text-left md:text-4xl font-sans mb-4">
            Unlock your future career
          </h1>
          <h1 className="text-xl md:text-2xl text-left font-semibold mb-4 font-sans text-gray-500">
            Opportunities by subscribing to our monthly job search plan today
            and land your dream job.
          </h1>
          <h1 className="text-xl md:text-2xl  text-left font-light font-sans">
            Subscribe to our monthly job search plan and seize new opportunities
            every month
          </h1>
          <div className="text-center md:text-right mt-8">
            <button className="bg-gray-300 rounded-md py-2 px-4 text-black font-semibold text-xl">
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
