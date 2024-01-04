import React, { Fragment, useContext } from "react";
import styles from '../../css/SideBar.module.css';

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
                <div className={styles.header}>
                    <div className={styles.title}>
                        <div className={styles.close}>
                            <button onClick={() => props.onClick('close')}>
                                <FontAwesomeIcon icon={faXmark} style={{fontSize: '30px'}}/>
                            </button>
                        </div>
                        Services
                    </div>
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