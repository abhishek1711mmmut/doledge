import React from "react";
import '../css/Register.css';

import InputElement from "../UI/InputElement/InputElement";
import SelectionCard from '../UI/Card/SelectionCard';

const Login = () => {
    return (
        <div className='Register w-full flex flex-col justify-center items-center'>
            <form className="reg-form w-[85%] flex flex-col py-4 px-4 m-5 
            sm:w-[80%]
            md:w-[70%]
            lg:w-[55%]">
                <h4 className="mb-5 mt-1 text-left">Find a job & grow your career</h4>
                <div className="w-full flex flex-col
                sm:flex-row sm:justify-center sm:items-center">
                    <div className="w-[100%] mr-3
                    sm:w-[70%]">
                        <InputElement
                        type={'text'}
                        label={'Full Name'}
                        placeholder={'Whats your name?'}
                        error={'Full name is required'}/>

                        <InputElement
                        type={'password'}
                        label={'Password'}
                        placeholder={'Create a password for your account'}
                        error={'Password is required'}/>
                    </div>
                    {/* Google Register */}
                    <div className="google-container flex justify-center text-center items-center w-[270px] p-2 m-2
                    sm:flex-col sm:w-[30%] sm:m-0 sm:p-0 sm:mb-3 sm:h-[160px]">
                        <h6 className="mt-1 mr-2 sm:mt-0 sm:mr-0">Continue With</h6>
                        <button className="google flex flex-row">
                            <div><img className="w-[20px] [h-20px] mr-2 mt-0.5" src={require("../images/google-48.png")}/></div>
                            <div>Goolge</div>
                        </button>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="submitWrapper flex flex-col text-left">
                    <p className="gray13px">By clicking Sign in, you agree to the Terms and Conditions & Privacy Policy of Doledge.com</p>
                    <button className="submit text-left">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Login;