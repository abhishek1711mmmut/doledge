import React from "react";
import '../../css/Register.css';

const InputElement = (props) => {
    return (
        <div className="InputElement flex flex-col text-left m-1">
            <label className="font-bold">{props.label}</label>
            <input className="px-3 py-2 my-1" type={props.type} placeholder={props.placeholder}/>
            <p className="error">{props.error}</p>
        </div>
    )
}

export default InputElement;