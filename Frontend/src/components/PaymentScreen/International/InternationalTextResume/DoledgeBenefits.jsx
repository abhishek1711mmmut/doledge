import * as React from 'react';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheck, faTimesCircle, faCircle, faTimes, faCheckCircle, faGaugeSimpleHigh } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import BuyNowServiceCard from '../BuyNowServiceCard';
import { SiSpeedtest } from "react-icons/si";
import icon1 from '../../../../images/Icons/1.jpg'
import icon2 from '../../../../images/Icons/2.jpg'


// import Slide from 'react-reveal/Slide';
export default function DoledgeBenefits({prices}) {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    



    <div className="main flex flex-col md:ml-20 md:mr-20">
      <div className="div w-[100%] flex justify-center align-center mt-5">

         {/* <div className="flex justify-center align-center bg-green-500">
      Click me
    </div> */}
      <div className='bg-gradient-to-tr from-emerald-400 to-lime-300 w-[400px] h-[100px] rounded-xl text-4xl leading-10 flex justify-center items-center'>
        Doledge Benefits
      </div>

      </div>

    





      <div className="justify-content-center md:flex mt-5 md:ml-20 md:w-[100%]">
        <div className="div flex flex-col justify-center align-center w-[100%]">
         

          <div className="ml-12 text-black text-xl max-w-screen-sm md:max-w-full lg:max-w-2xl py-2 rounded-lg self-start sm:text-center font-semibold mb-2" style={{ fontFamily: 'Poppins', fontWeight: 300 }}>
            
            Benefits of buying Text International Resume service from Doledge
          </div>

          <table className="table table-striped table-bordered custom-table-width" style={{ width: '45vw', fontSize: '14px' }}>
            <thead>
              <tr>
                <th scope="col" className="text-left px-5 benefits-header bg-red-500">Doledge Benefits</th>
                <th scope="col" className="text-left px-5">Free Resume</th>
                <th scope="col" className="text-left px-5" style={{ color: 'white', backgroundColor: '#2e3339', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 700 }}>Doledge Text International Services</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">


                <td className='text-left px-5' >CV visible to all recruiters</td>
                <td className='text-center px-5 benefitGiven'> <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' /></td>



                <td className='text-center benefitGiven'> <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' /></td>
              </tr>
              <tr className="">

                <td className='text-left px-5'>Professional Visual Appeal</td>
                <td className='text-center px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center px-5'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />


                </td>
              </tr>
              <tr className="">

                <td className='text-left px-5'>Tailored for Targeted Industries</td>
                <td className='text-center px-5 benefitGiven'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center px-5'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />

                </td>
              </tr>

              <tr className="">

                <td className='text-left px-5'>Personalized Branding</td>
                <td className='text-center px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center px-5 benefitGiven'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>

              <tr className="">

                <td className='text-left px-5'>Integrated LinkedIn Profiles</td>
                <td className='text-center px-5'>
                  <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' />
                </td>
                <td className='text-center px-5'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>

              <tr className="">

                <td className='text-left px-5'>Enhanced Visibility</td>
                <td className='text-center px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center px-5 benefitGiven'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>

              <tr className="">

                <td className='text-left px-5'>Continuous Support and Updates</td>
                <td className='text-center px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center px-5 benefitGiven'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>



            </tbody>
          </table>

        </div>



        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quos. */}
        {/* Purchase card */}


        <BuyNowServiceCard prices={prices}/>




      </div>




      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quos. */}
      {/* Purchase card */}


      {/* </Slide> */}



      {/* Experiencing benefit section */}

      <div className="flex md:flex-col w-full md:w-[100%] align-center justify-center">
        {/* red main */}
        <div className="stats-section w-full md:w-[90%]" style={{ margin: '25px auto' }}>
          <div className="text-opacity-60 text-center font-medium leading-[48.1px] mt-8 self-center w-full max-md:max-w-full" style={{
            color: 'rgba(0, 0, 0, 0.56)',
            fontSize: 26,
            fontFamily: 'Poppins',
            fontWeight: 400,
            wordWrap: 'break-word',
          }}>
            Our customers are experiencing a host of benefits <br /> from our Text International Resume Services
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
