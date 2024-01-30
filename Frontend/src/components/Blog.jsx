import React, { useState, useEffect, useContext, useRef } from 'react'
import axios from 'axios'
import contextAuth from '../ContextAPI/ContextAuth';
import { FaRegEye } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {

  const {setLoading} = useContext(contextAuth);

  let [blogs, setBolgs] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/home/data`, {withCredentials: true})
    .then(response => {
      const blogs = response.data.data.blogs;
      setBolgs(blogs);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    });
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
  
    return <div ref={paragraphRef} className='text-left list-disc max-sm:text-sm'/>;
  };

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    
    return (
      <button
        onClick={onClick}
        className={`${className.includes("slick-disabled") ? "opacity-40" : ""}`}
        disabled={className.includes("slick-disabled")}
      >
        <BsFillArrowRightCircleFill  className='text-blue-500 text-[30px] md:text-[40px]'/>
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { currentSlide, onClick } = props;
    return (
      <button
        onClick={onClick}
        className={`${currentSlide==0 && "opacity-40"}`}
        disabled={currentSlide==0}
      >
        <BsFillArrowLeftCircleFill className='text-blue-500 text-[30px] md:text-[40px]'/>
      </button>
    );
  }

  

  const responsive=[
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]

  const settings = {
    slidesToShow: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className:"!flex !justify-between !items-center !gap-x-3 !p-1 w-[95%] lg:w-[80%] !max-w-[1500px] !mx-auto",
    responsive: responsive,
    infinite: false,
  };

  return (
    
    <div className='my-10 flex flex-col gap-y-10 blog-list-style-type w-full' style={{fontFamily:'inter'}}>
      <h1 className='text-4xl font-bold text-center'>
        Latest Blogs
      </h1>

      { blogs !==false &&
        <Slider {...settings}>
          {
            blogs.map(blog=>(
              <div key={blog._id} className='flex flex-col items-center justify-between border-2 w-full border-[#00000033] rounded-xl p-3 max-sm:h-[350px] h-[400px]'>
                <div className='h-[50%]'>
                  <img src={blog?.image} alt="blog_image" loading='lazy' className='h-full mx-auto rounded-md'/>
                </div>
                <div className='flex flex-col justify-between h-[50%] pt-2 w-full'>
                  <div className='flex flex-col gap-y-1'>
                    <h2 className='text-base md:text-lg font-medium'>
                      {blog?.title}
                    </h2>
                    <LimitedWordsParagraph html={blog?.description} maxWords={13} />
                  </div>
                  <div className='flex gap-x-5 lg:gap-x-10 border-2 border-[#00000026] bg-[#F8F8F8] rounded-2xl px-2 lg:px-3 w-fit md:w-[50%] font-bold text-base md:text-lg self-end'>
                    <div className='flex justify-between items-center gap-x-2 mx-auto'>
                      <FaRegEye />
                      {blog?.likes}
                    </div>
                    <div className='flex justify-between items-center gap-x-2 mx-auto'>
                      <PiShareFat />
                      {blog?.share}
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      }
    </div>

  )
}

export default Blog