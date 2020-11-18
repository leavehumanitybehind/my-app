import React from 'react';
import classes from "./users.module.css";

const Users = (props) => {

    return <div className={classes.users}>
        {
            props.users.map(u => 

                <div className={classes.userEl} key={u.id}>
                <span>
                        <img />
                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>Follow</button> :
                                <button onClick={() => props.follow(u.id)}>Unfollow</button> }
                </span>
                <span>
                    <div> {u.name} </div>
                    <div> {u.description} </div>
                </span>
        <span>
            <div> {u.location.country}
                {u.location.city} </div>
        </span>
            </div>
            )
}
    </div>
}

export default Users;