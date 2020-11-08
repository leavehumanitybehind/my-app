import React from 'react';
import classes from "./post-window.module.css";


const PostsWindow = (props) => {
 let newPostElement = React.createRef();


let addPosts = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
} 


let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewText(text);
 }

    return (<div className={classes.posts__window}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.textValue}/>
        <button onClick={ addPosts }>Add post </button>
        <button>Remove post </button>
    </div>
    );
};

export default PostsWindow;