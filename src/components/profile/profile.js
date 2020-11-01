import React from 'react';
import MyPosts from './my-posts/my-posts';
import classes from "./profile.module.css";

const Profile = () => {
    return <div>
        <img src='https://i1.wp.com/www.codeofliving.com/wp-content/uploads/2019/10/friendship-quotes.jpg?fit=1920%2C1080&ssl=1' width="900" height='400' />;
             <div>Ava</div>
        <MyPosts />
        <div>Comments</div>
       
    </div>
}

export default Profile;