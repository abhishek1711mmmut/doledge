import React from "react";
import { useTheme } from "@mui/material";
import Blog from "./../../Blog";
import { Card, Typography, Button, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import { FormControl, FormControlLabel, Checkbox } from "@mui/material";
import Footer from "./../../Footer";
const EmployeeVerification = () => {

  const theme = useTheme();
  const navigate  = useNavigate();
  const [price, setPrice] = React.useState(0);

  let newPrice =price;

  const handleChange = (e) => {

    e.preventDefault();
   (e.target.checked &&  setPrice(newPrice += parseInt(e.target.value) ));
      

   (!e.target.checked  && setPrice(newPrice -= parseInt(e.target.value )));
  }
   

const BuyNow = (e) =>{
  e.preventDefault();
  // Total Price
    alert("Total Price" + price);
    // navigate("/buy");
}


  return (
    <div className="w-full h-auto mx-auto pt-2">
      <div>
        <img
          src={require("./../../../images/ScreeningServices/EmpVerHeading.png")}
          alt="Verification"
          className=" object-cover  w-full h-auto relative"
        />

        <img
          src={require("./../../../images/ScreeningServices/Vector.png")}
          alt="Verification"
          className="w-[8%] left-[6%] top-[22%] md:top-[24%] absolute"
        />

        <p className=" text-sm sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[56px] font-extrabold  w-[max-content] text-start text-[#FFFFFF] top-[28%] sm:top-[31%] md:top-[37%] lg:top-[41%] xl:top-[45%] 2xl:top-[48%]  tracking-normal lg:tracking-wide left-[3%] absolute lg:leading-[3rem] xl:leading-[4rem] 2xl:leading-[4.8rem] ">
          {" "}
          Unlocking <br />
          Confidence Through <br /> Trustworthy <br /> Verification
        </p>

        <p className="text-[10px] md:text-base lg:text-xl 2xl:text-2xl font-extrabold  w-[fit-content] text-start text-[#FFFFFF] top-[38%] sm:top-[50%] md:top-[58%] lg:top-[71%] xl:top-[85%] 2xl:top-[99%] tracking-normal lg:tracking-wide left-[3%] absolute">
          {" "}
          Empower Your Workforce with Seamless Employment <br /> Background
          Verification Services
        </p>
      </div>

      <div className="pt-8 mx-auto">
        <div
          className="flex flex-wrap items-center justify-center bg-orange-400 w-[100%] mt-2 "
          style={{
            fontSize: 20,
            fontWeight: "500",
            padding: "18px 11px 8px",
            fontFamily: "Poppins",
          }}
        >
          <div className="text-white tracking-wider font-extrabold text-center  self-center max-w-[970px] max-md:max-w-full justify-center ">
            Pre-Employment Background Check Solutions
          </div>
        </div>
      </div>

      {/*  Details of Employee Background  Verification  */}
      <div className="w-[92%] h-auto flex flex-col mx-auto mt-4  lg:flex-row">
        <div className="basis-3/4 lg:basis-3/5  w-auto  h-auto flex flex-col  xl:flex-row  border-5 border-gray-200 rounded-xl items-center m-1 xl:m-10 p-10 lg:p-20">
          <div className="md:basis-2/3 w-auto justify-center h-auto ">
            <img
              className="p-2  xl:w-[100%] items-center"
              src={require("./../../../images/ScreeningServices/PeopleImage.jpg")}
              alt="PeopleImage"
            />
          </div>

          <div className=" md:basis-2/5    w-auto text-justify m-2  [word-spacing:15px]">
            <p className=" text-xl  text-black leading-8 lg:leading-10 tracking-wide lg:p-5">
              Employee background verification is a vital component of the
              hiring process, offering numerous benefits to employers. This
              process not only safeguards your organization but also minimizes
              potential risks{" "}
            </p>
          </div>
        </div>



        {/*       flex-basis 1/5 area  */}

        <div className="basis-1/5 xl:m-20  mx-auto w-auto h-auto bg-white flex  flex-row flex-wrap  md:flex-col items-justify ">
          {/* 1. */}
          <div className="flex pr-5 items-center justify-end mx-auto ">
            <img
              className=" w-[40%] h-auto "
              src={require("./../../../images/ScreeningServices/DrugTest.jpg")}
              alt="DrugTestImage"
            />
            <h2 className="text-lg xl:text-2xl pl-6 xl:pl-10"> Drug Test</h2>
          </div>

          {/* 2. */}

          <div className="flex items-center justify-end   mx-auto">
            <img
              className="w-[30%]"
              src={require("./../../../images/ScreeningServices/Card.jpg")}
              alt="CreditCardImage"
            />

            <h2 className="text-lg  xl:text-2xl pl-6 xl:pl-10">
              {" "}
              Credit Check
            </h2>
          </div>

          {/* 3. */}
          <div className="flex items-center justify-end  mx-auto">
            <img
              className=" w-[30%] "
              src={require("./../../../images/ScreeningServices/Legal.jpg")}
              alt="LegalRecordsImage"
            />

            <h2 className="text-lg  xl:text-2xl  pl-6 xl:pl-10">
            
              Legal Records
            </h2>
          </div>
        </div>
      </div>




      {/*   What Can be Checked Section (Flex)  */}

      <div className="p-auto h-auto mt-4 w-full flex flex-wrap flex-col items-center text-center ">
        <div className="text-white bg-[#1C8254] tracking-widest leading-7 font-extrabold w-[max-content] mx-auto h-auto  flex flex-wrap flex-col items-center text-2xl xl:text-4xl p-[30px] m-1  rounded-2xl ">
          <p>What Can Be checked ?</p>
        </div>

        <div className="w-[100%]  2xl:w-[83%] flex flex-wrap justify-evenly">
          {/* 1 */}
          <div className="w-45 2xl:w-56 flex flex-col  items-center m-6 lg:m-14 lg:ml-20">
            <img
              className="w-38 h-auto m-3 p-3 lg:m-5 2xl:p-4"
              src={require("./../../../images/ScreeningServices/Home.jpg")}
              alt="home"
            />
            <p className=" w-30  text-xl tracking-wider text-[#000000]">
              Address <br />
              Verification
            </p>
          </div>

          {/* 2 */}
          <div className="w-45  2xl:w-56 flex flex-col items-center m-6 lg:m-14 lg:ml-20 ">
            <img
              className="w-38 h-auto m-3 p-3 lg:m-5 2xl:p-4 "
              src={require("./../../../images/ScreeningServices/ID.jpg")}
              alt="ID"
            />
            <p className=" w-30 text-xl tracking-wider text-[#000000]">
              ID <br />
              Verification
            </p>
          </div>

          {/* 3 */}
          <div className="w-45 2xl:w-56  flex flex-col items-center m-6 lg:m-14 lg:ml-20 ">
            <img
              className="w-38 h-auto m-2 p-2 lg:m-4 2xl:p-3 "
              src={require("./../../../images/ScreeningServices/Edu.jpg")}
              alt="Edu"
            />
            <p className=" w-30 text-xl tracking-wider text-[#000000]">
              Education <br /> Verification
            </p>
          </div>

          {/* 4 */}
          <div className="w-45  2xl:w-56  flex flex-col items-center m-6 lg:m-14 lg:ml-20  ">
            <img
              className="w-38 h-auto m-2 p-2 lg:m-4 2xl:p-3 "
              src={require("./../../../images/ScreeningServices/Emp.jpg")}
              alt="Screening Services"
            />
            <p className=" w-30 text-xl tracking-wider text-[#000000]">
              Employment <br /> Verification
            </p>
          </div>

          {/* 5 */}
          <div className="w-45 2xl:w-56  flex flex-col items-center m-6  lg:m-14 lg:ml-20 ">
            <img
              className="w-38 h-auto  p-2 m-2 lg:m-4 2xl:p-3 "
              src={require("./../../../images/ScreeningServices/Network.jpg")}
              alt="network"
            />
            <p className=" w-30 text-xl tracking-wider text-[#000000]">
              Social Network <br /> Verification
            </p>
          </div>

          {/* 6 */}
          <div className="w-45  2xl:w-56  flex flex-col items-center m-6 lg:m-14 lg:ml-20 ">
            <img
              className="w-38 h-auto p-2  m-3 lg:m-4 2xl:p-3 "
              src={require("./../../../images/ScreeningServices/Legal.jpg")}
              alt="legal records ver"
            />
            <p className=" w-30 text-xl tracking-wider text-[#000000]">
              Legal Records <br /> Verification
            </p>
          </div>

          {/* 7 */}
          <div className="w-45  2xl:w-56 flex flex-col items-center m-6 lg:m-14 lg:ml-20 ">
            <img
              className="w-38 h-auto p-2 m-2 lg:m-4 2xl:p-3 "
              src={require("./../../../images/ScreeningServices/DB.jpg")}
              alt="DB"
            />
            <p className=" w-30 text-xl tracking-wider text-[#000000]">
              Global Databse <br /> Verification
            </p>
          </div>

          {/* 8 */}
          <div className="w-45 2xl:w-56  flex flex-col items-center m-6 lg:m-14 lg:ml-20 ">
            <img
              className="w-38 h-auto  p-2 m-2 lg:m-4 2xl:p-3 "
              src={require("./../../../images/ScreeningServices/Credit.png")}
              alt="Credit Check"
            />
            <p className=" w-30 text-xl tracking-wider text-[#000000]">
              Credit Check
            </p>
          </div>
        </div>
      </div>

      {/*   Flex Box  */}

      <div className="w-full h-auto flex flex-col lg:flex-row mx-auto items-center  ">
        <div className="basis-2/5 p-2 m-1 mx-auto items-center ">
          <Card
            className="w-[90%] mx-auto bg-[#F0EFF5] 2xl:h-[85vh] md:h-[max-content]  "
            style={{
              marginTop: "2rem",
              backgroundColor: "#F0EFF5",
            }}
          >
            <Typography
              component="div"
              gutterBottom
              style={{
                background: "#F0AF73",
                fontSize: 23,
                color: "#000000",
                padding: "18px 0",
                fontWeight: "600",
              }}
            >
              Unveiling the Background Check Process
            </Typography>

            <img
              className="object-cover  w-auto   h-auto mt-20 mx-auto"
              src={require("./../../../images/ScreeningServices/BackgroundCheck.jpg")}
              alt="Background Check Process "
            />

            <div className=" w-auto text-justify m-2 [word-spacing:10px]">
              <p className=" text-xl  text-black leading-8 lg:leading-10 tracking-wide lg:p-5">
                Background checks involve a meticulous examination of a
                candidate's history. Employers collect personal details,
                including consent forms, for criminal, employment, and education
                verification. Additional checks may include credit history or
                professional license verification. The gathered information is
                evaluated transparently, ensuring compliance with legal
                standards, fostering an informed and fair hiring process.
              </p>
            </div>
          </Card>
        </div>

        <div className="basis-2/5 p-2 m-1 mx-auto items-center ">
          <Card
            className=" xl:w-[90%] mx-auto bg-[#000000] 2xl:h-[85vh] md:h-[max-content] "
            style={{
              marginTop: "2rem",
              backgroundColor: "rgba(251, 251, 251, 1)",
            }}
          >
            <Typography
              component="div"
              gutterBottom
              style={{
                background: "#727272",
                fontSize: 23,
                color: " #FFFFFF",
                padding: "18px 0",
                fontWeight: "600",
              }}
            >
              Employment Background <br />
              Verification Services
            </Typography>

            <FormControl
              component="fieldset"
              sx={{
                marginLeft: "10px",
                padding: "20px",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel
                value="3299"
                control={<Checkbox  onChange={handleChange}/>}
                label={
                  <div>
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        padding: "25px",
                      }}
                    >
                    
                      Address Check (Physical){" "}
                      <span className="text-black text-bold ml-1">
                        Rs. 3299/-
                      </span>
                    </Typography>
                  </div>
                }
                labelPlacement="end"
              />

              <FormControlLabel
                value="2199"
                control={<Checkbox onChange={handleChange} />}
                label={
                  <div>
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        padding: "25px",
                      }}
                    >
                    
                      Address Check (Digital){" "}
                      <span className="text-black text-bold ml-6">
                        Rs. 2199/-
                      </span>
                    </Typography>
                  </div>
                }
                labelPlacement="end"
              />

              <FormControlLabel
                value="8990"
                control={<Checkbox  onChange={handleChange} />}
                label={
                  <div>
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        padding: "25px",
                      }}
                    >
                    
                      Previous Employment
                      <span className="text-black text-bold ml-12">
                        Rs. 8990/-
                      </span>
                    </Typography>
                  </div>
                }
                labelPlacement="end"
              />

              <FormControlLabel
                value="9200"
                control={<Checkbox onChange={handleChange} />}
                label={
                  <div>
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        padding: "25px",
                      }}
                    >
                      
                      Education Verification
                      <span className="text-black text-bold ml-11">
                        Rs. 9200/-
                      </span>
                    </Typography>
                  </div>
                }
                labelPlacement="end"
              />

              <FormControlLabel
                value="6900"
                control={<Checkbox onChange={handleChange} />}
                label={
                  <div>
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        padding: "25px",
                      }}
                    >
                      
                      Current Employment
                      <span className="text-black text-bold ml-14">
                        Rs. 6900/-
                      </span>
                    </Typography>
                  </div>
                }
                labelPlacement="end"
              />

              <FormControlLabel
                value="8799"
                control={<Checkbox onChange={handleChange} />}
                label={
                  <div>
                    <Typography
                      style={{
                        fontSize: "20px",
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        padding: "25px",
                      }}
                    >
                      
                      Drug Test (5 Panel)
                      <span className="text-black text-bold ml-20">
                        Rs. 8799/-
                      </span>
                    </Typography>
                  </div>
                }
                labelPlacement="end"
              />
            </FormControl>

            <Box sx={{ textAlign: "center", padding: "40px" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#F58634",
                  color: "#000000",
                  fontWeight: "600",
                  borderRadius: "10px",
                  width: "max-content",
                }}
                onClick={BuyNow}
              >
                Buy Now
              </Button>
            </Box>
            {/* </Slide> */}
          </Card>
        </div>
      </div>







      {/* Background Verification check Points  */}

      <div className="m-3">
        <div className="w-full h-auto mx-auto ">
          
          <h1 className="text-[#000000] text-center text-2xl font-normal">
            
            Importance of Employee Background Verification Check
          </h1>
        </div>

        <div className=" w-[92%]  basis-2/3 flex  flex-row flex-wrap xl:flex-row p-5 m-4 mx-auto items-center border-2 border-gray-200 rounded-xl">
          <div className=" h-auto mx-auto">
            <img
              className="w-[100%] mx-auto"
              src={require("./../../../images/ScreeningServices/BackgroundVerification.jpg")}
              alt=" Background Verification "
            />
          </div>

          <div className="basis-4/5 xl:basis-1/3  xl:m-20  w-auto h-auto bg-white mx-auto items-around ">
            {/* 1. */}
            <div className="flex  pr-5 mb-4">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#F58634", fontSize: "25px" }}
              />
              <h2 className="text-xl  xl:text-2xl pl-7 xl:pl-10">
              
                Risk Mitigation
              </h2>
            </div>
            {/* 2. */}
            <div className="flex pr-5 mb-4">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#F58634", fontSize: "25px" }}
              />
              <h2 className="text-xl  xl:text-2xl pl-7 xl:pl-10">
                
                Workplace Security
              </h2>
            </div>
            {/* 3. */}
            <div className="flex pr-5 mb-4">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#F58634", fontSize: "25px" }}
              />
              <h2 className="text-xl  xl:text-2xl pl-7 xl:pl-10">
                
                Legal Compliance
              </h2>
            </div>
            {/* 4. */}
            <div className="flex pr-5 mb-4">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#F58634", fontSize: "25px" }}
              />
              <h2 className="text-xl  xl:text-2xl pl-7 xl:pl-10">
                
                Protect Company Reputation
              </h2>
            </div>
            {/* 5. */}
            <div className="flex pr-5 mb-4">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#F58634", fontSize: "25px" }}
              />
              <h2 className="text-xl  xl:text-2xl pl-7 xl:pl-10">
                Enhanced Productivity
              </h2>
            </div>
            {/* 6. */}
            <div className="flex pr-5  mb-4">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "#F58634", fontSize: "25px" }}
              />
              <h2 className="text-xl  xl:text-2xl pl-7 xl:pl-10">
          
                Prevent Fraud
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Blog />

      <Footer />
    </div>
  );
};

export default EmployeeVerification;
