import React from 'react';
import classes from "./post-window.module.css";


const PostsWindow = (props) => {
 let newPostElement = React.createRef();

let addPosts = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = ``;
}
    return (<div className={classes.posts__window}>
        <textarea ref={ newPostElement }></textarea>
        <button onClick={ addPosts }>Add post </button>
        <button>Remove post </button>
    </div>
    );
};

export default PostsWindow;