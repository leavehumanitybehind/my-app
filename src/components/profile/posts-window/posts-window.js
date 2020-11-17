import React from 'react';
import classes from "./post-window.module.css";

const PostsWindow = (props) => {
 let newPostElement = React.createRef();
    let addPosts = () => {
        props.addPosts();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.changePost(text);
    }

    return (<div className={classes.posts__window}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newTextValue} />
        <button onClick={addPosts}>Add post </button>
        <button>Remove post </button>
    </div>
    );
};

export default PostsWindow;