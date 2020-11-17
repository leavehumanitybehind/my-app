import React from 'react';
import classes from './profile.module.css';
import Comments from './comments/comments';
import PostsWindowContainer from './posts-window/posts-windowContainer';
import MyPosts from './my-posts/my-posts';
import MyProfile from './my-profile/my-profile';

const Profile = (props) => {

    return <div className={classes.profile}>
        <div className={classes.header}>
        <MyProfile name='Rosa Black' city='Sydney' site='www.rosa.com' img='https://i.pinimg.com/564x/6f/dd/19/6fdd198be40021b9ced1c0dbe885c904.jpg' birth='01.06.22'/>
            <PostsWindowContainer store={props.store}/>
        </div>
        <MyPosts posts={props.profilePage.posts} />
        <Comments />

    </div>
}

export default Profile;
