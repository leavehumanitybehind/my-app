import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./header.module.css";

const Header = (props) => {
return <header className={classes.header}>
    <img className= {classes.header__img}  src='https://i.pinimg.com/564x/f9/78/cf/f978cf7a1eca9823156fdfc3af8b9e99.jpg' width="70" height="70" alt='logo' />
    <div className={classes.login}>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
       
    </div>
    </header>
};

export default Header;