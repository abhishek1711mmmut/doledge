import React, { useState, useEffect } from 'react'

const Blog = () => {

  // Destroy object at the time of deployment of backend till then static data 

  // const [blogs, setBlogs] = useState([]);

  // *****/ Uncomment when backend is completed and ready to deploy

  // useEffect(() => {
  //   // Update the URL to match your API endpoint
  //   fetch("http://localhost:8800/api/blogs")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       setBlogs(data.data);
  //     })
  //     .catch((error) => 
  //     console.error('Error fetching blogs:', error));
  // }, []);

  // ****

  const blo = [
    {
      Image: 'https://assets.bcci.tv/bcci/photos/1046/036146ff-0f1f-4669-8d22-566334ecb459.jpg',
      BlogTitle: 'Blog Title 1',
      Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias pariatur, minima qui assumenda consequuntur consequatur placeat. Ex eum voluptates pariatur!"
    },
    {
      Image: 'https://assets.bcci.tv/bcci/photos/1046/036146ff-0f1f-4669-8d22-566334ecb459.jpg',
      BlogTitle: 'Blog Title 2',
      Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias pariatur, minima qui assumenda consequuntur consequatur placeat. Ex eum voluptates pariatur!"
    },
    {
      Image: 'https://assets.bcci.tv/bcci/photos/1046/036146ff-0f1f-4669-8d22-566334ecb459.jpg',
      BlogTitle: 'Blog Title 3',
      Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias pariatur, minima qui assumenda consequuntur consequatur placeat. Ex eum voluptates pariatur!"
    },
  ];



  return (
    <div className='w-[78%] mx-auto pb-4'>
      <section className="pt-[16px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                  Latest Blogs
                </h2>
                {/* <p className="text-body-color text-lg">
            These are the latest news of our company.<br></br> You can find more on our blog page.
          </p> */}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {/* {blogs.map((blog) => ( */}
            {blo.map((b) => (

              <div className="w-full md:w-[100%] lg:w-[33.33%] px-4" key={b.BlogTitle}>
                <div className="max-w-[370px] mx-auto mb-10 border-[2px] shadow-lg rounded-lg p-4 ">
                  <div className="rounded overflow-hidden mb-8">
                    <img src={b.Image} alt="image" className="w-full" />
                  </div>
                  <div>
                    {/* <span className="bg-primary rounded inline-block text-center py-1 px-4 text-xs leading-loose font-semibold text-white mb-5">
              Dec 22, 2023
            </span> */}
                    <h3>
                      <a href="#" className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary">
                        {b.BlogTitle}
                      </a>
                    </h3>
                    <p className="font-semibold text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 inline-block text-dark hover:text-primary" style={{ fontSize: '18px' }}>
                      {b.Description}

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