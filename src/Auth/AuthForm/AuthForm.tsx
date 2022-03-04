import React, { CSSProperties, useState } from 'react';
import styles from './Form.module.css';
import useForm from '../../hooks/useForm';
import Input from '../../shared/form/Input/Input';
import Button from '../../shared/form/Button/Button';
import { motion } from 'framer-motion';
import { Link, useHistory} from 'react-router-dom';


const inputStyle: CSSProperties = {
    backgroundColor: 'rgba(30, 30, 30, 1)',
    color: 'white',
}
const buttonStyle: CSSProperties = {
    height: '40px',
    padding: '0 10px',
}
type IHandler = {
    handlerLogin:() => void
}

const AuthForm:React.FC<IHandler> = (props) => { 
    const history = useHistory()
    const { register, onSubmit } = useForm();
    const [creatingAccount, setCreatingAccount] = useState(false); 
    return <motion.form
        initial={{ boxShadow: '0px 0px 0px 0px mediumseagreen' }}
        animate={{ boxShadow: '0px 0px 40px 0px mediumseagreen' }}
        transition={{ duration: 4 , repeat: Infinity, repeatType: 'reverse', delay: 4 }}
        action=""
        className={styles.form}
        onSubmit={onSubmit(data => { console.log(data); props.handlerLogin(); history.push("/users")})}
    >
            <Input ref={register} type="email" label='email' required name='email' style={inputStyle}/>
            <Input ref={register} type="password" label='password' required name='password' style={inputStyle} />
            {creatingAccount && <Input ref={register} type="password" label='confirm password' required name='password' style={inputStyle} />}
            <p>
                { creatingAccount ? 'Already have an account?' : 'Don\'t have an account?' }

                <br />

                <a href="" onClick={e => {
                    e.preventDefault();
                    setCreatingAccount(c => !c);
                }}>
                    {creatingAccount ? 'login' : 'create an account'}
                </a>
            
            </p>
            <div className={styles.buttons}>
            <Button style={buttonStyle}>
                {"Login"}
            </Button>
            
            </div>
    </motion.form>

}
export default AuthForm;