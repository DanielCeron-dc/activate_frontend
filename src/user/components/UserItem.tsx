
import React from 'react';
import { Link } from "react-router-dom";

import Avatar from '../../shared/components/avatar';
import Card from "../../shared/components/Card";
import { IUser } from '../interfaces';
import styles from "../Styles.module.css";


type UserItemProps = {
    user: IUser;
};


const userItem: React.FC<UserItemProps> = ({ user }) => {
    return <li className={styles.userItem}>
        <Card >
            <Link to={"/" + user.id + "/places"}>
                <div className={styles.userItemImage}><Avatar src={user.image} width={100} height={100} /></div>
                <div className={styles.userItemInfo}>
                    <h2>{user.name}</h2>
                    <h3> {user.placesCount} {user.placesCount === 1 ? "Common Friend" : "Common Friends"}</h3>
                </div>
            </Link>
        </Card>
    </li>
}


export default userItem;