import React from 'react'
import Banner from './Banner'
import Banner_services from './Banner_services'
import Header from './Header'
import Contact from './Contact'
import Mheader from './Mheader'

const MAINheader = () => {
  
  return (
    <div>
        <Banner/>
        <Banner_services/>
        <Header/>
        <Contact/>
        <Mheader/>
    </div>
  )
}

export default MAINheader