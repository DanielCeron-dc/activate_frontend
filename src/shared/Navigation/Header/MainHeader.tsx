import React, { CSSProperties } from 'react';
import "./MainHeader.css"

const MainHeader: React.FC<{style?:CSSProperties}> = (props) => {
    return <header className="main-header" style={props.style}>{props.children}</header>
}
export default MainHeader;
