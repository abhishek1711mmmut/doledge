// import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import Banner_services from './components/Banner_services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Mheader from './components/Mheader';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import MAINheader from './components/MAINheader';
import Redirect from './components/Redirect';
import Login from './components/Login'

import TextEntry from './components/PaymentScreen/ResumeWriting/TextResume/TextEntry';
import TextMiddle from './components/PaymentScreen/ResumeWriting/TextResume/TextMiddle';
import TextSenior from './components/PaymentScreen/ResumeWriting/TextResume/TextSenior';
import VisualEntry from './components/PaymentScreen/ResumeWriting/VisualResume/VisualEntry';
import VisualMiddle from './components/PaymentScreen/ResumeWriting/VisualResume/VisualMiddle';
import VisualSenior from './components/PaymentScreen/ResumeWriting/VisualResume/VisualSenior';

import InternationalTextEntry from './components/PaymentScreen/International/InternationalTextResume/InternationalTextEntry';
import InternationalTextMiddle from './components/PaymentScreen/International/InternationalTextResume/InternationalTextMiddle';
import InternationalTextSenior from './components/PaymentScreen/International/InternationalTextResume/InternationalTextSenior';
import InternationalVisualEntry from './components/PaymentScreen/International/InternationalVisualResume/InternationalVisualEntry';
import InternationalVisualMiddle from './components/PaymentScreen/International/InternationalVisualResume/InternationalVisualMiddle';
import InternationalVisualSenior from './components/PaymentScreen/International/InternationalVisualResume/InternationalVisualSenior';
import SocialProfiler from './components/PaymentScreen/International/SocialProfiler';
import ZapInternational from './components/PaymentScreen/International/ZapInternational';

import ZapResume from './components/PaymentScreen/CareerGrowth/ZapResume';
import HighlightResume from './components/PaymentScreen/CareerGrowth/HighlightResume';
import JobSearchAssistant6 from './components/PaymentScreen/CareerGrowth/JobSearchAssistant6';
import JobSearchAssistant3 from './components/PaymentScreen/CareerGrowth/JobSearchAssistant3';
import InterviewPreparation from './components/PaymentScreen/CareerGrowth/InterviewPreparation';
import TopManagementProfile from './components/PaymentScreen/CareerGrowth/TopManagementProfile';
import ProfileUpdate from './components/PaymentScreen/CareerGrowth/ProfileUpdate';
import PersonalPortfolio from './components/PaymentScreen/CareerGrowth/PersonalPortfolio';
import CoverLetter from './components/PaymentScreen/CareerGrowth/CoverLetter';
import ResumeQualityScore from './components/PaymentScreen/ResumeWriting/ResumeQualityScore/ResumeQualityScore';



// import TextEntryResumeref from './components/PaymentScreen/ResumeWriting/TextResume/TextResumeref';

import contextAuth from './ContextAPI/ContextAuth';
import { useEffect, useState } from 'react';
import GoogleNewPassword from './components/GoogleNewPassword';
import DataLoading from './UI/DataLoading/DataLoading';
import Modal from './UI/Modal/Modal';
import axios from 'axios';
import { responsiveFontSizes } from '@mui/material';

function App() {
  let [user, setUser] = useState({});
  let [token, setToken] = useState('');
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  useEffect(() => {    
    let userID = localStorage.getItem('userID');
    let username = localStorage.getItem('userName');
    let token = localStorage.getItem('token');
    setUser({_id: userID, name: username});
    setToken(token);
  }, [])
  
  const login = (user, token) => {
    setUser(user);
    setToken(token);
    localStorage.setItem('userID', user._id);
    localStorage.setItem('userName', user.name);
    localStorage.setItem('token', token);
  }

  const logout = () => {
    axios.get('http://localhost:8800/logout', {withCredentials: true})
    .then(() => {
      setUser({});
      setToken('');
      localStorage.removeItem('userID');
      localStorage.removeItem('userName');
      localStorage.removeItem('token');
    })
    .catch(err => console.log(err))
  }

  const errorHandler = (error) => {
    setError(error)
  }

  const loadingHandler = (status) => {
    setLoading(status);
  }

  return (
        <contextAuth.Provider value={{user, token, login, logout, error, errorHandler, loading, loadingHandler}}>
          <BrowserRouter>
            <div className="App">
                <Navbar />
                {error && <Modal error={error.message} type={error.type}/>}
                {loading && <DataLoading/>}
                <Routes>
                  {/* <Route path="/redirect" element={<Redirect/>} /> */}
                  {/* <Route path="/Text-Resume-Entry-Levelref" element={<TextEntryResumeref/>} /> */}
                  <Route path="/Text-Resume-Entry-Level" element={<TextEntry/>} />
                  <Route path="/Text-Resume-Middle-Level" element={<TextMiddle/>} />
                  <Route path="/Text-Resume-Senior-Level" element = {<TextSenior/>} />
                  <Route path="/Visual-Resume-Entry-Level" element={<VisualEntry/>} />
                  <Route path="/Visual-Resume-Middle-Level" element={<VisualMiddle/>} />
                  <Route path="/Visual-Resume-Senior-Level" element = {<VisualSenior/>} />
                  <Route path='/resume-quality-score' element={<ResumeQualityScore/>}/>
                  <Route path="/International-Resume-Entry-Level" element={<InternationalTextEntry/>} />
                  <Route path="/International-Resume-Middle-Level" element={<InternationalTextMiddle/>} />
                  <Route path="/International-Resume-Senior-Level" element = {<InternationalTextSenior/>} />
                  <Route path="/Visual-Resume-International-Entry-Level" element={<InternationalVisualEntry/>} />
                  <Route path="/Visual-Resume-International-Middle-Level" element={<InternationalVisualMiddle/>} />
                  <Route path="/Visual-Resume-International-Senior-Level" element = {<InternationalVisualSenior/>} />
                  <Route path="/socialprofiler" element={<SocialProfiler/>} />
                  <Route path="/Zap-Your-Resume-International" element={<ZapInternational/>} />
                  <Route path="Zap-Your-Resume" element={<ZapResume/>} />
                  <Route path="Highlight-Your-Resume" element={<HighlightResume/>} />
                  <Route path="/Job-Search-Assistant-6-Months" element={<JobSearchAssistant6/>} />
                  <Route path="/Job-Search-Assistant-3-Months" element={<JobSearchAssistant3/>} />
                  <Route path="/Interview-Preparation" element={<InterviewPreparation/>} />
                  <Route path="/Top-Management-Profile" element={<TopManagementProfile/>} />
                  <Route path="/Profile-Update" element={<ProfileUpdate/>} />
                  <Route path="/Personal-Portfolio" element={<PersonalPortfolio/>} />
                  <Route path="/Cover-Letter" element={<CoverLetter/>} />
                  
                  <Route path="/" element={<MAINheader/>} />
                  {!token && (
                    <>
                      <Route path="/register" element={<Register/>} />
                      <Route path="/login" element={<Login/>} />
                    </>
                  )}
                  
                  <Route path="/auth/loadLoginData" element={<DataLoading/>}/>
                  <Route path="/auth/googlePassword" element={<GoogleNewPassword/>}/>
                  <Route path='*' element={<MAINheader/>}/>
                </Routes>
            </div>
          </BrowserRouter>
        </contextAuth.Provider>
  );
}

export default App;