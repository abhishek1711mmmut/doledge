import * as React from 'react';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheck, faTimesCircle, faCircle, faTimes, faCheckCircle, faGaugeSimpleHigh } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import BuyNowServiceCard from './BuyNowServiceCard';
// import Slide from 'react-reveal/Slide';
export default function DoledgeBenefits() {
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
      <div className="text-black text-3xl leading-10 whitespace-nowrap w-[18vw] h-[7vh] py-2" style={{fontWeight:500}}>
      Doledge Benefits{" "}
    </div>

      </div>

    




      {/* Benefits */}
      {/* <Slide right cascade> */}


      {/* <div className="mt-16 sm:flex-row md:flex-row items-end bg-purple-400">
        
        </div> */}





      <div className="justify-content-center md:flex mt-5 md:ml-20 md:w-[100%]">
        <div className="div flex flex-col justify-center align-center w-[100%]">
         

          <div className="ml-12 text-black text-xl max-w-screen-sm md:max-w-full lg:max-w-2xl py-2 rounded-lg self-start sm:text-center font-semibold mb-2" style={{ fontFamily: 'Poppins', fontWeight: 300 }}>
            
            Benefits of buying Text Resume service from Doledge
          </div>

          <table className="flex table table-striped table-bordered custom-table-width" style={{ width: '45vw', fontSize: '14px' }}>
            <thead>
              <tr>
                <th scope="col" className="text-left px-5 benefits-header bg-red-500">Doledge Benefits</th>
                <th scope="col" className="text-left px-5">Free Resume</th>
                <th scope="col" className="text-left px-5" style={{ color: 'white', backgroundColor: '#2e3339', fontSize: '14px', fontFamily: 'Poppins', fontWeight: 700 }}>Doledge Text Resume</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">


                <td className='benefit text-left px-5' >Instant Accessibility</td>
                <td className='text-center px-5 benefitGiven'> <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' /></td>



                <td className='text-center px-5 benefitGiven'> <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' /></td>
              </tr>
              <tr className="">

                <td className='text-left px-5'>Maximized Exposure</td>
                <td className='text-center px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center px-5'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />


                </td>
              </tr>
              <tr className="">

                <td className='text-left px-5'>Simplified Job Hunting</td>
                <td className='text-center px-5 benefitGiven'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center px-5'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />

                </td>
              </tr>

              <tr className="">

                <td className='text-left px-5'>Swift Responses</td>
                <td className='text-center px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center px-5 benefitGiven'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>

              <tr className="">

                <td className='text-left px-5'>Privacy and Security</td>
                <td className='text-center px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center px-5'>
                  <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' />
                </td>
              </tr>

              <tr className="">

                <td className='text-left px-5'>Enhanced Efficiency</td>
                <td className='text-center px-5'> <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} size='xl' /></td>
                <td className='text-center px-5 benefitGiven'>
                  <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} size='xl' />
                </td>
              </tr>

              <tr className="">

                <td className='text-left px-5'>Results Driven</td>
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


        <BuyNowServiceCard />




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
            Our customers are experiencing a host of benefits <br /> from our Text Resume Services
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center mt-12">
            <div className="w-48 h-48 border-1 rounded-full flex flex-col justify-center items-center mb-4 md:mb-0">
              <div style={{
                fontSize: 20,
                fontFamily: 'Poppins',
                fontWeight: '500'
              }}>
                <FontAwesomeIcon icon={faGaugeSimpleHigh} style={{ color: "royalblue", fontSize: 24 }} /> <br />

                Speed & efficiency</div>
              <p style={{ fontSize: 12, fontWeight: 400 }}>helping clients respond to opportunities in real-time</p>
            </div>
            <div className="w-48 h-48 border-1 rounded-full flex flex-col justify-center items-center mb-4 md:mb-0">
              <div style={{
                fontSize: 20,
                fontFamily: 'Poppins',
                fontWeight: '500'
              }}>
                <FontAwesomeIcon icon={faGaugeSimpleHigh} style={{ color: "royalblue", fontSize: 24 }} /> <br />

                Affordability</div>
              <p style={{ fontSize: 12, fontWeight: 400 }}>cost-effective solutions for modernizing job applications</p>
            </div>
            <div className="w-48 h-48 border-1 rounded-full flex flex-col justify-center items-center mb-4 md:mb-0">
              <div style={{
                fontSize: 20,
                fontFamily: 'Poppins',
                fontWeight: '500'
              }}>
                <FontAwesomeIcon icon={faGaugeSimpleHigh} style={{ color: "royalblue", fontSize: 24 }} /> <br />

                Expert Guidance</div>
              <p style={{ fontSize: 12, fontWeight: 400 }}>Helping clients make a lasting impression</p>
            </div>
          </div>
        </div>
      </div>






    </div>

  );
}
