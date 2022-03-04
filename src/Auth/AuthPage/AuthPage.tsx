import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import styles from './AuthPage.module.css'; 
import backGround from '../../assets/img/bg1.png';
import girlImage from '../../assets/img/girl1.png';
import rockImage from '../../assets/img/rock1.png';
import { CSSProperties } from 'react';
import { motion } from 'framer-motion';

const imgStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
}

const girlStyle: CSSProperties = {
    zIndex: 2,
    position: 'fixed',
    width: '100%',
    height: '100%',
}

const rockStyle: CSSProperties = {
    zIndex: 2,
    position: 'fixed',
    right: 0,
    width: '100%',
    height: '100%'
}

type IHandler = {
    handlerLogin:() => void
}


const AuthPage:React.FC<IHandler> = (props) => {
    
    return <div className={styles.authPage}>
        <motion.img
            src={backGround}
            alt="backgroundImage"
            style={imgStyle}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.img
            src={girlImage}
            alt=""
            style={girlStyle}
            initial={{ x: 0 }}
            animate={{ x: 45 }}
            transition={{ ease: 'easeOut', duration: 8, repeat: Infinity, repeatType: "reverse"}}
            
        />
        <motion.img
            src={rockImage}
            alt=""
            style={rockStyle}
            initial={{ x: 0 }}
            animate={{ x: -25 }}
            transition={{ ease: 'easeOut', duration: 4, repeat: Infinity, repeatType: "reverse" }}
        />
        <AuthForm handlerLogin={props.handlerLogin}/>
    </div>
}
export default AuthPage;