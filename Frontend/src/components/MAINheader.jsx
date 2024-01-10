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
    services: [],
    blogs: [],
  });
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_DEV_URL}/api/home/data`, {withCredentials: true})
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
        <Blog blogs={state.blogs}/>
        <Footer/>
    </div>
  )
}

export default MAINheader