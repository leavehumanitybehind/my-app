import React from 'react';
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
                    return <a className={props.currentPage === page && classes.pagination}
                        onClick={(e) => { props.onPageChanged(page); }}> {page} </a>
                })}
            </div>
            {
                props.users.map(u =>

                    <div className={classes.userEl} key={u.id}>
                        <span>
                            <div> {u.name} </div>
                            <img src={u.photos.small !== null ? u.photos.small : 'https://i.pinimg.com/564x/11/e5/3f/11e53f8bec11e025f0074171f06abe19.jpg'} className={classes.image} />

                            {u.followed ? <button onClick={() => props.unfollow(u.id)} className={classes.btnFollow} >Follow</button> :
                                <button onClick={() => props.follow(u.id)} className={classes.btnUnfollow} >Followed</button>}
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