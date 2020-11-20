import React from 'react';
import classes from "./users.module.css";
import * as axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);
 axios.get('https://social-network.samuraijs.com/api/1.0/users').
                then(response => {
                    this.props.setUsers(response.data.items)
                })
    }
    render() {
        return <div className={classes.users}>
        {
            this.props.users.map(u =>

                <div className={classes.userEl} key={u.id}>
                    <span>
                        <div> {u.name} </div>
                        <img src={u.photos.small !== null ? u.photos.small : 'https://i.pinimg.com/564x/11/e5/3f/11e53f8bec11e025f0074171f06abe19.jpg'} className={classes.image} />

                        {u.followed ? <button onClick={() => this.props.unfollow(u.id)} className={classes.btnFollow} >Follow</button> :
                            <button onClick={() => this.props.follow(u.id)} className={classes.btnUnfollow} >Followed</button>}
                    </span>
                    <span>

                        <div> {u.description} </div>
                    </span>
                </div>
            )
        }
    </div>
    } 
}

export default Users;