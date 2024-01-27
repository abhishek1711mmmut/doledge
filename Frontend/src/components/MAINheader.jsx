import React, { useContext, useEffect, useState } from 'react'
import Banner from './Banner'
import Banner_services from './Banner_services'
import Header from './Header'
import Contact from './Contact'
import Blog from './Blog'
import Footer from './Footer'
import Mheader from './Mheader'
import contextAuth from '../ContextAPI/ContextAuth'
import Spinner from '../UI/Spinner/Spinner'

const MAINheader = () => {
  // const {loading}=useContext(contextAuth)
  
  return (
    <div>
        {/* {loading && <Spinner/>} */}
        <Banner/>
        <Banner_services/>
        <Header/>
        <Contact/>
        <Mheader/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default MAINheader