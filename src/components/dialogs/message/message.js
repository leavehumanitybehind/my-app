import React from 'react';
import classes from './message.module.css';

const Message = (props) => {
    return (
    <div className={classes.dialog__message}>
        {props.message}
        </div>
    )

};

export default Message;