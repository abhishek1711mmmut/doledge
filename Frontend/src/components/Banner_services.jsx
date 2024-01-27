import React, { useContext, useEffect, useState } from 'react';
import Servicecss from './Servicecss' // Import your CSS file
import axios from 'axios';
import contextAuth from '../ContextAPI/ContextAuth';
import { Link } from "react-router-dom";

const Banner_services = () => {

  const {setLoading}=useContext(contextAuth);

  const [services, setServices] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/home/data`, {withCredentials: true})
    .then(response => {
      const data = response.data.data;
      setServices(data.services);
      setLoading(false);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <>
            <br></br>

<Servicecss />
<div className="bg-indigo-900 w-[100%] text-white md:h-28 px-4 md:px-48 flex justify-center items-center leading-3 ">
  <div className="text-center p-2 leading-10 font-sans text-xl xl:text-4xl lr:text-3xl md:text-3xl sm:text-2xl md:tracking-wider">
    Elevate your career prospects and stand out to <br className='hidden md:block'/> employers with our personalized resume services
  </div>
</div>

<br></br>
<br></br>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-5 w-[80%] md:w-[70%] max-w-[1500px] mx-auto">
{services?.map((service)=>(
  <div key={service._id} className='flex flex-col justify-between items-center gap-y-6 md:gap-y-3 border-2 border-[#00000066]/30 p-1 py-3 rounded-lg  max-[500px]:w-[93%] max-md:w-[70%] md:w-[95%] lg:w-full mx-auto' style={{fontFamily:'poppins'}}>
    <div className='w-[80%] md:w-[65%] md:h-[150px]'>
      <img src={service.image} alt="" className='h-full w-full object-fill rounded-lg'/>
    </div>
    <h1 className='text-xl text-center'>
      {service.title}
    </h1>
    <hr className='w-[90%] h-[2px] border-none bg-gray-700'/>
    <h2 className='text-base text-center w-[95%] mx-auto'>
      {service.description}
    </h2>
    <div className='flex justify-between items-center text-[12px] leading-[15px] px-2 w-full'>
      <button>
        Starts from {service.price}/-
      </button>
      <Link className='text-blue-500'>
        KNOW MORE 
      </Link>
    </div>
  </div>
))}



      </div>
    </>
  );
};

export default Banner_services;
