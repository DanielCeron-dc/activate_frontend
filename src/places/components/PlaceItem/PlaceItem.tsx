import React, { useState } from 'react';
import {useHistory, useParams} from "react-router-dom"; 
import { PlaceInterface } from '../../PlaceInterface';
import "./PlaceItem.css";
import { motion, Variants } from 'framer-motion';



type PlaceItemProps = {
    place: PlaceInterface,
    select?: (index: number) => void,
    id: number,
};

const PlaceVariants: Variants = {
    whileHover:{
        scale: 1.1,
        cursor: "pointer",
    },

    initial : {
        opacity: 0,
        x: -100
    },

    animate : {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}



const PlaceItem: React.FC<PlaceItemProps> = ({ place, id }) => {

    const [onHover, setOnHover] = useState(false); 
    const description = place.description.length > 100 ? place.description.substring(0, 100) + "..." : place.description;
    const {  userId} = useParams<{ placeId: string, userId: string }>();
    const history = useHistory();

    const onClickHandler = () => {
        history.push(`/${userId}/places/${id}`);
    }


    return <>
        
        <motion.li
            className="place-item"
            variants={PlaceVariants}
            whileHover="whileHover"
            initial="initial"
            animate="animate"
            onHoverStart={() => setOnHover(true)}
            onHoverEnd={() => setOnHover(false)}
            onClick={onClickHandler}
        >
            <div className= "place-item__imgContainer">
                <img className="place-item__image" src={place.image} alt={place.title} />
            </div>
            <h2>{place.title}</h2>

        </motion.li>
    </>
}


export default PlaceItem;