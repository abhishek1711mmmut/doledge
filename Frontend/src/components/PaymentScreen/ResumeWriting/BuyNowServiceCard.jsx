import React, { useState, useEffect, useContext } from "react";
import { Card, Typography, Button, Box } from "@mui/material";
import {
  FormControl,
  FormControlLabel,
  Radio,
  Checkbox,
  RadioGroup,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "axios";
import contextAuth from "../../../ContextAPI/ContextAuth";

export default function BuyNowServiceCard() {
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
            (service) => service.serviceId === "visual-resume"
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
  
  
//   const handleBuyNow = async () => {
//   try {
//     const selectedServiceId = serviceId;
//     const selectedOptionId = optionId;

//     const response = await axios.post(
//       "process.env.REACT_APP_SERVER_PRO_URL/api/resumeService/select-service-option",
//       {
//         serviceId: selectedServiceId,
//         optionId: selectedOptionId,
//       }
//     );
//     console.log("this is from post", response.data);
//   } catch (error) {
//     console.error("Error selecting service option:", error);
//   }
// };

  

  const location = useLocation();
  const ResumeType = location.pathname.includes("Visual") ? "Visual" : "Text";

  return (
    <>
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
    </>
  );
}
