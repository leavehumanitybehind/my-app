import React from 'react';
import { addPostActionCreater, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import PostsWindow from './posts-window';


const PostsWindowContainer = (props) => {
let state = props.store.getState();

    let addPosts = () => {
        props.store.dispatch(addPostActionCreater());
    }

    let changePost = (text) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action);
    }

    return <PostsWindow addPosts={addPosts} changePost={changePost} newTextValue={state.profilePage.newTextValue} />
};

export default PostsWindowContainer;