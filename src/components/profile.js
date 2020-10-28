import React from 'react';
import classes from "./profile.module.css";

const Profile = () => {
    return <div className={classes.content}>
        <img src='https://i1.wp.com/www.codeofliving.com/wp-content/uploads/2019/10/friendship-quotes.jpg?fit=1920%2C1080&ssl=1' width="900" height='400' />;
        <ul>
             <li>Ava</li>
        <li>Post</li>
        <li>Comments</li>
            </ul>
       
    </div>
}

export default Profile;