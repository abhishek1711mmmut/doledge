import React,{useState} from 'react'
import Image from "./../images/JobSearch1.png";

const Contactus = () => {

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
    <div>




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





















    </div>
  )
}

export default Contactus