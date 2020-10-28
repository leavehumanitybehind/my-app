import React from 'react';
import classes from  "./nav.module.css";


const Nav = () => {
    return <nav className={classes.nav}>
        <ul>
            <li class={classes.item}><a href="#">Profile</a></li>
            <li class={classes.item}><a href='#'>Messages</a></li>
            <li class={classes.item}><a href='#'>News</a></li>
            <li class={classes.item}><a href='#'>Music</a></li>
            <li class={classes.item}><a href='#'>Settings</a></li>
        </ul>
    </nav> 
};

export default Nav;