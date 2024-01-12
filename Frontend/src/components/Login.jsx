import React, { useContext, useState } from "react";
import '../css/Register.css';

import InputElement from "../UI/InputElement/InputElement";
import axios from "axios";
import contextAuth from "../ContextAPI/ContextAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const Auth = useContext(contextAuth);
    let [overAllValid, setOverAllValid] = useState(false)
    let [inputs, setInputs] = useState({
        email: {
            value: '',
            isValid: true,
        },
        password: {
            value: '',
            isValid: true,
        },
    })

    const changeHandler = (event, type) => {
        let value = event.target.value;
        let updatedInputs = {...inputs};
        
        if(!value || value.length == 0)
        updatedInputs[type].isValid = false;
        else
        updatedInputs[type].isValid = true; 

        updatedInputs[type].value = value;
        setInputs(updatedInputs);
        overAllValidity()
    }

    const overAllValidity = () => {
        let {email, password} = inputs;
        if(email.value && password.value)
        setOverAllValid(true)
        else 
        setOverAllValid(false)
    }

    const googleLoginHandler = () => {
        event.preventDefault()
        window.open(`${process.env.REACT_APP_SERVER_PRO_URL}/signin/google`, '_self');
      }

    const submitFormHanadler = (event) => {
        event.preventDefault();
        Auth.loadingHandler(true);
        const {email, password} = inputs;
        
        let data = {}
        data.email = email.value;
        data.password = password.value;
    
        axios.post(`${process.env.REACT_APP_SERVER_PRO_URL}/api/auth/login`, data)
        .then(response => {
            let data = response.data;
            if(data.status == 'success'){
                Auth.login(data.user, data.token)
                Auth.loadingHandler(false);
                navigate('/')
            }
            else {
                Auth.loadingHandler(false)
                Auth.errorHandler({message: data.error, type: data.type})
                // console.log(response.data)
            }
        })
        .catch(err => console.log(err))
      }

    return (
        <div className='Register w-full flex flex-col justify-center items-center'>
            <form onSubmit={submitFormHanadler} className="reg-form w-[85%] flex flex-col py-4 px-4 m-5 
            sm:w-[80%]
            md:w-[70%]
            lg:w-[55%]">
                {/* Form Inputs */}
                <h4 className="mb-5 mt-1 text-left">Find a job & grow your career</h4>
                <div className="w-full flex flex-col
                sm:flex-row sm:justify-center sm:items-center">
                    <div className="w-[100%] mr-3
                    sm:w-[70%]">
                        <InputElement
                        field={'email'}
                        type={'email'}
                        label={'Email ID'}
                        placeholder={'Tell us your Email ID'}
                        error={'Email ID is required'}
                        value={inputs.email.value}
                        valid={inputs.email.isValid}
                        onChange={changeHandler}/>

                        <InputElement
                        field={'password'}
                        type={'password'}
                        label={'Password'}
                        placeholder={'Create a password for your account'}
                        error={'Password is required'}
                        value={inputs.password.value}
                        valid={inputs.password.isValid}
                        onChange={changeHandler}/>
                    </div>
                    {/* Google Register */}
                    <div className="google-container flex justify-center text-center items-center w-[270px] p-2 m-2
                    sm:flex-col sm:w-[30%] sm:m-0 sm:p-0 sm:mb-3 sm:h-[160px]">
                        <h6 className="font-bold mt-1 mr-2 sm:mt-0 sm:mr-0 sm:mb-2">Continue With</h6>
                        <button className="google flex flex-row" onClick={googleLoginHandler}>
                            <div><img className="w-[20px] [h-20px] mr-2 mt-0.5" src={require("../images/google-48.png")}/></div>
                            <div>Goolge</div>
                        </button>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="submitWrapper flex flex-col text-left mt-2">
                    <p className="gray13px">By clicking Sign in, you agree to the Terms and Conditions & Privacy Policy of Doledge.com</p>
                    <button
                    type="submit" 
                    className="submit text-left mt-2"
                    disabled={overAllValid ? false : true}
                    style={{backgroundColor: !overAllValid && '#ccc'}}>Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Login;