import { Box, useTheme, Grid } from '@mui/material';
import coverImage from '../../../../images/textresume-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
// Ensure this path is correct
import { styled } from '@mui/material/styles';
import { Stepper, Step, StepLabel, Typography } from '@mui/material';
import { faCircleInfo,faMaximize ,faExternalLinkAlt,faTrophy,faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { Card, CardContent } from '@mui/material';
import DoledgeBenefits from './DoledgeBenefits';
import Blog from '../../../Blog';
import Footer from '../../../Footer';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const InternationalVisualExecutive = () => {
    const navigate=useNavigate();
    const theme = useTheme();
    const Item = styled('div')(({ theme }) => ({
      backgroundColor: '#f0f0f0',
      padding: theme.spacing(2),
      textAlign: 'center',
      height: '100px', // Set the desired height here
    }));
  
    const prices={
      price1:21499,
      price2:23499,
      price3:25499
    }
  
  
    const cardContents = [
      {
        
        steps: 'Step 1',
        title: 'Information Gathering',
        content: 'Our team reviews your information to understand your career goals, strengths, and unique selling points',
        icon: faCircleInfo
      },
      {
        steps: 'Step 2',
        title: 'Content Optimization',
  
        content: 'The text resume is formatted for maximum readability on various devices, ensuring it maintains a professional appearance.',
        icon: faMaximize
        
      },
      {
        steps: 'Step 3',
        title: 'Application Process',
        content: 'We deliver the text-optimized resume. Use it for online applications where text submission is accepted',
        icon:faExternalLinkAlt
      },
      {
        steps: 'Step 4',
        title: 'Results and Opportunities',
        content: 'Our text resume is designed to make an instant impression, helping you stand out in the competitive job market',
        icon:faTrophy
      },
    ];
  
    return (
  
  
      <div className='w-[100%] mx-auto'>
        {/* <Slide left cascade> */}
        <div className='flex flex-col md:flex-row'>
          <Box
            sx={{
              backgroundImage: `url(${coverImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
              height: '60vh',
              width: '45%',
              [theme.breakpoints.down('md')]: {
                width: '100%',
                height: '30vh',
              },
            }}
          />
  
          <Box
            className='bg-[#13274F] flex items-center'
            sx={{
              // backgroundImage: `url(${bckimg})`,
  
              // backgroundSize: 'cover',
              // backgroundRepeat: 'no-repeat',
              height: '60vh',
              width: '55%',
              [theme.breakpoints.down('md')]: {
                width: '100%',
                height: 'fit-content',
                paddingBottom: '20px'
              },
            }}
          >
            <div className="flex flex-col justify-between h-full px-7 w-[100%]">
              <div className="mt-auto mb-auto">
  
                <div className="text-white text-5xl text-left leading-[60px] max-md:max-w-full max-md:text-3xl max-lg:mt-4">
                  Text International Resumes: Elevate Your Profile, Expand your Horizons
                </div>
                <div className="text-orange-400 text-2xl text-left max-w-full mt-4 pl-3">
                  International Impressions: Internation Visual Resumes for a Global Workforce
                </div><br />
              </div>
               <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 2 }}>
                <Grid item xs={6} sm={3}>
                  <Item className='cursor-pointer rounded-t-md' onClick={()=>navigate("/Visual-Resume-International-Entry-Level")}>
                    <b>Entry-Level </b><br />
                    <p style={{ fontSize: '0.9rem' }}>(0-3) Years</p>
                  </Item>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Item className='cursor-pointer rounded-t-md' onClick={()=>navigate("/Visual-Resume-International-Middle-Level")}>
                    <b>Middle-Level </b><br />
                    <p style={{ fontSize: '0.9rem' }}>(3-8) Years</p>
                  </Item>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Item className='cursor-pointer rounded-t-md' onClick={()=>navigate("/Visual-Resume-International-Senior-Level")}>
                    <b>Senior-Level</b><br />
                    <p style={{ fontSize: '0.9rem' }}>(8-15) Years</p>
                  </Item>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Item className='scale-y-110 -translate-y-1 cursor-pointer rounded-t-md' onClick={()=>navigate("/Visual-Resume-International-Executive-Level")}>
                    <b>Executive-Level </b> <br />
                    <p style={{ fontSize: '0.9rem' }}>(15 Years & Above)</p>
                  </Item>
                </Grid>
              </Grid>
            </div>
          </Box>
        </div>
        {/* </Slide> */}
  
  
        <div className="flex justify-center bg-orange-400 w-[100%] mt-2" style={{
          fontSize: 18,
          fontWeight: '500',
          padding: '15px 8px 8px',
          fontFamily: 'Poppins'
        }}>
          <div className="text-white text-center self-center max-w-[970px] max-md:max-w-full">
            Doledge's International Text Resume Services are the key to <br /> unlocking a more
            efficient and effective job search.
          </div>
  
  
        </div>
  
        {/* Doledge Benefits Sections */}
  
        <DoledgeBenefits prices={prices}/>
        
  
  
        {/* Filtering Points*/}
  
        <div className="bg-gradient-to-tr from-emerald-400 to-lime-300 w-full mt-5 text-white">
          <div className="lg:ml-[12%] md:ml-[8%] sm:ml-[4%]">
            
  
            <div className='text-left pl-4 pt-12' style={{ wordWrap: 'break-word',lineHeight:'2.7rem' }}>
              <FontAwesomeIcon icon={faCircle} style={{ color: "#ffff" }} />
  
              <span className='ml-4 text-sm md:text-lg lg:text-xl' style={{ fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>
                Expertly tailored to beat ATS filters
               
                
              </span>
            </div>
  
  
            {/* 2 */}
            <div className='text-left pl-4' style={{ wordWrap: 'break-word' ,lineHeight:'2.7rem'}}>
              <FontAwesomeIcon icon={faCircle} style={{ color: "#ffff" }} />
  
              <span className='ml-4 text-sm md:text-lg lg:text-xl' style={{ fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word'}}>
  
                Strategically incorporate industry-specific keywords to make your resume stand out
  
               
              </span>
  
  
            </div>
  
  
            {/* 3 */}
            <div className='text-left pl-4' style={{ wordWrap: 'break-word' ,lineHeight:'2.7rem'}}>
              <FontAwesomeIcon icon={faCircle} style={{ color: "#ffff" }} />
  
              <span className='ml-4 text-sm md:text-lg lg:text-xl' style={{ fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>
                Our designers create professional, aesthetically pleasing text resumes
               
              </span>
            </div>
            {/* 4 */}
            <div className='text-left pl-4' style={{ wordWrap: 'break-word' ,lineHeight:'2.7rem'}}>
              <FontAwesomeIcon icon={faCircle} style={{ color: "#ffff" }} />
  
              <span className='ml-4 text-sm md:text-lg lg:text-xl' style={{ fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>
                We valuing your input and preferences to produce a resume that truly represents you
               
              </span>
            </div>
            {/* 5 */}
            <div className='text-left pl-4' style={{ wordWrap: 'break-word' ,lineHeight:'2.7rem'}}>
              <FontAwesomeIcon icon={faCircle} style={{ color: "#ffff" }} />
  
              <span className='ml-4 text-sm md:text-lg lg:text-xl' style={{ fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>
                Making your resume usable for all individuals
               
              </span>
            </div>
            {/* 6 */}
            <div className='text-left pl-4 pb-12' style={{ wordWrap: 'break-word' ,lineHeight:'2.7rem'}}>
              <FontAwesomeIcon icon={faCircle} style={{ color: "#ffff" }} />
  
              <span className='ml-4 text-sm md:text-lg lg:text-xl' style={{ fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>
                Crafting text resumes that lead to real-world job opportunities
               
              </span>
            </div>
  
  
  
  
          </div>
  
        </div>
  
  
        {/* How it Works */}
        <div className="flex justify-center text-orange-400 font-medium  mt-16" style=
          {{
            fontSize: 26,
            fontFamily: 'Poppins',
            fontWeight: 500,
            wordWrap: 'break-word',
          }}>
          How it works?
        </div>
  
        <div className="flex justify-center p-5">
  
          <Stepper sx={{ width: '90%', }}>
  
  
            <Grid container spacing={3}>
              {cardContents.map((card, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                
                  <div style={{ fontSize: '15px', fontFamily: 'Poppins', fontWeight: 700, marginBottom: '10px', color: '#5E5E5E' }}>
                    {card.steps}
                  </div>
                  <div style={{ fontSize: '15px', fontFamily: 'Poppins', fontWeight: 700, marginBottom: '10px' }}>
                    {card.title}
                  </div>
                  <Card style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', width: '90%', borderRadius:'5%'}} className='bg-gradient-to-br from-orange-300 to-yellow-100'>
                    <div className="div" style={{ fontSize: 26,
                      fontFamily: 'Poppins',
                      fontWeight: '500',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px',marginBottom:'-10px'}}>
                      <FontAwesomeIcon icon={card.icon}  style={{color: "royalblue"}}/> 
                    </div>
                    <CardContent className='text-center' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh', }}>
                      <Typography variant="h6" component="h2" style={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: 500 }}>
                        {card.content}
                      </Typography>
  
  
                    </CardContent>
                  </Card>
  
  
                </Grid>
              ))}
            </Grid>
  
          </Stepper>
        </div>
  
  
        {/* </div> */}
  
        {/* Resume Delivery Time */}
        <div className=' mx-auto p-4 mt-8'>
          <h1 className='text-[33px] leading-[42px] font-medium'>Resume Delivery Time</h1>
          <div className='my-10'>
            <table className='mx-auto  w-[70%] text-[20px] bg-gradient-to-t from-slate-200 to-slate-50'>
              <tr className='border-2 border-black text-[26px] h-16'>
                <th>Resume Variant</th>
                <th className='border-l-2 border-r-2'>First Version</th>
                <th>Final Delivery</th>
              </tr>
              <tr className='border-2 border-black h-12'>
                <td>Regular</td>
                <td className='border-l-2 border-r-2'>8 Working Days</td>
                <td>14 Working Days</td>
              </tr>
              <tr className='border-2 border-black h-12'>
                <td>Express</td>
                <td className='border-l-2 border-r-2'>4 Working Days</td>
                <td>10 Working Days</td>
              </tr>
              <tr className='border-2 border-black h-12'>
                <td>Super Express</td>
                <td className='border-l-2 border-r-2'>2 Working Days</td>
                <td>6 Working Days</td>
              </tr>
            </table>
          </div>
        </div>
  
  
        {/* Blog */}
        <Blog/>
  
        {/* Footer */}
        <Footer/>
  
      </div>
    );
  };

export default InternationalVisualExecutive