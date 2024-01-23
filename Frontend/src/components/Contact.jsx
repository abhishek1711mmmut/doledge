import React from "react";

const Contact = () => {
  return (
  <div className="flex justify-center ml-[8.2vw] w-[83%]">
    <div className="w-[80%] py-4 md:flex flex-row items-stretch justify-center rounded-lg-gray-200">
    
    <div className="w-[100%] p-8 flex-1 bg-[#4495e6] text-white flex flex-col justify-center items-center">
      <div className="text-left">
        <p className="font-bold text-2xl py-2">Talk to Us</p>
        <p className="py-2">Call us Toll Free: <span className="font-bold">1800-102-5557</span></p>
        <p className="py-2">(9.00 AM to 9.00PM IST)</p>
        <p className="py-2">International Customer Call: <span className="font-bold">+91-120-4021100</span></p>
        <p className="py-2">For bulk queries call: <span className="font-bold">18001034477</span></p>
      </div>
    </div>


    <div className="w-[100%] p-8 flex-1 w-1/2 bg-gray-100 flex flex-col justify-center items-center">
  
      <div className="w-[100%] text-left">
        <h4 className="font-extrabold text-2xl ">CONTACT US</h4>
        <p style={{fontFamily:"monospace"}} className="text-sm text-gray-700 mb-4">Our executive will get in touch with you soon</p>
        <form>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name" 
            type="text"
            placeholder="Type your name here"
          />

          <label className="block text-gray-700 text-sm font-bold my-2 pt-2" htmlFor="email">
            Email ID<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Type your email ID"
          />

          <label className="block text-gray-700 text-sm font-bold my-2 pt-2" htmlFor="mobile">
            Mobile<span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="mobile"
            type="tel"
            placeholder="Type your mobile number"
          />

          <label className="block text-gray-700 text-sm font-bold my-2 pt-2" htmlFor="query">
            Write your query here<span className="text-red-500">*</span>
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="query"
            placeholder="e.g., I am interested"
            rows="4"
          ></textarea>

          <button
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
            type="button"
          >
            CALL ME BACK
          </button>
        </form>
      </div>
    </div>

  </div>
    </div>
  );
};

export default Contact;
