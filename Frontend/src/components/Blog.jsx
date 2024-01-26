import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Blog = () => {

  let [loading, setLoading] = useState(true);
  let [blogs, setBolgs] = useState([]);
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/home/data`, {withCredentials: true})
    .then(response => {
      const blogs = response.data.data.blogs;
      setBolgs(blogs);
    })
    .catch(err => console.log(err));
    setLoading(false);
  }, [])

  return (
    
    <div className='w-[80%] md:w-[70%] max-w-[1500px] mx-auto pb-4 '>
      <section className="pt-[16px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                  Latest Blogs
                </h2>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full flex-wrap">
            {blogs?.map(blog => (

              <div className="w-full lg:w-[33.33%] px-4" key={blog._id}>
                <div className="max-w-[370px] mx-auto mb-10 border-[2px] shadow-lg rounded-lg p-4 cursor-pointer">
                  <div className="rounded overflow-hidden mb-8">
                    <img src={blog.image} alt="image" className="w-full" />
                  </div>
                  <div>
                    <h3>
                      <a href="#" className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                        {blog.title}
                      </a>
                    </h3>
                    <p className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary opacity-75" style={{ fontSize: '18px' }}>
                      {blog.description}

                    </p>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>
    </div>

  )
}

export default Blog