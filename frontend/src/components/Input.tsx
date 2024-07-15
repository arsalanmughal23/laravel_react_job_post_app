import React from "react";
import { TEInput } from "tw-elements-react";

interface InputState {
    name: string,
    label: string,
    type?: string,
    ref?: React.Ref<HTMLInputElement>,
    
    customClasses?: string,
    value?: string,
    id?: string,
    isRequired?: boolean,
    handleChange?: Function
}

const fixedInputClasses = '';

export default function Input(
    {
        name,
        label,
        type='text',
        ref,
        customClasses,
        value,
        id,
        isRequired=false,
        handleChange=()=>{},
    }:InputState) {
 
    return (
        <TEInput
            name={name}
            labelID={name}
            label={label}
            type={type}
            ref={ref}
            className={`${customClasses} ${fixedInputClasses}`}
            onChange={()=>handleChange()}
            value={value}
            id={id}
            required={isRequired}
        />
    )
}