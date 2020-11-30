import React from 'react';
import { connect } from "react-redux";
import Users from './users';
import { setCurrentPage, setTotalUsersCount, toggleIsFollowingProgress, getUsers, followSuccess, unfollowSuccess } from '../../redux/users-reducer';
import Preloader from '../preloader/preloader';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageNumber);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followSuccess={this.props.followSuccess}
                unfollowSuccess={this.props.unfollowSuccess}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

const mapStatetoProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
}

const UsersContainer = connect(mapStatetoProps, {
    setCurrentPage, setTotalUsersCount,
    toggleIsFollowingProgress, getUsers,
    followSuccess, unfollowSuccess
})(UsersAPIComponent);

export default UsersContainer;

