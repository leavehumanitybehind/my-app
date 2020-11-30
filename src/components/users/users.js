import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./users.module.css";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={classes.users}>
        <div className={classes.pag}>
            {pages.map(page => {
                return <a href="#" className={props.currentPage === page && classes.pagination}
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
                        <img src={u.photos.small !== null ? u.photos.small : 'https://i.pinimg.com/564x/17/9d/39/179d39e4321a754522645ae781240c26.jpg'} className={classes.image} />
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} className={classes.btnFollow} onClick={() => {
                                    props.unfollowSuccess(u.id)
                                }}>Follow</button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} className={classes.btnUnfollow} onClick={() => {
                                props.followSuccess(u.id)
                                }}>Followed </button>
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