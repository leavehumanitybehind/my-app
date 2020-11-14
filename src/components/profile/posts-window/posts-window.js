import React from 'react';
import classes from "./post-window.module.css";
import { addPostActionCreater, updateNewPostActionCreator } from '../../../redux/profile-reducer';

const PostsWindow = (props) => {
    let newPostElement = React.createRef();


    let addPosts = () => {
        let text = newPostElement.current.value;
        props.dispatch(addPostActionCreater(text));
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text)
        props.dispatch(action);
    }

    return (<div className={classes.posts__window}>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.textValue} />
        <button onClick={addPosts}>Add post </button>
        <button>Remove post </button>
    </div>
    );
};

export default PostsWindow;