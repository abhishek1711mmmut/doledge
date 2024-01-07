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
  let [blogs, setBlogs] = useState([]);
  let [services, setServices] = useState([]);
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/services`, {withCredentials: true})
    .then(response => {
      const data = response.data;
      setServices(data.services);
    })
    .catch(err => console.log(err));
  }, [])

  // callback to setServices
  useEffect(() => {
    if(!!services || services.length != 0){
      axios.get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/blogs`, {withCredentials: true})
      .then(response => {
        const data = response.data;
        setBlogs(data.blogs);
      })
      .catch(err => console.log(err));
      setLoading(false);
    }
  }, [services])

  return (
    <div>
        {loading && <Spinner/>}
        <Banner/>
        <Banner_services services={services}/>
        <Header/>
        <Contact/>
        <Mheader/>
        <Blog blogs={blogs}/>
        <Footer/>
    </div>
  )
}

export default MAINheader