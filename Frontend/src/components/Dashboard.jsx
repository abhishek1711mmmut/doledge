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
    let [percentage, setPercentage] = useState(0);
    let [section, setSection] = useState('profile');
    let [flag, setFlag] = useState(0);

    useEffect(() => {
        if(Auth.user){
            axios.get(`${process.env.REACT_APP_SERVER_PRO_URL}/api/dashboard/userData/${Auth.user._id}`, {withCredentials: true})
            .then(response => {
                const data = response.data;
                let percent = parseInt((data.count/6) * 100);
                console.log(data)
                setUser(data.user);
                setPercentage(percent);
            })
            .catch(err => console.log(err))
        }
    }, [flag, Auth.user])

    const sectionHandler = (sec) => {
        setSection(sec);
    }

    const updateStateHandler = () => {
        setFlag(++flag);
        setSection('')
    }

    console.log(user)

    return (
        <div className="Dashboard h-full w-full flex flex-col overflow-scroll" 
        style={{
            position: 'fixed', 
            top: '0px', 
            backgroundColor: 'white',
            zIndex: 100,
        }}>
            {/* wrapper of both sidebar and content */}
            <div className=" w-full flex flex-col justify-btween items-center p-3
            lg:flex lg:flex-row lg:justify-evenly lg:p-5" style={{border: '0px solid black'}}> 
                {/* SideBar */}
                <div className="dashboard-sidebar h-full rounded-[15px] w-[90%] mb-0 p-2
                lg:w-[22%]">
                    {/* User Info */}
                    <div className="user-info flex justify-center items-center m-2
                    lg:flex lg:flex-col lg:items-center lg:mt-3 lg:py-3 lg:mb-4" style={{border: '0px solid black'}}>
                        {/* Image side */}
                        <div className="relative mr-2 lg:mr-0">
                            <div className="percent bg-[white]">{percentage}%</div>
                            <div className="limits p-0 rounded-[50%]">
                                <div className="scaller bg-[#F58634]" style={{height: percentage + '%'}}></div>
                                <div className="image-wrapper p-1 rounded-[50%] bg-white m-1" style={{border: '1px solid #ccc'}}>
                                    <div className="bg-[#ebebeb] w-[80px] h-[80px] rounded-[50%] overflow-hidden">
                                        <img src={user.picture}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* text side */}
                        <div>
                            <div className="name text-[18px] font-bold mt-2">{user.name}</div>
                            <div className="email mt-1">{user.email}</div>
                            {percentage != 100 && <button className="complete px-3 py-1 mt-[10px] lg:mt-3" onClick={() => sectionHandler('complete')}>
                                Complete Profile
                            </button>
                            }
                        </div>
                            
                    </div>
                    {/* Menu */}
                    <div className="menu" style={{border: '0px solid #ccc'}}>
                        <ul className="flex flex-col items-center" style={{border: '0px solid black'}}>
                            <li className="flex flex-row w-[200px] lg:w-[70%]" onClick={() => sectionHandler('profile')}>
                                <div className="w-[20%] ml-2"><FontAwesomeIcon icon={faUser}/></div>
                                <div>My Profile</div>
                            </li>
                            <li className="flex flex-row w-[200px] lg:w-[70%]">
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
                <div className="dashboard-content w-[90%] rounded-[15px] p-5 mt-[20px] lg:mt-[0px]
                lg:w-[70%]" style={{border: section != '' && '1px solid #ccc'}}>
                    {section == 'complete' && percentage != 100 ? <CompleteProfile updateState={updateStateHandler}/> : null}
                    {section == 'profile' && <Profile user={user} updateState={updateStateHandler}/>}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;