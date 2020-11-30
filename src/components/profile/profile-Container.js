import React from 'react';
import { addPosts, changePost, getUserProfile, getUserStatus, updateStatus } from '../../redux/profile-reducer';
import { connect } from "react-redux";
import Profile from './profile';
import { withAuthRedirect } from "../../hoc/authRedirect";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}

const mapStatetoProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newTextValue: state.profilePage.newTextValue,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    };
}


export default compose(
    connect(mapStatetoProps, { getUserProfile, getUserStatus, addPosts, changePost, updateStatus }),
    withRouter
)(ProfileAPI)
