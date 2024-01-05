import axios from "axios";
import React, { useContext, useEffect } from "react";
import { BarLoader, HashLoader } from "react-spinners";
import contextAuth from "../../ContextAPI/ContextAuth";
import { useNavigate } from "react-router-dom";

const Spinner = () => {
    const Auth = useContext(contextAuth);
    const navigate = useNavigate();

    useEffect(() => {
        // get login user data on redirect to app from google
        getGoogleAuthUser(data => {
            Auth.login(data.user, data.token);
            navigate('/')
        })
    }, [])

    const getGoogleAuthUser = async (cb) => {
        try {
            const { data } = await axios.get('http://localhost:8800/signin/success', {withCredentials: true});
            if(data.status == 'success'){
                let newData = {
                    user: {
                        _id: data.user._id,
                        name: data.user.name,
                    },
                    token: data.token,
                };
                cb(newData)
            }
        } catch (err) {
            navigate('/register')
            console.log(err)
        }
    }


    return (
        <div className="w-full h-full flex justify-center items-center" style={{
            position: 'fixed',
            top: '0px',
            backgroundColor: 'white',
            zIndex: '100',
        }}>
            <HashLoader color="#F58634" />
        </div>
    )
}

export default Spinner;