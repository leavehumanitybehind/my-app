import React from 'react';
import { connect } from "react-redux";
import * as axios from 'axios';
import Users from './users';

import { followUser, unfollowUser, setUsers, setCurrentPageAC,setTotalUsersCountAC } from '../../redux/users-reducer';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
            then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).
            then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

const mapStatetoProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount
    };
}

const mapDispatchtoProps = (dispatch) => {
    return {
        follow: (id) => { dispatch(followUser(id)) },
        unfollow: (id) => { dispatch(unfollowUser(id))},
        setUsers: (users) => { dispatch(setUsers(users))},
        setCurrentPage:(pageNumber) => { dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsersCount:(totalCount) => { dispatch(setTotalUsersCountAC(totalCount)) }
    }
}

const UsersContainer = connect(mapStatetoProps, mapDispatchtoProps)(UsersAPIComponent);

export default UsersContainer;

