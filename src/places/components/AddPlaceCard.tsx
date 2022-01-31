import { motion } from 'framer-motion';
import React, { CSSProperties } from 'react';
import { useHistory, useParams } from 'react-router';
import { ReactComponent  as AddSvg} from '../../assets/svg/add.svg';

const style: CSSProperties = {
    width: '16rem',
    height: '15rem',
    margin: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
}

const AddPlaceCard:React.FC = () => {
    
    const { userId, placeId } = useParams<{ userId: string , placeId:string}>();
    const history = useHistory();

    return <motion.li style={style} whileHover={{
        scale: 1.1,
        cursor: 'pointer',
    }}>
        <AddSvg fill="mediumseagreen"
            style={{
                width: '9rem',
                height: '9rem',
                border: '1px solid mediumseagreen',
                borderRadius: '50%',
            }}
            onClick={() => {
                history.push(`/${userId}/places/new`);
            }}
        />
    </motion.li>
}
export default AddPlaceCard;