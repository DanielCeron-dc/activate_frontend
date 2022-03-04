import React, { useState } from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import "./NavLinks.css";

type NavLinksProps = {
    isLogin:boolean

};



const NavLinks: React.FC<NavLinksProps> = ({isLogin}) => {


    const {location} = useHistory(); 

    return <ul className="nav-links">
        {!isLogin && <li><NavLink to="/auth" >AUTHENTICATE </NavLink> </li>}
        {isLogin && <>
        <li><NavLink to="/users" >FRIENDS </NavLink> </li>
        <li><NavLink to="/u1/places" >EVENTS</NavLink> </li>
        </>}
        
    </ul>

}
export default NavLinks;