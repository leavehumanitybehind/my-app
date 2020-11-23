import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./users.module.css";
import * as axios from 'axios';

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
                <NavLink to={`/profile/${u.id}`}>
                    <div className={classes.userEl} key={u.id}>
                        <span>
                            <div> {u.name} </div>
                            <img src={u.photos.small !== null ? u.photos.small : 'https://i.pinimg.com/564x/11/e5/3f/11e53f8bec11e025f0074171f06abe19.jpg'} className={classes.image} />

                            {u.followed ?
                                <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                     { withCredentials: true,
                                    headers: {
                                                "API-KEY": '703a5478- 2a9b- 45e3 - 8a74 - d6cac511583a'
                                    }}).
                                        then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        });
                                }
                                }
                                    className={classes.btnFollow} >Follow</button> :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { withCredentials: true,
                                        headers: {
                                            "API-KEY": '703a5478- 2a9b- 45e3 - 8a74 - d6cac511583a'
                                        } }).
                                        then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        });

                                }} className={classes.btnUnfollow}> Followed </button>
                            }

                        </span>
                        <span>

                            <div> {u.description} </div>
                        </span>
                    </div>
                </NavLink>
            )

        }
    </div>
}

export default Users;