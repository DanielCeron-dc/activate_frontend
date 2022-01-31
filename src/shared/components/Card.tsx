import React, { CSSProperties } from 'react';

type CardProps = {
    className?: string;
    style?: React.CSSProperties;
};

const styles: CSSProperties = {

    margin: "0",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
    borderRadius: "6px",
    overflow: "hidden",

}


const card: React.FC<CardProps> = (props) => {

    return <div className={props.className} style={{ ...styles, ...props.style }}>
        {props.children}
    </div>
}
export default card;