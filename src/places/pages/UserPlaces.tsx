
import React, { CSSProperties } from 'react';
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import Button from '../../shared/form/Button/Button';


import PlaceList from '../components/PlaceList/PlaceList';

import PlaceItemBig from '../components/PlaceItemBig/PlaceItemBig';
import { DummyArray } from '../DummyArray';



const UserPlacestyles: CSSProperties = {
    display: 'flex',
    position: 'relative',
}

const UserPlaces: React.FC = () => {

    const { userId } = useParams<{ userId: string }>();


    const filteredArray = DummyArray.filter(place => place.creatorId === userId);

    return <div style={UserPlacestyles}>
        <PlaceList places={filteredArray} />
        <PlaceItemBig />
    </div>
}
export default UserPlaces;