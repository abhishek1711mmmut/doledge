import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Dropdown from './Dropdown';
import '../css/Navbar.css'
import "@fontsource/poppins"

import SideBar from '../UI/SideBar/SideBar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCartArrowDown, faCartFlatbed, faCartShopping, faPhone } from '@fortawesome/free-solid-svg-icons';
import contextAuth from '../ContextAPI/ContextAuth.js';

const Navbar = () => {
  const Auth = useContext(contextAuth);;
  let [active, setActive] = useState(false);

  const sideBarHandler = (type) => {
    if(type == 'close'){
      setActive(false);
      console.log(active)

    }
    else if( type == 'toggle'){
      let reverse = !active;
      console.log(active)
      setActive(reverse);

    }
  }

 return (
    <>
      <Container fluid className="px-0">
        {/* TopNav */}
        <div className='flex flex-row justify-end items-center py-2 md:px-8 text-[18px] bg-[#fafafa]'>
          <div className='mr-4 flex flex-row px-2 border-2 rounded-[10px]'>
            <div><FontAwesomeIcon icon={faPhone}/></div>
            {/* <div className='ml-2'>Call Us</div> */}
          </div>

          <div className='mr-4 flex flex-row px-2 border-2 rounded-[10px]'>
            <div><FontAwesomeIcon icon={faCartShopping}/></div>
            {/* <div className='ml-2'>Cart</div> */}
          </div>

          <div className='mr-4 flex flex-row px-2 border-2 rounded-[10px]'>
            <div><FontAwesomeIcon icon={faBell}/></div>
            {/* <div className='ml-2'>Notifications</div> */}
          </div>
        </div>

        {/* NavBar */}
        <nav className="navbar navbar-expand-lg navbar-light" style={{border: '0px solid black'}}>
          {/* Logo */}
          <Link to='/' className="navbar-brand">
            <img
              src={require('../images/logo-removed.png')}
              alt="Logo"
            />
          </Link>

          {/* SideBar */}
          <button className="navbar-toggler" type="button" onClick={() => sideBarHandler('toggle')}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          <SideBar active={active} onClick={sideBarHandler}/>

          {/* Nav Links */}
          <div className="navbar-links">
            <ul className="navbar-nav" style={{border: '0px solid black'}}>
              <li className="nav-item">
                <Link className="nav-link" to='/'>
                 Home
                </Link>
              </li> 
              <Dropdown/>
            </ul>
          </div>

          {/* Register buttons */}
          <div className='navbar-links'>
          <ul className="navbar-nav navigation-btn flex items-center" style={{border: '0px solid black'}}>
              {!Auth.token ? (
                <>
                  <li className="nav-item">
                    <Link className="btn login-button" to='/login'>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="btn register-button" to='/register'>
                      Register
                    </Link>
                  </li>
                </>) : (
                  <>
                    <li className="nav-item">
                      <Link className="btn register-button" onClick={() => Auth.logout()}>
                        Logout
                      </Link>
                    </li>
                    <li className="employer-login1">
                      <div className="employer-login-container">
                      <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" className='' />
                      </svg>
                      <Link className="btn employer-login1" to="#employer" style={{
                        margin: 0, fontSize: 15,
                        fontFamily: 'Poppins',
                        fontWeight: '400',
                        wordWrap: 'break-word'
                      }}>
                          {Auth.user.name}
                      </Link>
                      </div>
                    </li>
                  </>
                )
              }
            </ul>
          </div>
        </nav>
      </Container>
    </>
 );
};

export default Navbar;