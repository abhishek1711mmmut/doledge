import React from "react";
import "../css/Banner.css";
import '@fontsource/sintony';

const Banner = () => {
  return (
    <>
      <br></br>

      <div className="Banner w-full flex flex-col 
      md:flex md:flex-row">
        <div className="banner-title bg-[#fbad78] w-[100%] flex justify-center flex-col pt-4
        sm:pt-0
        md:w-[50%]"> {/* Reduced the width to 1/3 */}
          {/* <h1 className="font-bold font-sans text-left px-12 pt-24" style={{ fontFamily: 'Sintony' }}>Enhance Your <br /> Resume To</h1> */}
          {/* <h1 className="font-bold font-sans text-[#0f774c] text-left px-12 py-3" style={{ fontFamily: 'Sintony' }}>Impress Recruiters</h1> */}
          

          {/* <h1 className="text-2xl font-bold text-left md:text-3x1 px-12 
          lg:text-4x1" style={{fontSize: '35px'}}>Enhance Your<br/>Resume to</h1> */}
 
          {/* <h1 className="text-2xl font-bold text-left text-[#0f774c] px-12 py-1
          md:text-3x1 md:my-3
          lg:text-4x1 xl:my-5"> Impress Recruiters</h1>  */}

          <div className="text-left  px-12 m-0"> 
            <div className="first-header">Enhance Your</div>
            <div className="second-header">Resume to</div>
          </div>
          
          <h1 className="third-header text-left text-[#0f774c] px-12 py-2"> Impress Recruiters</h1>
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
