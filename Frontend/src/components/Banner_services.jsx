import React, { useContext, useEffect, useState } from 'react';
import Servicecss from './Servicecss' // Import your CSS file
import axios from 'axios';
import contextAuth from '../ContextAPI/ContextAuth';

const Banner_services = (props) => {
  return (
    <>
      <br></br>

      <Servicecss />
      <div className="bg-indigo-900 w-[100%] text-white md:h-28 px-4 md:px-48 flex justify-center items-center leading-3 ">
        <div className="text-center p-2 leading-10 font-sans text-xl xl:text-4xl lr:text-3xl md:text-3xl sm:text-2xl">
          Elevate your career prospects and stand out to <br></br> employers with our personalized resume services
        </div>
      </div>

      <br></br>
      <br></br>
      
      <div className="services">
      {props.services?.map(service => {
        return (
          <div className="service-card" key={service._id}>
            <div
              className="service-thumb"
              style={{
                backgroundImage:
                  `url(${service.image})`,
              }}
            ></div>
            <article>
              <h1 className="service-title">{service.title}</h1>
              <h2 className="service-description">{service.description}</h2>
              <span className="service-price" style={{marginTop:'20px'}}>Starts from {service.price}/-</span>
              <span className="service-link" style={{marginTop:'20px'}}>KNOW MORE</span>
            </article>
          </div>
        )
      })}





      {/* <div className="services">
        <div className="service-card">
          <div
            className="service-thumb"
            style={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/1386283620/vector/resume-human-resource-management-and-hiring-concept-job-interview-recruitment-agency-cv.jpg?s=612x612&w=0&k=20&c=L7PBtb-vi1qaSoerpTi7e4SMvJGlmrBjeIXOrBYfAzc=)",
            }}
          />
          <article>
            <h1 className="service-title">Zap your resume</h1>
            <h2 className="service-description">
              Zap your resume to stand out and secure your dream job
            </h2>
            <span className="service-price" style={{marginTop:'20px'}}>Starts from 5299/-</span>
            <span className="service-link" style={{marginTop:'20px'}}>KNOW MORE</span>
          </article>
        </div> */}

        {/* Repeat similar structure for other service cards */}
        {/* <div className="service-card">
          <div
            className="service-thumb"
            style={{
              backgroundImage:
                "url(https://static-web.grammarly.com/1e6ajr2k4140/3ktFBOEwLsrgUnXPd3MmuO/5b993bbb165846dd2e66aea8cf0dfbee/Frame_1165__4_.png?w=1280)",
            }}
          />
          <article>
            <h1 className="service-title">Cover Letter</h1>
            <h2 className="service-description">
            Get noticed with a personalized cover letter that opens doors to your dream career
            </h2>
            <span className="service-price">Starts from 5299/-</span>
            <span className="service-link">KNOW MORE</span>
          </article>
        </div>




        
        <div className="service-card">
          <div
            className="service-thumb"
            style={{
              backgroundImage:
                "url(https://spacetms.com/wp-content/uploads/2020/02/blog-masonry-img3.png)",
            }}
          />
          <article>
            <h1 className="service-title">Profile Update</h1>
            <h2 className="service-description">
            Elevate your online presence with a profile update 
            </h2>
            <span className="service-price" style={{marginTop:'20px'}}>Starts from 5299/-</span>
            <span className="service-link" style={{marginTop:'20px'}}>KNOW MORE</span>
          </article>
        </div>

        


        
        <div className="service-card">
          <div
            className="service-thumb"
            style={{
              backgroundImage:
                "url(https://thumbs.dreamstime.com/b/social-media-profile-smartphone-man-avatar-text-button-differents-icons-likes-messages-vector-illustration-153009154.jpg)",
            }}
          />
          <article>
            <h1 className="service-title">Social Profiler</h1>
            <h2 className="service-description">
            Unlock insights & connect with the power of our social tool
            </h2>
            <span className="service-price" style={{marginTop:'20px'}}>Starts from 5299/-</span>
            <span className="service-link" style={{marginTop:'20px'}}>KNOW MORE</span>
          </article>
        </div>

       

        
        <div className="service-card">
          <div
            className="service-thumb"
            style={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/1385057859/vector/business-mentor-helps-to-improve-career-and-holding-stairs-steps-vector-illustration.jpg?s=612x612&w=0&k=20&c=O_89ZSqgJ7yxt8wqwsSAvoLFY4KjFohbLdbZHgEBVTw=)",
            }}
          />
          <article>
            <h1 className="service-title">Highlight Your Resume</h1>
            <h2 className="service-description">
            Elevate your resume to capture attention and seize opportunities
            </h2>
            <span className="service-price" style={{marginTop:'20px'}}>Starts from 5299/-</span>
            <span className="service-link" style={{marginTop:'20px'}}>KNOW MORE</span>
          </article>
        </div>



        
        <div className="service-card">
          <div
            className="service-thumb"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nmkSiK80CNMNmhu_IZH0DgW-TGAVI74_Gw&usqp=CAU)",
            }}
          />
          <article>
            <h1 className="service-title">Job Search Assistant</h1>
            <h2 className="service-description">
            Leverage our expert job search assistant to discover, apply, and succeed in your dream career
            </h2>
            <span className="service-price">Starts from 5299/-</span>
            <span className="service-link">KNOW MORE</span>
          </article>
        </div>




        
        <div className="service-card">
          <div
            className="service-thumb"
            style={{
              backgroundImage:
                "url(https://static.vecteezy.com/system/resources/previews/007/340/656/non_2x/job-interview-illustration-free-vector.jpg)",
            }}
          />
          <article>
            <h1 className="service-title">Interview Preparations</h1>
            <h2 className="service-description">
            Our preparations ensure you're ready to confidently navigate any job interview successfully
            </h2>
            <span className="service-price">Starts from 5299/-</span>
            <span className="service-link">KNOW MORE</span>
          </article>
        </div>


        
        <div className="service-card">
          <div
            className="service-thumb"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nmkSiK80CNMNmhu_IZH0DgW-TGAVI74_Gw&usqp=CAU)",
            }}
          />
          <article>
            <h1 className="service-title">Job alerts on mail & sms</h1>
            <h2 className="service-description">
            Receive instant job alerts via email and SMS. Never miss opportunities
            </h2>
            <span className="service-price">Starts from 5299/-</span>
            <span className="service-link">KNOW MORE</span>
          </article>
        </div> */}
        

      </div>
    </>
  );
};

export default Banner_services;
