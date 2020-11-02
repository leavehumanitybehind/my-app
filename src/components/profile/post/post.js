import React from 'react';
import classes from "./post.module.css";
import ProfileInfo from './profile-info/profile-info';


const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.name}>
                <p> {props.name} {props.surname} </p>
            </div>
            <div className={classes.message}>
                <ProfileInfo />
                {props.message}
            </div>
            <div className={classes.like__wrapper}>
                <button className={classes.like}></button>
                <span> {props.count}</span>
            </div>

            <div>

            </div>
        </div>
    );
};

export default Post;