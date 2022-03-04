import React, { CSSProperties, useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import "./MainNavigation.css";
import MainHeader from '../Header/MainHeader';
import NavLinks from '../Links/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';

import { AnimatePresence } from "framer-motion";

type NavLinksProps = {
    isLogin:boolean

};


const MainNavigation: React.FC<NavLinksProps&{style?:CSSProperties}> = (props) => {

    const {isLogin} = props
    const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
    const history = useHistory();

    useEffect(() => {
        history.listen(() => {
            setDrawerIsOpen(false);
        });
    }, [history]);

    return <>
        {/* mobile navigation*/}
        <AnimatePresence>
            {drawerIsOpen &&
                <>
                    <Backdrop onClick={() => setDrawerIsOpen(false)} />
                    <SideDrawer>
                        <nav className="main-navigation__drawer-nav">
                            <NavLinks isLogin={isLogin}/>
                        </nav>
                    </SideDrawer>
                </>
            }
        </AnimatePresence>
        {/* mobile navigation*/}

        <MainHeader style={props.style}>
            <button className="main-navigation__menu-btn" onClick={() => setDrawerIsOpen(true)}>
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">
                    Activate
                </Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks isLogin={isLogin}/>
            </nav>
        </MainHeader>
    </>



}
export default MainNavigation;