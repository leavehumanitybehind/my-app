import React from 'react';
import classes from  "./nav.module.css";

const Nav = () => {
    return <nav className={classes.nav}>
        <ul className={classes.nav__list}>
            <li class={classes.item}><a href="/profile">Профиль</a></li>
            <li class={classes.item}><a href='/dialogs'>Сообщения</a></li>
            <li class={classes.item}><a href='/news'>Новости</a></li>
            <li class={classes.item}><a href='/music'>Музыка</a></li>
            <li class={classes.item}><a href='/settings'>Настройки</a></li>
        </ul>
    </nav> 
};

export default Nav;