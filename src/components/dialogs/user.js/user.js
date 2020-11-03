import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './user.module.css';

const User = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        
        <div className={classes.user__item + ' ' + classes.active}>
            <img className={classes.avatar} src={props.img}/>
            <NavLink to={path}> {props.name} </NavLink>
            </div>
    )

};

export default User;