import React from "react";
// import "../css/Banner.css"; // Import your CSS styles
import '@fontsource/sintony';

const Banner = () => {
  return (
    <>
      <br></br>
      <div className="w-full flex">
        <div className="bg-[#fbad78] w-[50%] xl:flex justify-center flex-col"> {/* Reduced the width to 1/3 */}
          {/* <h1 className="font-bold font-sans text-left px-12 pt-24" style={{ fontFamily: 'Sintony' }}>Enhance Your <br /> Resume To</h1> */}
          {/* <h1 className="font-bold font-sans text-[#0f774c] text-left px-12 py-3" style={{ fontFamily: 'Sintony' }}>Impress Recruiters</h1> */}
          <h1 className="font-bold text-4xl text-left px-12 py-1">Enhance Your<br/>Resume to</h1>
       <h1 className="font-bold text-4xl text-left text-[#0f774c] px-12 py-1"> Impress Recruiters</h1> 


          <p className="text-2xl text-left px-12 py-1" style={{ fontFamily: 'Sintony' }}>Showcase your skills & achievements with a Professionally written resume</p>
        </div>
        <div className="w-full xl:w-[50%] flex justify-center">
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
