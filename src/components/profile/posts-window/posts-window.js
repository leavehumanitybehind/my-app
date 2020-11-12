import React from 'react';
import classes from "./post-window.module.css";


const PostsWindow = (props) => {
 let newPostElement = React.createRef();


let addPosts = () => {
    let text = newPostElement.current.value;
    let action = { type: `ADD-POST`, newTextValue: text};
    props.dispatch(action);
} 


let onPostChange = () => {
    let text = newPostElement.current.value;
    let action ={ type: `UPDATE-NEW-TEXT`, newText: text};
    props.dispatch(action);
 }

    return (<div className={classes.posts__window}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.textValue}/>
        <button onClick={ addPosts }>Add post </button>
        <button>Remove post </button>
    </div>
    );
};

export default PostsWindow;