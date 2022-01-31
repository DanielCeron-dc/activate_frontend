import React from 'react';

import Styles from "../Styles.module.css";
import { IUser } from '../interfaces';
import UserItem from './UserItem';

type UsersListProps = {
    items: IUser[]
};

const usersList: React.FC<UsersListProps> = (props) => {
    if (props.items.length === 0) {
        return <ul style={{ display: "grid", placeItems: "center" }}>
            <h1>No users Found.</h1>
        </ul>;
    }
    return <div className={Styles.usersList}>
        {props.items.map(Item => <UserItem user={Item} key={Item.id} />)}
    </div>
}
export default usersList;