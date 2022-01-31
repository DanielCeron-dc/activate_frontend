import React from 'react';
import { CSSProperties } from 'react';
import { useHistory} from "react-router-dom";
import useForm from '../../hooks/useForm';

import Modal from '../../shared/components/Modal/Modal';
import Button from '../../shared/form/Button/Button';
import Input from '../../shared/form/Input/Input';
import TextArea from '../../shared/form/Input/TextArea';


const formStyle:CSSProperties = {
    width: '50vw',
    height: '70vh',
    padding: '50px',
    boxSizing: 'border-box',
    boxShadow: '0 0 5px #000',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-between', 
    justifyContent: 'space-evenly',
}

const AddPlace:React.FC = () => {
    
    const history = useHistory();
    const {register, onSubmit} = useForm(); 

    return <Modal show onClose={() => {history.goBack()} }>
        <form
            action=""
            style={formStyle}
            onSubmit={onSubmit((data) => {
                console.log(data);
            })}
        >
            <Button  style={{ alignSelf: 'flex-end' }} onClick={() => {history.goBack()}}>X</Button>
            <Input ref={register} name="name" label="name" required  />
            <Input ref={register} name="address" label="address" required minLenght={5}/>
            <TextArea ref={register} name="password" label="description" autoComplete/>
            <Button type="submit" >Submit</Button>
        </form>
    </Modal>
}
export default AddPlace;