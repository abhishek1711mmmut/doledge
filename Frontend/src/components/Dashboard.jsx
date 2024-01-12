import React, { useContext, useEffect, useState } from "react";
import '../css/Dashboard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowLeft, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import CompleteProfile from "./CompleteProfile";
import Profile from "./Profile";
import contextAuth from "../ContextAPI/ContextAuth";
import axios from "axios";

const Dashboard = () => {
    const Auth = useContext(contextAuth);
    let [user, setUser] = useState({});
    let [section, setSection] = useState('complete');

    useEffect(() => {
        if(Auth.user){
            axios.get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/dashboard/userData/${Auth.user._id}`, {withCredentials: true})
            .then(response => {
                const data = response.data;
                setUser(data.user);
            })
            .catch(err => console.log(err))
        }
    }, [Auth.user])

    const sectionHandler = (sec) => {
        setSection(sec);
    }

    return (
        <div className="Dashboard h-full w-full flex flex-col overflow-scroll" 
        style={{
            position: 'fixed', 
            top: '0px', 
            backgroundColor: 'white',
            zIndex: 100,
        }}>
            {/* <nav className="dashboard-nav text-left py-2 px-10 text-[25px]">
                <div className="dashboard-goback py-0 px-3 w-fit">
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </div>
            </nav> */}
            <div className="h-full flex flex-row justify-evenly p-3" >
                <div className="dashboard-sidebar w-[22%] rounded-[15px]">
                    {/* User Info */}
                    <div className="user-info flex flex-col items-center py-3 mb-4" style={{border: '0px solid black'}}>
                        {/* Image side */}
                        <div className="relative">
                            <div className="percent bg-[white]">50%</div>
                            <div className="limits p-0 rounded-[50%]">
                                <div className="scaller bg-[#F58634]"></div>
                                <div className="image-wrapper p-1 rounded-[50%] bg-white m-1" style={{border: '1px solid #ccc'}}>
                                    <div className="bg-[#ebebeb] w-[80px] h-[80px] rounded-[50%] overflow-hidden">
                                        <img src={user.picture}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* text side */}
                        <div className="name text-[18px] font-bold mt-2">{user.name}</div>
                        <div className="email mt-1">{user.email}</div>
                        <button className="complete px-3 py-1 mt-3" onClick={() => sectionHandler('complete')}>Complete Profile</button>
                    </div>
                    {/* Menu */}
                    <div className="menu" style={{border: '0px solid #ccc'}}>
                        <ul className="flex flex-col items-center">
                            <li className="flex flex-row" onClick={() => sectionHandler('profile')}>
                                <div className="w-[20%] ml-2"><FontAwesomeIcon icon={faUser}/></div>
                                <div>My Profile</div>
                            </li>
                            <li className="flex flex-row">
                                <div className="w-[20%] ml-2"><FontAwesomeIcon icon={faArrowLeft}/></div>
                                <div>Go Back</div>
                            </li>
                            {/* <li className="flex flex-row">
                                <div className="w-[20%] ml-2"><FontAwesomeIcon icon={faHome}/></div>
                                <div>Main Page</div>
                            </li> */}
                        </ul>
                    </div>
                </div>
                {/* Content */}
                <div className="dashboard-content w-[70%] rounded-[15px] p-5">
                    {section == 'complete' && <CompleteProfile/>}
                    {section == 'profile' && <Profile/>}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;