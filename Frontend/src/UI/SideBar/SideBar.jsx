import React, { Fragment, useContext } from "react";
import styles from '../../css/SideBar.module.css';
import '../../css/Dashboard.css';

import Dropdown from "../../components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import contextAuth from "../../ContextAPI/ContextAuth";

const SideBar = (props) => {
    const Auth = useContext(contextAuth);
    return (
        <Fragment>
            {/* sidebar */}
            <div 
            className={styles.sideBar} 
            style={{
                transform: props.active ? 'translateX(0px)' : 'translateX(300px)',
            }}>
                {/* Header */}
                <div className={styles.header} style={{borderBottom: '0px solid #ccc'}}>
                    <div className="relative">
                        {/* <div className="percent bg-[white]">{percentage}%</div> */}
                        <div className="limits p-0 rounded-[50%]">
                            <div className="scaller bg-[#F58634]" style={{height:'0%'}}></div>
                            <div className="image-wrapper p-1 m-1 rounded-[50%] bg-white" style={{border: '1px solid #ccc'}}>
                                <div className="bg-[#ebebeb] w-[80px] h-[80px] rounded-[50%] overflow-hidden">
                                    <img src={Auth.user.picture}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* text side */}
                    <div className="name text-[18px] font-bold mt-2">{Auth.user.name}</div>
                    <div className="email mt-1 mb-1">{Auth.user.email}</div>
                    <Link to={'/dashboard'} onClick={() => props.onClick('close')} className={styles.viewProfile}>View Profile</Link>
                </div>
                {/* Content */}
                <div className={styles.content}>
                    <ul>
                        <Dropdown type={'sideBar'}/>
                    </ul>

                    <ul className="bg-red flex flex-col w-full">
                        {!Auth.token ? (
                            <>
                                <li>
                                    <Link className="w-[70%] btn login-button" to='/login' onClick={() => props.onClick('close')}>
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link className="w-[70%] btn register-button" to='/register' onClick={() => props.onClick('close')}>
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link className="w-[70%] btn register-button" onClick={() => Auth.logout()}>
                                    Logout
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

            {/* fallback div */}
            <div 
            className={styles.fallBack} 
            onClick={() => props.onClick('toggle')} 
            style={{
                display: props.active ? 'block' : 'none',
            }}></div>
        </Fragment>
    )
}

export default SideBar;