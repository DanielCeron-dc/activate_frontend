import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useWindow from '../../../hooks/useWindow';
import Button from '../../../shared/form/Button/Button';
import { DummyArray } from '../../DummyArray';
import PlaceModal from '../PlaceModal/PlaceModal';
import classes from './PlaceItemBig.module.css';

const PlaceItemBig: React.FC = () => {
    
    const [showModal, setShowModal] = useState(false);
    const { placeId } = useParams<{ placeId: string | undefined}>();
    const history = useHistory();
    const { isTablet ,isMobile } = useWindow();

    if (!placeId) return null;

    const place = DummyArray[parseInt(placeId)];

    if (!place) return null;

    if (isTablet || isMobile) {
        return <PlaceModal show place={place} onClose={() => history.goBack()} />
    }

    return <>
        <PlaceModal place={place} show={showModal} onClose={() => setShowModal(false)}/>
        <div className={classes.base}>
            <div className={classes.img_mask}>
                <img className={classes.img} src={place.image} alt={place.title} />
            </div>
            <div className={classes.info}>
                <h1>{place.title}</h1>
                <p>{place.description}</p>
                <Button onClick={() => {setShowModal(true)}} >View More</Button>
            </div>
        </div>
    </>
}
export default PlaceItemBig;