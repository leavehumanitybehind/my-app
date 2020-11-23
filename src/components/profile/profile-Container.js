import React from 'react';
import { addPostActionCreater, updateNewPostActionCreator, setUserProfileAC } from '../../redux/profile-reducer';
import { connect } from "react-redux";
import * as axios from 'axios';
import Profile from './profile';
import { withRouter } from 'react-router-dom';

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).
            then(response => {
                this.props.setUserProfile(response.data)
            });
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const mapStatetoProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newTextValue: state.profilePage.newTextValue,
        profile: state.profilePage.profile
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPosts: () => { dispatch(addPostActionCreater()) },
        changePost: (text) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action);
        },
        setUserProfile: (profile) => { dispatch(setUserProfileAC(profile)) }
    }
}

let WithURLDataContainerComponent = withRouter(ProfileAPI);
const ProfileContainer = connect(mapStatetoProps, mapDispatchToProps)(WithURLDataContainerComponent);

export default ProfileContainer;