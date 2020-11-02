import React from 'react';
import classes from "./post-window.module.css";


const PostsWindow = (props) => {
    return (<div className={classes.posts__window}>
        <textarea></textarea>
        <button>Add post </button>
        <button>Remove post </button>
    </div>
    );
};

export default PostsWindow;