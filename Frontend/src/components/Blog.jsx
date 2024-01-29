import React, { useState, useEffect, useContext, useRef } from 'react'
import axios from 'axios'
import contextAuth from '../ContextAPI/ContextAuth';
import { FaRegEye } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const Blog = () => {

  const {setLoading} = useContext(contextAuth);

  let [blogs, setBolgs] = useState([
    {
        "_id": "65b20d3c8e9fa4251d6b42c9",
        "title": "Unlocking new ond",
        "description": "Explore the",
        "image": "https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png",
        "likes": 0,
        "share": 0,
        "comments": [],
        "__v": 0
    },
    {
        "_id": "65b20e348e9fa4251d6b42d3",
        "title": "Unlocking Power and",
        "description": "Explore the MERN",
        "image": "https://img.ap7am.com/bimg/cr-2024012465b1227aed30d.jpg",
        "likes": 0,
        "share": 0,
        "comments": [],
        "__v": 0
    },
    {
        "_id": "65b20ec58e9fa4251d6b42da",
        "title": "Hey , New blog on the wa",
        "description": "This is the updated description",
        "image": "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "likes": 0,
        "share": 0,
        "comments": [],
        "__v": 0
    },
    {
        "_id": "65b2164ce4325d571c41d3dd",
        "title": "Unlocking Pwerwerower and Versatility: The MERN Stack",
        "description": "Explwerwerore the MERN (MongoDB, Express.js, React, Node.js) stack, a dynamic and powerful technology stack, seamlessly integrating database, server, and client-side development. With MERN, developers can build scalable, efficient, and modern web applications, harnessing the synergy of these cutting-edge technologies.",
        "image": "https://www.boardinfinity.com/blog/content/images/2023/01reertertMern.png",
        "likes": 0,
        "share": 0,
        "comments": [],
        "__v": 0
    },
    {
        "_id": "65b218a2e4847c52cf32d241",
        "title": "Unlsdfsdfocking Pwerwerower and Versatility: The MERN Stack",
        "description": "Expsdfsdflwerwerore the MERN (MongoDB, Express.js, React, Node.js) stack, a dynamic and powerful technology stack, seamlessly integrating database, server, and client-side development. With MERN, developers can build scalable, efficient, and modern web applications, harnessing the synergy of these cutting-edge technologies.",
        "image": "https://static.toiimg.com/thumb/msid-107068752,imgsize-34448,width-400,resizemode-4/107068752.jpg",
        "likes": 0,
        "share": 0,
        "comments": [],
        "__v": 0
    },
    {
        "_id": "65b218ace4847c52cf32d244",
        "title": "sfsdfsdf Pwerwerower and Versatility: The MERN Stack",
        "description": "sdfsdfsdf the MERN (MongoDB, Express.js, React, Node.js) stack, a dynamic and powerful technology stack, seamlessly integrating database, server, and client-side development. With MERN, developers can build scalable, efficient, and modern web applications, harnessing the synergy of these cutting-edge technologies.",
        "image": "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg",
        "likes": 0,
        "share": 0,
        "comments": [],
        "__v": 0
    },
    {
        "_id": "65b23523fe9c8453357ccaf0",
        "title": "New",
        "description": "new",
        "image": "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "likes": 0,
        "share": 0,
        "comments": [],
        "__v": 0
    }
]);

  const swiperRef = useRef(null);

  useEffect(() => {
    register();
    const params = {
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: "5%"
        },
        720: {
          slidesPerView: 2,
          spaceBetween: "5%"
        },
        540: {
          slidesPerView: 1,
          spaceBetween: "0"
        }
      },
      navigation:{
        nextEl: '.review-swiper-button-next',
        prevEl: '.review-swiper-button-prev',
      },
      loop:true
    };
    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);
  
  // useEffect(() => {
  //   setLoading(true);
  //   axios.get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/home/data`, {withCredentials: true})
  //   .then(response => {
  //     const blogs = response.data.data.blogs;
  //     setBolgs(blogs);
  //     setLoading(false);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     setLoading(false);
  //   });
  // }, [])

  return (
    
    <div className='w-[80%] md:w-[78%] max-w-[1500px] mx-auto my-10 flex flex-col gap-y-10' style={{fontFamily:'inter'}}>
      <h1 className='text-4xl font-bold text-center'>
        Latest Blogs
      </h1>
      <div className='flex justify-between gap-x-3'>
      <button className='review-swiper-button-prev h-fit w-fit self-center'>
        <BsFillArrowLeftCircleFill size={40} className='text-blue-400'/>
      </button>
      <div className='w-[90%] mx-auto'>
        <swiper-container init="false" ref={swiperRef}>
        
          {
            blogs.map((blog)=>(
              <swiper-slide key={blog._id}>
                <div className='flex flex-col items-center justify-between border-2 w-full 2xl:w-[90%] border-[#00000033] rounded-xl p-3 h-[400px]'>
                  <div className='h-[50%]'>
                    <img src={blog?.image} alt="blog_image" loading='lazy' className='h-full rounded-md'/>
                  </div>
                  <div className='flex flex-col justify-between h-[50%] w-full'>
                    <div className='flex flex-col gap-y-1'>
                      <h2 className='text-lg font-medium'>
                        {blog?.title}
                      </h2>
                      <p className='text-base font-light tracking-wide text-left'>
                        {blog?.description?.split(" ").length > 10 ? `${blog.description.split(" ").splice(0, 10).join(" ")} ...` : `${blog?.description}`}
                      </p>
                    </div>
                    <div className='flex gap-x-10 border-2 border-[#00000026] bg-[#F8F8F8] rounded-2xl px-3 w-fit font-bold text-lg self-end'>
                      <div className='flex justify-between items-center gap-x-2'>
                        <FaRegEye />
                        {blog?.likes}
                      </div>
                      <div className='flex justify-between items-center gap-x-2'>
                        <PiShareFat />
                        {blog?.share}
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            ))
          }
        </swiper-container>
      </div>
      <button className='review-swiper-button-next h-fit w-fit self-center'>
        <BsFillArrowRightCircleFill size={40} className='text-blue-400'/>
      </button>
      </div>
      {/* <div className='grid grid-cols-3 gap-5'>
        { 
          blogs.map((blog)=>(
            <div key={blog._id} className='flex flex-col items-center justify-between gap-y-2 border-2 border-[#00000033] rounded-xl p-3 xl:max-h-[400px]'>
              <div className='h-[50%]'>
                <img src={blog?.image} alt="blog_image" loading='lazy' className='h-full w-auto rounded-md'/>
              </div>
              <div className='flex flex-col justify-between gap-y-3 h-[50%] w-full'>
                <div className='flex flex-col gap-y-1'>
                  <h2 className='text-lg font-medium'>
                    {blog?.title}
                  </h2>
                  <p className='text-lg font-light tracking-wide text-left'>
                    {blog?.description?.split(" ").length > 10 ? `${blog.description.split(" ").splice(0, 10).join(" ")} ...` : `${blog?.description}`}
                  </p>
                </div>
                <div className='flex gap-x-10 border-2 border-[#00000026] bg-[#F8F8F8] rounded-2xl px-3 w-fit font-bold text-lg self-end'>
                  <div className='flex justify-between items-center gap-x-2'>
                    <FaRegEye />
                    {blog?.likes}
                  </div>
                  <div className='flex justify-between items-center gap-x-2'>
                    <PiShareFat />
                    {blog?.share}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div> */}
    </div>

  )
}

export default Blog