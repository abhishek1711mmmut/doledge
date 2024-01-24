import React, { useContext, useEffect, useState } from 'react'
import Banner from './Banner'
import Banner_services from './Banner_services'
import Header from './Header'
import Contact from './Contact'
import Blog from './Blog'
import Footer from './Footer'
import Mheader from './Mheader'
import contextAuth from '../ContextAPI/ContextAuth'
import axios from 'axios'
import Spinner from '../UI/Spinner/Spinner'

const MAINheader = () => {
  let [loading, setLoading] = useState(true);
  let [state, setState] = useState({
    services: [{
      "_id": "6599aab47be983fade200d0a",
      "title": "Cover Letter",
      "description": "Get noticed with a personalized cover letter that opens doors to your dream career\n",
      "price": 5299,
      "image": "https://static-web.grammarly.com/1e6ajr2k4140/3ktFBOEwLsrgUnXPd3MmuO/5b993bbb165846dd2e66aea8cf0dfbee/Frame_1165__4_.png?w=1280"
  },
  {
      "_id": "6599aae37be983fade200d0b",
      "title": "Profile Update",
      "description": "Elevate your online presence with a profile update",
      "price": 5299,
      "image": "https://spacetms.com/wp-content/uploads/2020/02/blog-masonry-img3.png"
  },
  {
      "_id": "6599ab0d7be983fade200d0c",
      "title": "Social Profiler",
      "description": "Unlock insights & connect with the power of our social tool",
      "price": 5299,
      "image": "https://thumbs.dreamstime.com/b/social-media-profile-smartphone-man-avatar-text-button-differents-icons-likes-messages-vector-illustration-153009154.jpg"
  },
  {
      "_id": "6599ab427be983fade200d0d",
      "title": "Highlight Your Resume",
      "description": "Elevate your resume to capture attention and seize opportunities",
      "price": 5299,
      "image": "https://media.istockphoto.com/id/1385057859/vector/business-mentor-helps-to-improve-career-and-holding-stairs-steps-vector-illustration.jpg?s=612x612&w=0&k=20&c=O_89ZSqgJ7yxt8wqwsSAvoLFY4KjFohbLdbZHgEBVTw="
  },
  {
      "_id": "6599ab667be983fade200d0e",
      "title": "Job Search Assistant",
      "description": "Leverage our expert job search assistant to discover, apply, and succeed in your dream career",
      "price": 5299,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nmkSiK80CNMNmhu_IZH0DgW-TGAVI74_Gw&usqp=CAU"
  },
  {
      "_id": "6599ab997be983fade200d0f",
      "title": "Interview Preparations",
      "description": "Our preparations ensure you're ready to confidently navigate any job interview successfully",
      "price": 5299,
      "image": "https://static.vecteezy.com/system/resources/previews/007/340/656/non_2x/job-interview-illustration-free-vector.jpg"
  },
  {
      "_id": "6599abc67be983fade200d10",
      "title": "Job alerts on mail & sms",
      "description": "Receive instant job alerts via email and SMS. Never miss opportunities",
      "price": 5299,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nmkSiK80CNMNmhu_IZH0DgW-TGAVI74_Gw&usqp=CAU"
  },
  {
      "_id": "65ae764f54f921128197595b",
      "title": "Zap Your Resume",
      "description": "Zap your resume to stand out and secure your dream job",
      "price": 5299,
      "image": "https://img.freepik.com/free-vector/woman-resume-with-magnifier-table-cv-resume-concept-finding-worker-apply-job-business-opportunity-cv-profile_613284-42.jpg?w=740&t=st=1705932198~exp=1705932798~hmac=dbd454aebee15fc101f0feb4e126e7525d6bbdb1cb76e490d05bdb9b31150109"
  }],
    blogs: [],
  });
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/home/data`, {withCredentials: true})
    .then(response => {
      const data = response.data.data;
      setState({services: data.services, blogs: data.blogs});
    })
    .catch(err => console.log(err));
    setLoading(false);
  }, [])

  return (
    <div>
        {loading && <Spinner/>}
        <Banner/>
        <Banner_services services={state.services}/>
        <Header/>
        <Contact/>
        <Mheader/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default MAINheader