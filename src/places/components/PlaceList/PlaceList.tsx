import React from 'react';
import { useHistory , useRouteMatch} from 'react-router-dom'; 


import Card from '../../../shared/components/Card';
import Button from '../../../shared/form/Button/Button';
import { PlaceInterface } from '../../PlaceInterface';
import AddPlaceCard from '../AddPlaceCard';
import PlaceItem from '../PlaceItem/PlaceItem';
import "./PlaceList.css";

type PlaceListProps = {
    places: PlaceInterface[]
};

const PlaceList: React.FC<PlaceListProps> = (props) => {

    const history = useHistory();
    const { url} = useRouteMatch();

    return props.places.length === 0 ?
        <div className="place-list" >
            <Card style={{backgroundColor: 'white', height: '12rem', margin: 20}}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px"
                }}>
                    <h2>You don't have friends, do you want to add one?</h2>
                    <Button
                        onClick={() => history.push(url + "/new")}
                    >Add Friend</Button>
                </div>
            </Card>
        </div> :
        <ul className="place-list">
            <AddPlaceCard/>
            {props.places.map((place, i) => <PlaceItem place={place} key={place.id} id={i}/>)}
        </ul>;

}
export default PlaceList;