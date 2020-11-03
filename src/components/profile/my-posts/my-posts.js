import React from 'react';
import classes from "./my-posts.module.css";
import Post from '../post/post';

const MyPosts = (props) => {
    let postElement = props.posts.
        map((p) => <Post message={p.message} name={p.name} surname={p.surname} count={p.count} />);

    return (
    <div className={classes.posts}>
        <div>
    { postElement }

    </div>

    </div>
    );
};

export default MyPosts;