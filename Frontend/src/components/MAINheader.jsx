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

const MAINheader = () => {
  const Auth = useContext(contextAuth);
  let [blogs, setBlogs] = useState([]);
  let [services, setServices] = useState([]);
  
  useEffect(() => {
    Auth.loadingHandler(true);
    axios.get('http://localhost:8800/api/services', {withCredentials: true})
    .then(response => {
      const data = response.data;
      setServices(data.services);
    })
    .catch(err => console.log(err));
  }, [])

  // callback to setServices
  useEffect(() => {
    if(!!services || services.length != 0){
      axios.get('http://localhost:8800/api/blogs', {withCredentials: true})
      .then(response => {
        const data = response.data;
        setBlogs(data.blogs);
      })
      .catch(err => console.log(err));
    }
  }, [services])

  // callback to setBlogs
  useEffect(() => {
    if(blogs)
    Auth.loadingHandler(false);
    console.log(blogs)
  }, [blogs])

  return (
    <div>
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