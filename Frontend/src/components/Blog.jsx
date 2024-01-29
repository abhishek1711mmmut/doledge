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

  let [blogs, setBolgs] = useState([]);

  const swiperRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/home/data`, {withCredentials: true})
    .then(async(response) => {
      const blogs = await response.data.data.blogs;
      setBolgs(blogs);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    });

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
  
  const LimitedWordsParagraph = ({ html, maxWords }) => {
    const paragraphRef = useRef();
  
    useEffect(() => {
      const originalHtml = html;
      const paragraph = paragraphRef.current;
  
      // Create a temporary div to parse and manipulate the HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = originalHtml;
  
      // Traverse the DOM nodes and capture the required number of words
      const traverseNodes = (node, remainingWords) => {
        if (!remainingWords) return;
  
        if (node.nodeType === 3) {
          // Text node
          const words = node.nodeValue.trim().split(' ');
          const limitedWords = words.slice(0, remainingWords);
          node.nodeValue = limitedWords.join(' ');
          remainingWords -= limitedWords.length;
        } else if (node.nodeType === 1) {
          // Element node
          for (const childNode of node.childNodes) {
            traverseNodes(childNode, remainingWords);
          }
        }
      };
  
      traverseNodes(tempDiv, maxWords);
  
      // Clear the existing content and append the modified HTML
      paragraph.innerHTML = '';
      paragraph.appendChild(tempDiv);
    }, [html, maxWords]);
  
    return <div ref={paragraphRef} className='text-left list-disc'/>;
  };

  return (
    
    <div className='w-[80%] md:w-[78%] max-w-[1500px] mx-auto my-10 flex flex-col gap-y-10 blog-list-style-type' style={{fontFamily:'inter'}}>
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
                      <LimitedWordsParagraph html={blog?.description} maxWords={13} />
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
    </div>

  )
}

export default Blog