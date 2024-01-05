import React, { useContext, useEffect, useState } from "react";
import '../css/Register.css';

import InputElement from "../UI/InputElement/InputElement";
import axios from "axios";
import contextAuth from "../ContextAPI/ContextAuth";
import { useNavigate } from "react-router-dom";

const GoogleNewPassword = () => {
    const navigate = useNavigate();
    const Auth = useContext(contextAuth);
    
    let [overAllValid, setOverAllValid] = useState(false)
    let [user, setUser] = useState({});
    let [inputs, setInputs] = useState({
        password: {
            value: '',
            isValid: true,
        },
        confirmPassword: {
            value: '',
            isValid: true,
        },
    })

    useEffect(() => {
        // get user google data on redirect to app from google
        getGoogleAuthUser()
    }, [])

    const getGoogleAuthUser = async () => {
        try {
          const { data } = await axios.get('http://localhost:8800/signup/success', {withCredentials: true});
          if(data.status == 'success'){
              let userData = {
                name: data.user._json.name,
                email: data.user._json.email,
                picture: data.user._json.picture,
                tel: null,
              };
              console.log(userData)
              setUser(userData)
          }
        } catch (err) {
          console.log(err)
        }
      }

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
        let {confirmPassword, password} = inputs;
        if(confirmPassword.value && password.value)
        setOverAllValid(true)
        else 
        setOverAllValid(false)
    }

    const submitFormHanadler = (event) => {
        event.preventDefault();
        const {confirmPassword, password} = inputs;
        
        if(password.value == confirmPassword.value){
            let data = {...user}
            data.password = password.value;
            console.log(data)
            
            axios.post('http://localhost:8800/api/auth/signup', data)
            .then(response => {
                let data = response.data;
                Auth.login(data.user, data.token)
                navigate('/')
            })
            .catch(err => console.log(err))
            }
      }

    return (
        <div className='Register w-full h-full flex flex-col justify-center items-center' style={{
            position: 'fixed',
            top: '0px',
            backgroundColor: 'white',
            zIndex: '100',
        }}>
            <form onSubmit={submitFormHanadler} className="reg-form w-[85%] flex flex-col py-4 px-4 m-5 
            sm:w-[80%]
            md:w-[70%]
            lg:w-[55%]">
                {/* Form Inputs */}
                <h4 className="mb-5 mt-1 text-left">Set a password to your account</h4>
                <div className="w-full flex flex-col
                sm:flex-row sm:justify-center sm:items-center">
                    <div className="w-[100%] mr-3
                    sm:w-[70%]">
                        <InputElement
                        field={'password'}
                        type={'password'}
                        label={'Password'}
                        placeholder={'Create a password for your account'}
                        error={'Password is required'}
                        value={inputs.password.value}
                        valid={inputs.password.isValid}
                        onChange={changeHandler}/>

                        <InputElement
                        field={'confirmPassword'}
                        type={'password'}
                        label={'Confirm Password'}
                        placeholder={'Confirm Password'}
                        error={'Must match you passwords'}
                        value={inputs.confirmPassword.value}
                        valid={inputs.confirmPassword.isValid}
                        onChange={changeHandler}/>

                    </div>
                </div>

                {/* Submit Button */}
                <div className="submitWrapper flex flex-col text-left mt-2">
                    <p className="gray13px">By clicking Sign in, you agree to the Terms and Conditions & Privacy Policy of Doledge.com</p>
                    <button
                    type="submit" 
                    className="submit text-left mt-2"
                    disabled={overAllValid ? false : true}
                    style={{backgroundColor: !overAllValid && '#ccc'}}>Continue</button>
                </div>
            </form>
        </div>
    )
}

export default GoogleNewPassword;