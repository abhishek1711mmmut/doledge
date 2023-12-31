import React, { useEffect, useState } from "react";
import '../css/Register.css';

import InputElement from "../UI/InputElement/InputElement";
import SelectionCard from '../UI/Card/SelectionCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faTrash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
    let [overAllValid, setOverAllValid] = useState(false)
    let [workStatus, setWorkStatus] = useState('');
    let [file, setFile] = useState(null);
    let [inputs, setInputs] = useState({
        text: {
            value: '',
            isValid: false,
        },
        email: {
            value: '',
            isValid: false,
        },
        password: {
            value: '',
            isValid: false,
        },
        tel: {
            value: '',
            isValid: false,
        },
        whatsApp: {
            value: false,
        },
    })

    const workStstusHandler = (status) => {
        if(status == "I'm experienced")
        setWorkStatus("I'm experienced");
        else
        setWorkStatus("I'm fresher")
    }

    const fileHandler = async (event, action) => {
        const filePDF = await event?.target.files[0];
        
        if(action == 'add')
        setFile(filePDF)
        else
        setFile(false)
    }

    const changeHandler = (event, type) => {
        let value = event.target.value;
        let updatedInputs = {...inputs};
        
        if(!value || value.length == 0)
        updatedInputs[type].isValid = false;
        else
        updatedInputs[type].isValid = true;

        if(type == 'tel' && isNaN(value))
        return

        updatedInputs[type].value = value;
        setInputs(updatedInputs);
    }

    const overAllValidity = () => {
        let {text, email, password, tel, whatsApp} = inputs;
        if(text.value && email.value && password.value && tel.value && workStatus && file)
        setOverAllValid(true)
        else 
        setOverAllValid(false)
    }

    useEffect(() => {
        overAllValidity()
    }, [file, workStatus, inputs])

    return (
        <div className='Register w-full flex flex-col justify-center items-center'>
            <form className="reg-form w-[85%] flex flex-col py-4 px-4 m-5 
            sm:w-[80%]
            md:w-[70%]
            lg:w-[55%]">
                <h4 className="mb-5 mt-1 text-left">Find a job & grow your career</h4>
                {/* Form Inputs */}
                <div className="w-full flex flex-col
                sm:flex-row sm:justify-center sm:items-center">
                    <div className="w-[100%] mr-3
                    sm:w-[70%]">
                        <InputElement
                        type={'text'}
                        label={'Full Name'}
                        placeholder={'Whats your name?'}
                        error={'Full name is required'}
                        value={inputs.text.value}
                        valid={inputs.text.isValid}
                        onChange={changeHandler}/>

                        <InputElement
                        type={'email'}
                        label={'Email ID'}
                        placeholder={'Tell us your Email ID'}
                        error={'Email ID is required'}
                        value={inputs.email.value}
                        valid={inputs.email.isValid}
                        onChange={changeHandler}/>
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

                <InputElement
                type={'password'}
                label={'Password'}
                placeholder={'Create a password for your account'}
                error={'Password is required'}
                value={inputs.password.value}
                valid={inputs.password.isValid}
                onChange={changeHandler}/>

                <InputElement
                type={'tel'}
                label={'Mobile Number'}
                placeholder={'Mobile Number'}
                error={'Please enter your mobile number'}
                value={inputs.tel.value}
                valid={inputs.tel.isValid}
                onChange={changeHandler}/>

                {/* Cards */}
                <div className="text-left">
                    <p className="font-bold mb-0">Work Status</p>
                    <div className="flex flex-col sm:flex-row">
                        <SelectionCard
                        title="I'm experienced"
                        description="I have work experience (excluding internships)"
                        src={require('../images/experienced.svg').default}
                        workStatus={workStatus}
                        onClick={workStstusHandler}/>
                        <SelectionCard
                        title="I'm fresher"
                        description="I am a student/ Haven't worked after graduation"
                        src={require('../images/fresher.svg').default}
                        workStatus={workStatus}
                        onClick={workStstusHandler}/>
                    </div>
                </div>
                
                {/* File Upload */}
                <div className="text-left mt-3">
                    <p className="font-bold mb-1">Resume</p>
                    {!file ? <div className="fileCard">
                        <div>
                            <button className="fileBtn">Upload Resume</button>
                            <input
                            className="fileInput"
                            type='file'
                            accept="image/*, .doc, .docx, .pdf, .rtf"
                            onChange={(e) => fileHandler(e, 'add')}/>
                        </div>
                        <div>DOC, DOCx, PDF, RTF | Max: 2 MB</div>
                    </div>
                    : <div className="selectedFile w-fit py-1 px-3 flex flex-row justify-between items-center text-[12px]
                    sm:text-[15px]">
                        <FontAwesomeIcon icon={faPaperclip} />
                        <div className="mr-5 ml-2">{file.name}</div>
                        <div className="cursor-pointer" onClick={() => fileHandler(null, 'remove')}>
                            <FontAwesomeIcon icon={faTrash} style={{color: '#F58634'}}/>
                        </div>
                    </div>}
                    <p className="error">Recruiters give first preference to candidates who have a resume</p>
                </div>

                {/* WhatsApp Checkbox */}
                <div className="whatsappCheckbox flex flex-row items-center text-center ml-2 my-3">
                    <input type="checkbox"/>
                    <p className="flex flex-row mt-0 ml-2">
                        Send me important updates on<img className="mx-1 w-[20px] h-[20px]" src={require('../images/whatsapp.png')}/>WhatsApp
                    </p>
                </div>

                {/* Submit Button */}
                <div className="submitWrapper flex flex-col text-left mt-2">
                    <p className="gray13px">By clicking Register, you agree to the Terms and Conditions & Privacy Policy of Doledge.com</p>
                    <button
                    className="submit text-left mt-2"
                    disabled={overAllValid ? false : true}
                    style={{backgroundColor: !overAllValid && '#ccc'}}>Register Now</button>
                </div>
            </form>
        </div>
    )
}

export default Register;