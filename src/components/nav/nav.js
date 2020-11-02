import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from  "./nav.module.css";

const Nav = () => {
    return <nav className={classes.nav}>
        <ul className={classes.nav__list}>
            <li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}>Профиль</NavLink></li>
            <li className={classes.item}><NavLink to='/dialogs' activeClassName={classes.active}>Сообщения</NavLink></li>
            <li className={classes.item}><NavLink to='/news' activeClassName={classes.active}>Новости</NavLink></li>
            <li className={classes.item}><NavLink to='/music' activeClassName={classes.active}>Музыка</NavLink></li>
            <li className={classes.item}><NavLink to='/settings' activeClassName={classes.active}>Настройки</NavLink></li>
        </ul>
    </nav> 
};

export default Nav;