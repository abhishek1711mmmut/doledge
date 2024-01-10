import React, { useContext, useEffect, useState } from "react";
import contextAuth from "../ContextAPI/ContextAuth";
import { useNavigate } from "react-router-dom";
import InputElement from "../UI/InputElement/InputElement";
import SelectionCard from "../UI/Card/SelectionCard";

const Profile = () => {
    const Auth = useContext(contextAuth);
    const navigate = useNavigate();
    let [overAllValid, setOverAllValid] = useState(false)
    let [workStatus, setWorkStatus] = useState('');
    let [file, setFile] = useState(null);
    let [whatsApp, setWhatsApp] = useState(false);
    let [inputs, setInputs] = useState({
        text: {
        value: '',
        isValid: true,
        },
        email: {
        value: '',
        isValid: true,
        },
        password: {
        value: '',
        isValid: true,
        },
        tel: {
        value: '',
        isValid: true,
        },
    })

    useEffect(() => {
        overAllValidity()
    }, [file, workStatus, inputs])

    const workStstusHandler = (status) => {
        if (status == "I'm experienced")
        setWorkStatus("I'm experienced");
        else
        setWorkStatus("I'm fresher")
    }

    const fileHandler = async (event, action) => {
        const filePDF = await event?.target.files[0];

        if (action == 'add')
        setFile(filePDF)
        else
        setFile(false)
    }

    const checkBoxHandler = () => {
        setWhatsApp(!whatsApp);
    }

    const changeHandler = (event, type) => {
        let value = event.target.value;
        let updatedInputs = { ...inputs };

        if (!value || value.length == 0)
        updatedInputs[type].isValid = false;
        else
        updatedInputs[type].isValid = true;

        if (type == 'tel' && isNaN(value))
        return

        updatedInputs[type].value = value;
        setInputs(updatedInputs);
    }

    const overAllValidity = () => {
        let { text, email, password, tel, whatsApp } = inputs;
        if (text.value && email.value && password.value && tel.value && workStatus && file)
        setOverAllValid(true)
        else
        setOverAllValid(false)
    }

    const submitFormHanadler = (event) => {
        event.preventDefault();
        Auth.loadingHandler(true);
        const {text, email, password, tel} = inputs;
        const work = workStatus;
        const whatsAppUpdates = whatsApp;
        const resume = file;

        let data = new FormData();
        data.append('name', text.value)
        data.append('email', email.value)
        data.append('password', password.value)
        data.append('tel', tel.value)
        data.append('workStatus', work)
        data.append('whatsApp', whatsAppUpdates)
        data.append('resume', resume)

        axios.post(`${process.env.REACT_APP_SERVER_DEV_URL}/api/auth/signup`, data, {withCredentials: true})
        .then(response => {
        const data = response.data;
        if(data.status == 'success'){
            navigate('/login');
            Auth.loadingHandler(false);
        }
        else{
            Auth.loadingHandler(false);
            Auth.errorHandler({message: data.error, type: data.type})
        }
        })
        .catch(err => {
        navigate('/register')
        Auth.errorHandler({message: 'Internal server error occured', type: ''});
        Auth.loadingHandler(false);
        console.log(err)
        })
    }

    return (
        <div className="Dashboard h-full w-full flex flex-col">
            <h1 className="text-[25px] text-left font-bold mb-4 text-[#333]">Profile Information</h1>
             {/* Form Inputs */}
            <form className="reg-form w-full flex flex-col" style={{boxShadow: 'none'}}>
                <InputElement
                field={'text'}
                type={'text'}
                label={'Full Name'}
                placeholder={'Whats your name?'}
                error={'Full name is required'}
                value={inputs.text.value}
                valid={inputs.text.isValid}
                onChange={changeHandler} 
                />

                <InputElement
                field={'email'}
                type={'email'}
                label={'Email ID'}
                placeholder={'Tell us your Email ID'}
                error={'Email ID is required'}
                value={inputs.email.value}
                valid={inputs.email.isValid}
                onChange={changeHandler} 
                />

                <InputElement
                field={'password'}
                type={'password'}
                label={'Password'}
                placeholder={'Create a password for your account'}
                error={'Password is required'}
                value={inputs.password.value}
                valid={inputs.password.isValid}
                onChange={changeHandler} 
                />

                <InputElement
                field={'tel'}
                type={'tel'}
                label={'Mobile Number'}
                placeholder={'Mobile Number'}
                error={'Please enter your mobile number'}
                value={inputs.tel.value}
                valid={inputs.tel.isValid}
                onChange={changeHandler} 
                />

                {/* Cards */}
                <div className="text-left">
                <p className="font-bold mb-0">Work Status</p>
                <div className="flex flex-col sm:flex-row">
                    <SelectionCard
                    title="I'm experienced"
                    description="I have work experience (excluding internships)"
                    src={require('../images/experienced.svg').default}
                    workStatus={workStatus}
                    onClick={workStstusHandler} 
                    />
                    <SelectionCard
                    title="I'm fresher"
                    description="I am a student/ Haven't worked after graduation"
                    src={require('../images/fresher.svg').default}
                    workStatus={workStatus}
                    onClick={workStstusHandler} 
                    />
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
                        onChange={(e) => fileHandler(e, 'add')} 
                        />
                    </div>
                    <div>DOC, DOCx, PDF, RTF | Max: 2 MB</div>
                </div>
                    : <div className="selectedFile w-fit py-1 px-3 flex flex-row justify-between items-center text-[12px]
                            sm:text-[15px]">
                    <FontAwesomeIcon icon={faPaperclip} />
                    <div className="mr-5 ml-2">{file.name}</div>
                    <div className="cursor-pointer" onClick={() => fileHandler(null, 'remove')}>
                        <FontAwesomeIcon icon={faTrash} style={{ color: '#F58634' }} />
                    </div>
                    </div>}
                <p className="error">Recruiters give first preference to candidates who have a resume</p>
                </div>

                {/* WhatsApp Checkbox */}
                <div className="whatsappCheckbox flex flex-row items-center text-center ml-2 my-3">
                <input type="checkbox" onClick={checkBoxHandler}/>
                <p className="flex flex-row mt-0 ml-2">
                    Send me important updates on<img className="mx-1 w-[20px] h-[20px]" src={require('../images/whatsapp.png')} />WhatsApp
                </p>
                </div>

                {/* Submit Button */}
                <div className="submitWrapper flex flex-col text-left mt-2">
                <button
                    type="submit"
                    className="submit text-left mt-2"
                    disabled={overAllValid ? false : true}
                    style={{ backgroundColor: !overAllValid && '#ccc' }}>Update Info</button>
                </div>
            </form>
        </div>
    )
}

export default Profile;