import React from 'react';
import { Link } from 'react-router-dom';
import "./Button.css"


interface baseProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    inverseStyle?: boolean;
    size?: string;
    danger?: boolean;
};

interface basePropsforLink extends baseProps {
    to?: string;
    href?: never;
}

interface basePropsforAtag extends baseProps {
    href?: string;
    to?: never;
}

type ButtonProps = basePropsforAtag | basePropsforLink;

const Button: React.FC<ButtonProps> = (props) => {
    const propsCopy = { ...props };
    delete propsCopy.inverseStyle;

    if (props.href) {
        return (
            <a
                className={`button button--${props.size || 'default'} ${props.inverseStyle &&
                    'button--inverse'} ${props.danger && 'button--danger'}`}
                href={props.href}
            >
                {props.children}
            </a>
        );
    }
    if (props.to) {
        return (
            <Link
                to={props.to}
                className={`button button--${props.size || 'default'} ${props.inverseStyle &&
                    'button--inverse'} ${props.danger && 'button--danger'}`}
            >
                {props.children}
            </Link>
        );
    }
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
            {...propsCopy
            }
            className={`button button--${props.size || 'default'} ${props.inverseStyle &&
                'button--inverse'} ${props.danger && 'button--danger'}  ${props.className}`}
        >
            {props.children}
        </button>
    );
}
export default Button;