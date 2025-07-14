import React, { useState } from "react";
export default function InputBox(props) {
    const isPassword = props.type === "password";
    const [dontShowPassword, setDontShowPassword] = useState(true);
    const handleChange = (e) => {
        let text = e.target.value;
        if (props.type === "phoneno" ||
            props.type === "pincode" ||
            props.type === "single_digit" ||
            props.type === "number") {
            text = text.replace(/[^0-9]/g, "");
        }
        props.onChange(text);
    };
    const maxLength = props.type === "phoneno"
        ? 10
        : props.type === "pincode"
            ? 6
            : props.type === "single_digit"
                ? 1
                : props.type === "textarea"
                    ? 500
                    : 100;
    const inputType = props.type === "phoneno" ||
        props.type === "number" ||
        props.type === "pincode" ||
        props.type === "single_digit"
        ? "tel"
        : isPassword
            ? "password"
            : "text";
    return (<div className="w-full mb-4">
      {props.label && (<label className="block text-gray-700 font-medium text-base mb-2">
          {props.label}
          {props.mandatory && <span className="text-red-600 ml-1">*</span>}
        </label>)}

      <div className="relative">
        <div className={`flex items-center bg-gray-100 rounded-xl border-0 px-5 py-3 text-base text-gray-950 placeholder:text-gray-500 focus-within:ring-2 focus-within:ring-primary focus-within:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 ${props.borderColor ? props.borderColor : ""}`}>
          {props.type === "phoneno" && (<span className="mr-2 text-gray-700 text-base">+91</span>)}

          {props.type === "textarea" ? (<textarea className="flex-1 bg-transparent focus:outline-none resize-none" placeholder={props.placeholder} value={props.value} onChange={handleChange} maxLength={maxLength} disabled={props.editable === false} rows={5}/>) : (<input type={isPassword && !dontShowPassword ? "text" : inputType} className="flex-1 bg-transparent focus:outline-none" placeholder={props.placeholder} value={props.value} onChange={handleChange} maxLength={maxLength} disabled={props.editable === false}/>)}

          {isPassword && (<button type="button" onClick={() => setDontShowPassword((prev) => !prev)} className="ml-2 text-primary text-sm font-medium hover:underline">
              {dontShowPassword ? "Show" : "Hide"}
            </button>)}
        </div>
      </div>
    </div>);
}
