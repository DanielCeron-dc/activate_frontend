import React from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import "./NavLinks.css";

type NavLinksProps = {

};

const NavLinks: React.FC<NavLinksProps> = () => {

    const {location} = useHistory(); 

    return <ul className="nav-links">
        <li><NavLink to="/users" exact >MY FRIENDS</NavLink> </li>
        <li><NavLink to="/u1/places" >EVENTS  </NavLink> </li>
        <li><NavLink to="/auth" >AUTHENTICATE </NavLink> </li>
    </ul>

}
export default NavLinks;