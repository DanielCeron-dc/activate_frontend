import React, { ChangeEvent, CSSProperties, useState } from 'react';
import { forwardRef } from 'react';

import classes from "./input.module.css";

export interface inputProps {
    minLenght?: number;
    label?: string;
    value?: string;
    style?: CSSProperties;
    required?: boolean;
    name: string;
    autoComplete?: boolean;
    type?: 'email' | 'password' | 'text' | 'number' | 'url' | 'tel' | 'search' | 'image' | 'file' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'color';
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    ref: React.ForwardedRef<HTMLInputElement>
}


const Input = forwardRef<HTMLInputElement, inputProps>((props, ref) => {
    const [valid, setValid] = useState(true); //!this is just for styling purposes
    const [isEmpty, setIsEmpty] = useState(true);  //!this is just for styling purposes


    return (<div className={classes.base} style={props.style}>
        <input
            autoComplete={ props.autoComplete ? 'true' : 'off' }
            name={ props.name}
            ref={ref}
            style={props.style}
            minLength={props.minLenght}
            className={`${classes.input} ${!isEmpty? classes.notEmpty : ""} `}
            required={props.required}
            type={props.type}   
            onChange={(e) => {
                const isValid = e.currentTarget.checkValidity();
                setValid(isValid);
                setIsEmpty(e.currentTarget.value.length === 0); 
                props.onChange && props.onChange(e);
            }}
        />
        <label className={`${classes.label} ${valid ? "" : classes.invalid}`} >
            <span className={`${classes.span}`} >
                {props.label}
            </span>
        </label>
    </div>
    );

});



export default React.memo(Input);