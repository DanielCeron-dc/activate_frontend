import { useState, ForwardedRef, CSSProperties, forwardRef, ChangeEvent} from 'react';

import classes from './TextArea.module.css'; 

type TextAreaProps = {
    ref?: ForwardedRef<HTMLTextAreaElement>,
    label?: string;
    value?: string;
    style?: CSSProperties;
    required?: boolean;
    name: string;
    autoComplete?: boolean;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};




const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
    const [valid, setValid] = useState(true); //!this is just for styling purposes
    const [isEmpty, setIsEmpty] = useState(true);  //!this is just for styling purposes


    return <div className={`${classes.base}  ${!isEmpty ? classes.notEmpty : ""} `}>
        <label className={`${classes.label} ${valid ? "" : classes.invalid}`}>
            <span
                className={`${classes.span}`}
            >
                {props.label}
            </span>
        </label>
        <textarea
            autoComplete={props.autoComplete ? 'true' : 'off'}
            name={props.name}
            ref={ref}
            className={`${classes.textArea} `}
            required={props.required}
            onChange={(e) => {
                const isValid = e.currentTarget.checkValidity();
                setValid(isValid);
                setIsEmpty(e.currentTarget.value.length === 0);
                props.onChange && props.onChange(e);
            }}
        />
    </div>
})
export default TextArea;