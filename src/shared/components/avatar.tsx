import React from 'react';
import { CSSProperties } from 'react';

type avatarProps = {
    width: number,
    height: number,
    src: string,
};

const style: CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

const imgStyle: CSSProperties = {
    display: "block",
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
}

const avatar: React.FC<avatarProps> = (props) => {
    return <div style={style}>
        <img
            style={imgStyle}
            src={props.src}
            width={props.width}
            height={props.height}
        />
    </div>
}
export default avatar;