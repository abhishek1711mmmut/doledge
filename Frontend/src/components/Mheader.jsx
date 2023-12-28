import React from 'react'

const Mheader = () => {
  const items=[
    {
      id: 1,
      src: 'https://i.pinimg.com/originals/f3/a0/89/f3a089c66e5c6c958e4d5eb7e8321bd9.png',
      link: 'link here',
    },
    {
      id: 2,
      src: 'https://img.freepik.com/free-vector/job-interview-process-hiring-new-employees-hr-specialist-cartoon-character-talking-new-candidatee-recruitment-employment-headhunting-concept-illustration_335657-2034.jpg',
      link: 'link here',
    },
    {
      id: 3,
      src: 'https://niceillustrations.com/wp-content/uploads/2021/03/Successful-Payment-color-800px.png',
      link: 'link here',
    }
  ]
  return (
    <div className='w-[90%] flex flex-col w-auto py-4'>
        <div className=" items-center ">
          <h1 className=" text-center text-4xl font-sans">
            <br></br>
            Benefits of Buying Text <br></br> Resume Services with <br></br>{" "}
            Doledge India
          </h1>

          <br></br>
          
          <div className="w-[100%] px-5">
              <h2 className="text-center text-xl text-gray-500">
                Rank higher in recruiter searches, Get instant relevant Jobs and <br /> reach out to recruiters to increase your chances of getting a call
              </h2>
              <div className="font-bold font-sans pt-4 pb-4 sm:flex flex-row items-center justify-center md:flex md:flex-wrap md:justify-center">
                <button className="bg-gray-100 hover:bg-gray-200 text-black hover:text-white m-2 py-2 px-6 rounded-full mb-4 md:mr-4">
                  Visibility
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-black hover:text-white m-2 py-2 px-6 rounded-full mb-4 md:mr-4">
                  Professional
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-black hover:text-white m-2 py-2 px-6 rounded-full mb-4 md:mr-4">
                  StandOut
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-black hover:text-white m-2 py-2 px-6 rounded-full mb-4 md:mr-4">
                  Recruiter Friendly
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-black hover:text-white m-2 py-2 px-6 rounded-full mb-4 md:mr-4">
                  Error Free
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-black hover:text-white py-2 px-6 rounded-full mb-4 md:mr-4">
                  Assurity
                </button>
              </div>
          </div>
        </div>

        <div className="w-5/6 mx-auto py-4">
        <div className="md:flex items-center justify-between border-[3px] lg:rounded border-gray-200 md:h-411 md:flex-row flex-col">
        <div className="md:w-[90%] w-full py-6 px-8  text-gray-900 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-sans mb-4 text-left"> Unlocking Career Opportunities: The Benefits of Text Resume Services</h1>
          <h1 className="text-xl text-left md:text-2xl font-semibold mb-4 font-sans text-gray-500">
          </h1>
          <h1 className=" text-left text-xl md:text-2xl font-light mb-8 font-sans">
          Investing in text resume services offers a streamlined approach to enhancing your job search. Your qualifications are presented clearly, making it easier for employers to quickly assess your suitability for the role. 
          </h1>
          
        </div>
        <div className="md:w-1/2 w-full flex-shrink-0 py-8 px-8 text-center md:text-right">
          <img
            src='https://img.freepik.com/premium-vector/recruitment-resume-head-hunting-concept_385073-350.jpg'
            className="mx-auto md:mx-0"
            width="350px"
            height="350px"
            alt=""
          />
        </div>
      </div>
      </div>
      
      <div className='w-5/6 mx-auto py-2' >
        <div className="border-[3px] lg:rounded border-gray-200 h-411 w-1176 items-center justify-center text-center py-4">
          <h1 className="font-bold text-3xl py-2 px-2 font-sans">
            Move ahead in Career, Faster
          </h1>

          <h2 className=" text-xl py-2 px-2 font-sans">
            Interactively transform magnetic growth strategies with our Outside
            the Box Thinking
          </h2>
          
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
            {items.map(({ id, src, link }) => (
              <div
                key={id}
                className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'
              >
                <img
                  src={src}
                  alt=''
                  className='rounded-md duration-200 hover:scale-105'
                />
                <div className='flex items-center justify-center'>
                 <h2 className=' text-2xl p-2 font-serif'>Resume Display</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>
        <div className='w-5/6 mx-auto py-4' >
        <div className=" border-[3px] lg:rounded border-gray-200 h-411 w-1176 items-center justify-center text-center p-4">
          <h2 className="text-3xl py-2 px-2 font-sans font-light">
            View ready-made samples for Text Resume, Visual Resume, Cover
            Letters
          </h2>
          
          <br />
          <br></br>

          <div className="flex flex-row justify-evenly">
            <button className="w-30 bg-blue-700 text-white m-2 py-2 px-4 rounded-full">
              Text Resume
            </button>
            <button className="w-30 bg-blue-700 text-white m-2 py-2 px-4 rounded-full">
              Visual Resume
            </button>
            <button className="w-30 bg-blue-700 text-white m-2 py-2 px-4 rounded-full">
              Cover Letter
            </button>
          </div>
        </div>
            </div>
            </div>
  )
}

export default Mheader