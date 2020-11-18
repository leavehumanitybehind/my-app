import React from 'react';
import Users from './users';
import { connect } from "react-redux";



import { followUser, unfollowUser, setUsers } from '../../redux/users-reducer';

const mapStatetoProps = (state) => {
    return {
        users: state.usersPage.users,
    };
}

const mapDispatchtoProps = (dispatch) => {
    return {
        follow: (id) => { dispatch(followUser(id)) },
        unfollow: (id) => { dispatch(unfollowUser(id))},
        setUsers: (users) => { dispatch(setUsers(users))}
    }
}

const UsersContainer = connect(mapStatetoProps, mapDispatchtoProps)(Users);

export default UsersContainer;

