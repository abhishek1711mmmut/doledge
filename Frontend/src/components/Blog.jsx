import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import contextAuth from "../ContextAPI/ContextAuth";
import { FaRegEye } from "react-icons/fa6";
import { PiShareFat } from "react-icons/pi";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from "react-hot-toast";

const Blog = () => {
  const { setLoading, blogs, setBlogs } = useContext(contextAuth);

  // const likeBlog = async (blogId) => {
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_SERVER_PRO_URL}/api/blogs/${blogId}/like`
  //     );
  //     const allBlogs = [...blogs];
  //     for (let i = 0; i < allBlogs.length; i++) {
  //       if (allBlogs[i]._id == blogId) {
  //         allBlogs[i] = response?.data?.data;
  //       }
  //     }
  //     setBlogs(allBlogs);
  //   } catch (error) {
  //     console.log("LIKE_BLOG API ERROR............", error);
  //   }
  // };

  const shareBlog = async (blogId) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_PRO_URL}/api/blogs/${blogId}/share`
      );
      const allBlogs = [...blogs];
      for (let i = 0; i < allBlogs.length; i++) {
        if (allBlogs[i]._id == blogId) {
          allBlogs[i] = response?.data?.data;
        }
      }
      setBlogs(allBlogs);
      navigator.clipboard.writeText(
        window.location.toString() + `blogs/${blogId}`
      );
      toast.success("Link Copied to Clipboard");
    } catch (error) {
      console.log("LIKE_BLOG API ERROR............", error);
      toast.error("Could not share blog");
    }
  };

  const LimitedWordsParagraph = ({ html, maxWords }) => {
    const paragraphRef = useRef();

    useEffect(() => {
      const originalHtml = html;
      const paragraph = paragraphRef.current;

      // Create a temporary div to parse and manipulate the HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = originalHtml;

      // Traverse the DOM nodes and capture the required number of words
      const traverseNodes = (node, remainingWords) => {
        if (!remainingWords) return;

        if (node.nodeType === 3) {
          // Text node
          const words = node.nodeValue.trim().split(" ");
          const limitedWords = words.slice(0, remainingWords);
          node.nodeValue = limitedWords.join(" ");
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
      paragraph.innerHTML = "";
      paragraph.appendChild(tempDiv);
    }, [html, maxWords]);

    return (
      <div ref={paragraphRef} className="text-left list-disc max-sm:text-sm" />
    );
  };

  function SampleNextArrow(props) {
    const { onClick } = props;

    return (
      <button onClick={onClick}>
        <BsFillArrowRightCircleFill className="text-blue-500 text-[30px] md:text-[40px]" />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick}>
        <BsFillArrowLeftCircleFill className="text-blue-500 text-[30px] md:text-[40px]" />
      </button>
    );
  }

  const responsive = [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        dotsClass: "slick-dots !m-0",
      },
    },
  ];

  const settings = {
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className:
      "!flex !justify-between !items-center !gap-x-3 !p-1 w-[95%] lg:w-[80%] !max-w-[1500px] !mx-auto",
    responsive: responsive,
    infinite: true,
    autoplay: false,
    swipeToSlide: true,
    pauseOnHover: true,
  };

  return (
    <div
      className="my-10 flex flex-col gap-y-10 blog-list-style-type w-full"
      style={{ fontFamily: "inter" }}
    >
      <h1 className="text-4xl font-bold text-center">Latest Blogs</h1>

      {blogs !== false && (
        <Slider {...settings}>
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col items-center justify-between border-2 w-full border-[#00000033] rounded-xl p-3 max-sm:h-[350px] h-[400px]"
            >
              <div className="h-[50%]">
                <img
                  src={blog?.image}
                  alt="blog_image"
                  loading="lazy"
                  className="h-full mx-auto rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between h-[50%] pt-2 w-full">
                <div className="flex flex-col gap-y-1 text-center">
                  <h2 className="text-base md:text-lg font-medium">
                    {blog?.title}
                  </h2>
                  <LimitedWordsParagraph
                    html={blog?.description}
                    maxWords={15}
                  />
                </div>
                <div className="flex gap-x-5 lg:gap-x-10 border-2 border-[#00000026] bg-[#F8F8F8] rounded-2xl px-2 lg:px-3 w-fit md:w-[50%] font-bold text-base md:text-lg self-end">
                  <div
                    className="flex justify-between items-center gap-x-2 mx-auto cursor-pointer"
                    onClick={() => likeBlog(blog._id)}
                  >
                    <FaRegEye />
                    {blog?.likes}
                  </div>
                  <div
                    className="flex justify-between items-center gap-x-2 mx-auto cursor-pointer"
                    onClick={() => shareBlog(blog._id)}
                  >
                    <PiShareFat />
                    {blog?.share}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Blog;
