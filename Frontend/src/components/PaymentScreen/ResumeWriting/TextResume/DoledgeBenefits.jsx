import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import BuyNowServiceCard from '../BuyNowServiceCard';
import { SiSpeedtest } from "react-icons/si";
import icon1 from '../../../../images/Icons/1.jpg'
import icon2 from '../../../../images/Icons/2.jpg'

import { Card, Typography, Button, Box } from '@mui/material';
import { FormControl, FormControlLabel, Radio, Checkbox, RadioGroup } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import contextAuth from "../../../../ContextAPI/ContextAuth";



// import Slide from 'react-reveal/Slide';
export default function DoledgeBenefits({prices}) {
  const {token} = useContext(contextAuth);
  const [selectedValue, setSelectedValue] = useState("");
  const [optionPrice, setoptionPrice] = useState(0);
  const [includeCoverLetter, setIncludeCoverLetter] = useState(false);
  const [serviceId, setServiceId] = useState(null);
  const [optionId, setOptionId] = useState("");
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_PRO_URL}/api/resumeService/services`
        );
        console.log("this is from get 1",response.data);
        const { status, message, services } = response.data;

        if (status === "success" && services.length > 0) {
          const visualResumeService = services.find(
            (service) => service.serviceId === "text-resume"
          );

          if (visualResumeService) {
            setServiceId(visualResumeService._id);
            setOptions(visualResumeService.options);
            const option = visualResumeService.options[0];
            setOptionId(option._id);
            setoptionPrice(option.optionPrice);
            console.log("this is from get 2",response.data);
          } else {
            console.error("Visual Resume Service not found");
          }
        } else {
          console.error("Error fetching data:", message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      console.log("options",options)
      
    };

    fetchData();
  }, []);
  useEffect(() => {
    console.log("Selected Value:", selectedValue);
  }, [selectedValue]);
  
  useEffect(() => {
    console.log("Option Price:", optionPrice);
  }, [optionPrice]);
  
  useEffect(() => {
    console.log("Include Cover Letter:", includeCoverLetter);
  }, [includeCoverLetter]);
  
  useEffect(() => {
    console.log("New Price:", optionPrice);
  }, [optionPrice]);
  

  const handleChange = (event) => {
    const selectedOption = options.find(
      (option) => option.optionId === event.target.value
    );
  
    if (selectedOption) {
      setSelectedValue(selectedOption.optionId);
      setOptionId(selectedOption._id);
      setoptionPrice(selectedOption.optionPrice);
    } else {
      console.error("Selected option not found:", event.target.value);
    }
  
    // console.log("Selected Option:", selectedOption);
    // console.log("Selected Value:", selectedValue);
    // console.log("Option Price:", optionPrice);
  };
  
  const handleCoverLetterChange = (event) => {
    const coverLetterPrice = 500;
    let newPrice = 0; // Initialize newPrice
    
    // Find the selected option
    const selectedOption = options.find(
      (option) => option.optionId === selectedValue
    );
  
    if (selectedOption) {
      newPrice = selectedOption.optionPrice; // Set newPrice to the price of the selected option
  
      // Adjust the price based on the inclusion of a cover letter
      if (event.target.checked) {
        newPrice += coverLetterPrice;
      } else {
        // If the cover letter is unchecked, set the price back to the base option price
        newPrice = selectedOption.optionPrice;
      }
  
      setIncludeCoverLetter(event.target.checked);
      setoptionPrice(newPrice);
    } else {
      console.error("Selected option not found:", selectedValue);
    }
  
    console.log("Selected Option:", selectedOption);
    console.log("Include Cover Letter:", includeCoverLetter);
    console.log("New Price:", newPrice);
    console.log("Option Price:", optionPrice);
  };
  
  const handleBuyNow = async () => {
    try {
      const selectedServiceId = serviceId;
      const selectedOptionId = optionId;
      
  
      console.log("Selected Service ID:", selectedServiceId);
      console.log("Selected Option ID:", selectedOptionId);
      
  
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_PRO_URL}/api/resumeService/select-service-option`,
        {
          serviceId: selectedServiceId,
          optionId: selectedOptionId,
        }
      );
  
      console.log("Response from post:", response.data);
      // Next, make the API call to add to cart
    const response2 = await axios.post(
      `${process.env.REACT_APP_SERVER_PRO_URL}/api/Resume/add-to-cart`,
      {
        selectedServiceId,
        selectedPlanId: selectedOptionId,
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }

    );

    console.log("Response from add to cart:", response2.data);

    
  } catch (error) {
    console.error("Error handling buy now:", error);
    // Handle errors, e.g., display an error message to the user
  }
  };
  
  


  

  const location = useLocation();
  const ResumeType = location.pathname.includes("Visual") ? "Visual" : "Text";


  return (

    <div className="main flex flex-col md:ml-20 md:mr-20 w-[93%] lg:w-[80%] xl:w-[70%] max-w-[1500px] mx-auto">
      <div className="div w-[100%] flex justify-center align-center mt-5">

         {/* <div className="flex justify-center align-center bg-green-500">
      Click me
    </div> */}
      <div className='bg-[#9DD49B] w-[250px] h-[60px] md:w-[400px] md:h-[100px] rounded-xl text-2xl md:text-4xl leading-10 flex justify-center items-center'>
        Doledge Benefits
      </div>

      </div>

    





      <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between xl:items-stretch gap-x-2 mt-5 w-full mx-auto">
        <div className="flex flex-col justify-center items-start  xl:w-[60%]">
         

          <div className="text-black text-base md:text-xl max-w-screen-sm md:max-w-full lg:max-w-2xl py-2 rounded-lg self-start text-center font-semibold mb-2 mx-auto" style={{ fontFamily: 'Poppins', fontWeight: 300,  textAlign:'center' }}>
            
            Benefits of buying Text Resume service from Doledge
          </div>

          <table className="table table-striped table-bordered table-auto">
            <thead>
              <tr>  
                <th scope="col" className="text-center !bg-[#4472c4] !text-white">Doledge Benefits</th>
                <th scope="col" className="text-center !bg-[#4472c4] !text-white">Free Resume</th>
                <th scope="col" className="text-center !bg-[#4472c4] !text-white" >Doledge Text Resume</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className='benefit text-left sm:px-5' >Instant Accessibility</td>
                <td className='text-center sm:px-5 benefitGiven'> <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' /></td>
                <td className='text-center sm:px-5 benefitGiven'> <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' /></td>
              </tr>
              <tr className="">
                <td className='text-left sm:px-5'>Maximized Exposure</td>
                <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center sm:px-5'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>
              <tr className="">
                <td className='text-left sm:px-5'>Simplified Job Hunting</td>
                <td className='text-center sm:px-5 benefitGiven'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center sm:px-5'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>

              <tr className="">

                <td className='text-left sm:px-5'>Swift Responses</td>
                <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center sm:px-5 benefitGiven'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>

              <tr className="">

                <td className='text-left sm:px-5'>Privacy and Security</td>
                <td className='text-center sm:px-5'>
                  <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' />
                </td>
                <td className='text-center sm:px-5'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>

              <tr className="">

                <td className='text-left sm:px-5'>Professional Guidance</td>
                <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center sm:px-5 benefitGiven'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>

              <tr className="">

                <td className='text-left sm:px-5'>Enhanced Efficiency</td>
                <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center sm:px-5 benefitGiven'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>

              <tr className="">

                <td className='text-left sm:px-5'>Results - Driven</td>
                <td className='text-center sm:px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center sm:px-5 benefitGiven'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>
            </tbody>
          </table>

        </div>

        {serviceId && optionId && (
      <div className="justify-content-center xl:flex lg:w-[55%] xl:w-[40%] py-2">
        <div className="div flex flex-col">
          <div
            className="mx-auto text-black text-lg sm:text-xl max-w-screen-sm md:max-w-full self-start text-center font-semibold md:mb-2"
            style={{ fontFamily: "Poppins", fontWeight: 300 }}
          >
            Buy {ResumeType} Resume Services
          </div>
          <Card className="md:mt-1 md:w-[100%] my-2 h-full">
            <div className="bg-white max-xl:h-6 xl:h-[10%]"></div>
            <Typography
              component="div"
              gutterBottom
              style={{
                background: "#D2D2D263",
                fontSize: 26,
                color: "#444",
                padding: "7px 0",
                fontWeight: "500",
              }}
            >
              Rs. {optionPrice}*
              <p
                className="inclTxt"
                style={{
                  lineHeight: 1,
                  fontSize: "11px",
                  marginBottom: "5px",
                  fontWeight: "500",
                }}
              >
                *Applicable taxes may apply
              </p>
            </Typography>
            <FormControl component="fieldset" sx={{ paddingX: "20px" }}>
              <RadioGroup
                aria-label="options"
                name="options"
                value={selectedValue}
                onChange={handleChange}
              >
                <FormControlLabel
                  value=""
                  control={
                    <Checkbox
                      checked={includeCoverLetter}
                      onChange={handleCoverLetterChange}
                    />
                  }
                  label={
                    <div>
                      <Typography
                        style={{
                          fontSize: "15px",
                          fontFamily: "Poppins",
                          fontWeight: "400",
                        }}
                      >
                        {" "}
                        Including Cover letter{" "}
                      </Typography>
                    </div>
                  }
                  labelPlacement="end"
                />
                {options.map((option) => (
                  <div key={option._id}>
                    <hr className="w-full" />
                    <FormControlLabel
                      value={option.optionId}
                      control={
                        <Radio
                          checked={selectedValue === option.optionId}
                          onChange={handleChange}
                        />
                      }
                      label={
                        <div>
                          <Typography
                            style={{
                              fontSize: "15px",
                              fontFamily: "Poppins",
                              fontWeight: "400",
                            }}
                          >
                            <span className="text-blue-900">
                              {option.optionName}
                            </span>{" "}
                            - Rs. {option.optionPrice}
                          </Typography>
                        </div>
                      }
                      labelPlacement="end"
                    />
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            {serviceId && optionId && (
              <Box sx={{ textAlign: "center", padding: "10px" }}>
                <Button
                  type="submit"
                  onClick={handleBuyNow}
                  variant="contained"
                  style={{ backgroundColor: "rgba(245, 134, 52, 1)" }}
                >
                  Buy Now
                </Button>
              </Box>
            )}
          </Card>
        </div>
      </div>
      )}

      </div>


      {/* Experiencing benefit section */}

      <div className="flex md:flex-col w-full align-center justify-center">
        {/* red main */}
        <div className="stats-section w-full" style={{ margin: '25px auto' }}>
          <div className="text-opacity-60 text-center font-medium leading-[35px] sm:leading-[48.1px] mt-8 self-center w-[90%] sm:w-full mx-auto max-md:max-w-full text-lg sm:text-2xl" style={{
            color: 'rgba(0, 0, 0, 0.56)',
            fontSize: 26,
            fontFamily: 'Poppins',
            fontWeight: 500,
            wordWrap: 'break-word',
          }}>
            Our customers are experiencing a host of benefits <br /> from our Text Resume Services
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center mt-12">
            <div className="w-48 h-48 border-1 border-[#62B01E] rounded-full flex flex-col place-items-center justify-center mb-4 md:mb-0">
              <div style={{
                fontSize: 20,
                fontFamily: 'Poppins',
                fontWeight: '500',
                marginTop:'-15px'
              }}>
                <SiSpeedtest className='mx-auto w-[33px] h-[28px]' />
                {/* <FontAwesomeIcon icon={faGaugeSimpleHigh} style={{ color: "royalblue", fontSize: 24 }} /> <br /> */}

                Speed & <br />efficiency
              </div>
              <p style={{ fontSize: 12, fontWeight: 400 }}>helping clients respond to opportunities in real-time</p>
            </div>
            <div className="w-48 h-48 border-1 border-[#F69A56] rounded-full flex flex-col justify-center items-center mb-4 md:mb-0">
              <div style={{
                fontSize: 20,
                fontFamily: 'Poppins',
                fontWeight: '500',
                marginTop:'-15px'
              }}>
                <img src={icon1} alt="" width={30} height={30} className='mx-auto '/>
                

                Affordability</div>
              <p style={{ fontSize: 12, fontWeight: 400 }}>cost-effective solutions for modernizing job applications</p>
            </div>
            <div className="w-48 h-48 border-1 border-[#62B01E] rounded-full flex flex-col justify-center items-center mb-4 md:mb-0">
              <div style={{
                fontSize: 20,
                fontFamily: 'Poppins',
                fontWeight: '500'
              }}>
                {/* <FontAwesomeIcon icon={faGaugeSimpleHigh} style={{ color: "royalblue", fontSize: 24 }} /> <br /> */}
                <img src={icon2} width={30} height={30} alt="" className='mx-auto'/>
                Expert <br />Guidance</div>
              <p style={{ fontSize: 12, fontWeight: 400 }}>Helping clients make a lasting impression</p>
            </div>
          </div>
        </div>
      </div>






    </div>

  );
}
