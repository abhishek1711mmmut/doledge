import React from "react";
// import "../css/Banner.css"; // Import your CSS styles
import '@fontsource/sintony';

const Banner = () => {
  return (
    <>
      <br></br>

      <div className="Banner w-full flex flex-col 
      md:flex md:flex-row">
        <div className="banner-title bg-[#fbad78] w-[100%] flex justify-center flex-col pt-4
        md:w-[50%] sm:pt-0"> {/* Reduced the width to 1/3 */}
          {/* <h1 className="font-bold font-sans text-left px-12 pt-24" style={{ fontFamily: 'Sintony' }}>Enhance Your <br /> Resume To</h1> */}
          {/* <h1 className="font-bold font-sans text-[#0f774c] text-left px-12 py-3" style={{ fontFamily: 'Sintony' }}>Impress Recruiters</h1> */}
          <h1 className="text-2xl font-bold text-left md:text-3x1 lg:text-4x1 px-12" style={{fontSize: '35px'}}>Enhance Your<br/>Resume to</h1>
          <h1 className="text-2xl font-bold text-left md:text-3x1 lg:text-4x1 text-[#0f774c] px-12 py-1"> Impress Recruiters</h1> 
          <p className="text-2xl text-left px-12 pb-2 sm:pb-0" style={{ fontFamily: 'Sintony' }}>Showcase your skills & achievements with a Professionally written resume</p>
        </div>

        <div className=" banner-image w-full flex justify-center
        md:w-[50%]">
          <img
            src={require("../images/banner.png")}
            alt="Banner"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
