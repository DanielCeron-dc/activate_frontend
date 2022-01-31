import React, { CSSProperties, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";

import Backdrop from '../Backdrop/Backdrop';
import "./Modal.css";

interface ModalOverlayProps {
    style?: CSSProperties;
};
interface ModalProps extends ModalOverlayProps {
    show?: boolean;
    onClose?: () => void;
};

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
    //external div with position fixed is needed to get the correct animation in the model 
    return <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }} exit={{ y: "-100vh" }} key="modal" >
        <div className={`modal`} style={props.style}>
            {props.children}
        </div>
    </motion.div>
}

const Modal: React.FC<ModalProps> = (props) => {

    const { show } = props;


    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [show]);

    return <AnimatePresence>
        {props.show && <>
            <Backdrop onClick={props.onClose} portal={true} key="backdrop2">
                <ModalOverlay  {...props} key="modal2" />
            </Backdrop>
        </>}
    </AnimatePresence>

}
export default Modal;