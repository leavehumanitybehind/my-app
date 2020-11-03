import React from 'react';
import classes from "./my-profile.module.css";


const MyProfile = (props) => {
    return (
    <div className={classes.my__profile}>
        <p>{props.name}</p>
        <img src={props.img} width="250" height="300"/>
        <div>
    
    <ul>
        <li>
            <span>Дата рождения</span>
    <span>{props.birth}</span>
        </li>
                    <li>
                        <span>Город</span>
    <span>{props.city}</span>
                    </li>
                    <li>
                        <span>Сайт</span>
    <span>{props.site}</span>
                    </li>
    </ul>

        </div>

    </div>
    );
};

export default MyProfile;