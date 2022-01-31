import React from 'react';
import UsersList from '../components/UsersList';
import { IUser } from '../interfaces';


const Users: React.FC = () => {
    const DOOMYARRAY: IUser[] = [
        {
            id: 1,
            name: 'Doomy',
            email: "dadadad",
            image: "https://avatars3.githubusercontent.com/u/148898?v=3&s=460",
            placesCount: 1,
        },
    ]

    return <div style={{ display: "grid", justifyItems: "center", width: "100vw" }}>
        <UsersList items={DOOMYARRAY} />
    </div>
}
export default Users;