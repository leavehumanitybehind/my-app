import React from 'react';
import classes from './profile.module.css';
import Comments from './comments/comments';
import MyPosts from './my-posts/my-posts';
import MyProfile from './my-profile/my-profile';

const Profile = (props) => {
    const addPosts = () => {
        props.addPosts();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.changePost(text);
    }

    let newPostElement = React.createRef();

    return <div className={classes.profile}>
        <div className={classes.header}>
            <MyProfile profile={ props.profile } />
            <div className={classes.posts__window}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newTextValue} />
                <button onClick={addPosts}>Add post </button>
                <button>Remove post </button>
            </div>
        </div>
        <MyPosts posts={props.posts} />
        <Comments />

    </div>
}

export default Profile;
