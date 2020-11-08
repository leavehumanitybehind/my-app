import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from  "./nav.module.css";

const Nav = (props) => {

    let sideBarElement = props.sideBar.
map((s) => <li className={classes.item}><NavLink to={s.url} activeClassName={classes.active}>{s.name}</NavLink></li>)
    return <nav className={classes.nav}>
        <ul className={classes.nav__list}>
            { sideBarElement }
        </ul>
    </nav> 
};

export default Nav;