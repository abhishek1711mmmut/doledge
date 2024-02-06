import React,{useState, useEffect} from 'react'
import Image from "./../images/JobSearch1.png";
import axios from 'axios';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const { name, email, phoneNumber } = formData;

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
     
    axios.post("http://localhost:8800/api/contact-us/get-a-callback",formData)
    .then(response=>{
      console.log(response);
      e.target.reset();
    })
    .catch(error=>{
      console.log(error);
    })
   
    
  };

  // useEffect(() => {
  //   // Update the URL to match your API endpoint
  //   fetch(
  //     `${process.env.REACT_APP_SERVER_PRO_URL}/api/contact-us/contact/getall`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFormData(data.data);
  //     })
  //     .catch((error) => console.error("Error getting data:", error));
  // }, []);
  // useEffect(() => {
  //   // Update the URL to match your API endpoint
  //    axios.get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/contact-us/contact/getall`, {withCredentials: true})
  //     .then((response) => {
  //       // Check if the response has the expected structure
  //       const data = response.data;
  //       if (data && data.data) {
  //         setFormData(data.data);
  //       } else {
  //         console.error('Invalid response format:', data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error getting data:', error);
  //     });
  // }, []);


  return (
    <div>
      <div className="flex flex-col md:flex-row justify-evenly sm:gap-2 my-5 w-[85%] lg:w-[70%] max-w-[1500px] mx-auto border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
        {/* left part */}
        <div className="p-3 w-full flex flex-col justify-start items-center">
          <h1 className="font-inter font-semibold text-2xl justify-items-start">
            Talk to our experts
          </h1>
          <div className="hidden md:flex justify-center items-center mx-auto justify-self-center">
            <img
              src={Image}
              alt=""
              className="hidden md:block mx-auto w-full h-full"
            />
          </div>
        </div>

        {/* right part */}
        <div className="flex flex-col justify-evenly items-center w-full p-3 gap-y-4 md:gap-2">
          <div className="flex flex-col justify-center items-center md:items-start md:text-left md:w-[80%]">
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
                  name="phoneNumber"
                  maxLength={10}
                  value={phoneNumber}
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
  );
};

export default Contactus