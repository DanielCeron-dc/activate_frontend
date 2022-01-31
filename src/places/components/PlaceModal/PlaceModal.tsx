import React, { useState } from 'react';

import useForm, { IRef } from '../../../hooks/useForm';

import EditableText from '../../../shared/components/EditableText/EditableText';
import Modal from '../../../shared/components/Modal/Modal';
import Button from '../../../shared/form/Button/Button';
import { PlaceInterface } from '../../PlaceInterface';
import Map from "../../../shared/components/Map";



import styles from './PlaceModal.module.css';
import useWindow from '../../../hooks/useWindow';
import { useHistory, useParams } from 'react-router-dom';
import DeleteButtonWithTootilp from './DeleteButtonWithTooltip';

type PlaceModalProps = {
    place: PlaceInterface;
    onClose: () => void;
    show: boolean;
};

const OnMobile: React.FC<{ register: (ref: IRef) => void, place: PlaceInterface, showMap: boolean, editing: boolean }> = ({ place, register, showMap, editing, children }) => {
    return <>
        <div style={{height: '40vh', width: '100%'}}>
            {showMap ?
                <Map center={place.coordinates} zoom={15} className={styles.map} />
                :
                <img src={place.image} alt={place.title} className={styles.img} />
            }
        </div>
        <div className={styles.information_text}>
            <EditableText name="title" active={editing} type="h3" ref={register}>{place.address}</EditableText>
            <EditableText name="description" active={editing} type="p" ref={register}>{place.description}</EditableText>
        </div>
        {children}
    </>
}

const OnDesktop: React.FC<{ register: (ref: IRef) => void, place: PlaceInterface | undefined, editing: boolean }> = ({ place, register ,  editing , children}) => {
    if(!place) return null;
    return <>
        <Map center={place.coordinates} zoom={15} className={styles.map} />
        <div className={styles.information}>
            <img src={place.image} alt={place.title} className={styles.img} />
            <div className={styles.information_text}>
                <EditableText name="title" active={editing} type="h3" ref={register}>{place.address}</EditableText>
                <EditableText name="description" active={editing} type="p" ref={register}>{place.description}</EditableText>
                {children}
            </div>
        </div>
    </>
}
        



const PlaceModal: React.FC<PlaceModalProps> = ({ place, onClose, show }) => {

    const [editing, setEditing] = useState(false);
    const { register, onSubmit } = useForm();
    const { isMobile , isTablet} = useWindow();
    const [showMap, setShowMap] = useState(false); //this is an option only available on mobile
    const history = useHistory();
    const { userId } = useParams<{userId:string}>();

    const onCloseHandler = () => {
        if (isMobile || isTablet) {
            history.push(`/${userId}/places/`)
        } else {
            onClose();
        }
    }

    const Actions = <div className={styles.information_buttons} >
        {
            editing ?
                <DeleteButtonWithTootilp onDelete={() => { }} />
                :
                <Button type="button" onClick={onCloseHandler}>Close</Button>
        }
        <Button inverseStyle type="button" onClick={() => setEditing(c => !c)}>
            {editing ? 'Cancel' : 'Edit'}
        </Button>
        {editing && <Button type="submit">Save</Button>}
        {isMobile && <Button type="button" onClick={() => { setShowMap(s => !s) }} style={{padding:'0 10px'}}>
            {showMap ? 'Hide Map' : 'Show Map'}
        </Button>}
    </div>

    return <Modal
        onClose={onCloseHandler}
        show={show}
    >
        <form
            action=""
            className={styles.form}
            onSubmit={onSubmit((data) => {
                console.log(data);
                setEditing(false);
            })}
        >
            {isMobile ?
                <OnMobile place={place} register={register} showMap={showMap} editing={editing}>
                    { Actions }
                </OnMobile>
                :
                <OnDesktop place={place} register={register} editing={editing}>
                    {Actions}
                </OnDesktop>
            }
            
        </form>
    </Modal>
}
export default PlaceModal;