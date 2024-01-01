import React from 'react'
import Banner from './Banner'
import Banner_services from './Banner_services'
import Header from './Header'
import Contact from './Contact'
import Blog from './Blog'
import Footer from './Footer'
import Mheader from './Mheader'

const MAINheader = () => {
  return (
    <div>
        <Banner/>
        <Banner_services/>
        <Header/>
        <Contact/>
        <Mheader/>
        <Blog/>
    </div>
  )
}

export default MAINheader