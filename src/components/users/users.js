import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./users.module.css";
import { usersAPI } from '../../api/api';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={classes.users}>
        <div className={classes.pag}>
            {pages.map(page => {
                return <a className={props.currentPage === page && classes.pagination}
                    onClick={(e) => { props.onPageChanged(page); }}> {page}</a>

            })}
            {/*<TinyPagination
                total={props.totalUsersCount}
                selectedPageId={props.currentPage}
                itemPerPage={props.pageSize}
                renderBtnNumber={props.onPageChanged}
                maxBtnNumbers={10}
                preKey='PRE'
                nextKey='NEXT'
            />*/}
        </div>
        {
            props.users.map(u =>
                <div className={classes.userEl} key={u.id}>
                    <span><NavLink to={`/profile/${u.id}`}>
                        {u.name}
                    </NavLink>
                        <img src={u.photos.small !== null ? u.photos.small : 'https://i.pinimg.com/564x/11/e5/3f/11e53f8bec11e025f0074171f06abe19.jpg'} className={classes.image} />
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} className={classes.btnFollow} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id);
                                    usersAPI.unfollow(u.id).
                                        then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleIsFollowingProgress(false, u.id);
                                        });
                                }}>Follow</button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} className={classes.btnUnfollow} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id);
                                    usersAPI.follow(u.id).
                                        then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleIsFollowingProgress(false, u.id);
                                        });
                                }}>  Followed </button>
                            }
                        </div>
                    </span>
                    <span>

                        <div> {u.description} </div>
                    </span>
                </div>

            )

        }
    </div>
}

export default Users;