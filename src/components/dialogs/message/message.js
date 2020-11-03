import React from 'react';
import classes from './message.module.css';

const Message = (props) => {
    return (
        <div className={classes.dialog__message}>
            <div className={classes.dialog__messageTo}>
    <p>{props.name}</p>
                <a><img className={classes.avatar} src={props.img}/></a>
                {props.messageTo}
            </div>

            <div className={classes.dialog__messageFrom}>
                <p>{props.name}</p>
                {props.messageFrom}
                <a><img className={classes.avatar} src={props.img} /></a>
            </div>
        
        </div>
    )

};

export default Message;