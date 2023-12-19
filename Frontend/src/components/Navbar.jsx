import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Dropdown from './Dropdown';
import '../css/Navbar.css'
import "@fontsource/poppins"

const Navbar = () => {
 return (
    <>
      <Container fluid className="px-0">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to='/' className="navbar-brand">
            <img
              src={require('../images/logo.png')}
              alt="Logo"
            />
          </Link>

          <button className="navbar-toggler" type="button">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>

          <div className="navbar-links">
            <ul className="navbar-nav mt-4">
              <li className="nav-item">
                <Link className="nav-link" to='/'>
                 Home
                </Link>
              </li>
              <Dropdown />
            </ul>

            <ul className="navbar-nav navigation-btn">
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
              <li className="employer-login1">
                <div className="employer-login-container">
                 <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" className='' />
                 </svg>
                 <a className="btn employer-login1" href="#employer" style={{
                    margin: 0, fontSize: 15,
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    wordWrap: 'break-word'
                 }}>
                    RECRUITER LOGIN
                 </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </>
 );
};

export default Navbar;