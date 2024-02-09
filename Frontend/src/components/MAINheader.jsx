import React, { useContext, useState, useEffect } from 'react'
import Banner from './Banner'
import Banner_services from './Banner_services'
import Header from './Header'
import Contact from './Contact'
import Mheader from './Mheader'
import contextAuth from '../ContextAPI/ContextAuth'
import axios from 'axios'
import Blog from './Blog'

const MAINheader = () => {

  const {setLoading, setBlogs}=useContext(contextAuth)

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/blogs`)
      .then((response) => {
        // const blogs = response.blogs;
        setBlogs(response?.data?.blogs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Banner />
      <Banner_services />
      <Header />
      <Contact />
      <Mheader />
      <Blog/>
    </div>
  )
}

export default MAINheader