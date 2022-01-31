import React from 'react';
import ReactDOM from "react-dom"
import { motion } from 'framer-motion';


import "./SideDrawer.css";

const SideDrawer: React.FC = (props) => {
    const content = <motion.aside className="side-drawer"
        initial={{
            x: "-65vw"
        }}

        animate={{
            x: 0,
            transition: {
                duration: 1.5
            }
        }}

        exit={{
            x: "-65vw",
        }}
    >{props.children}</motion.aside>
    return ReactDOM.createPortal(content, document.getElementById("drawer-hook")!);
}
export default SideDrawer;