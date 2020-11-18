import React from 'react';
import { addPostActionCreater, updateNewPostActionCreator } from '../../redux/profile-reducer';

import { connect } from "react-redux";
import Profile from './profile';


const mapStatetoProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newTextValue: state.profilePage.newTextValue
    };
}

const mapDispatchtoProps = (dispatch) => {
    return {
        addPosts: () => { dispatch(addPostActionCreater()) },
        changePost: (text) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action);
        }
    }
}
const ProfileContainer = connect(mapStatetoProps, mapDispatchtoProps)(Profile);

export default ProfileContainer;