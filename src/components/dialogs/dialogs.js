import React from 'react';
import classes from './dialogs.module.css';
import Message from './message/message';
import User from './user.js/user';

const Dialogs = (props) => {
    const message = React.createRef();
const addMessaage = () => {
    let text = message.current.value;
    console.log(text);

}

    let namesElement = props.state.names.
        map((n) => <User name={n.name} id={n.id} img={n.img} />)
        
    let messageElement = props.state.messages.
        map((m) => <Message messageTo={m.messageTo} messageFrom={m.messageFrom} img='https://i.pinimg.com/564x/bc/ba/7d/bcba7d5d33eca073e281517fe32864ee.jpg' />)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                <input className={classes.search} type='search' placeholder='Search' />
                {namesElement}
            </div>
            <div className={classes.dialogs__messages}>
               { messageElement }
                <div className={classes.text}>
                    <input ref={ message } className={classes.text__input} type="text"/>
                <button onClick = {addMessaage}>Отправить</button>
            </div>
            </div>
           
        </div>


    )

};

export default Dialogs;