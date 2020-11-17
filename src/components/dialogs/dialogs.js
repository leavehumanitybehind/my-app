import React from 'react';
import classes from './dialogs.module.css';
import Message from './message/message';
import User from './user.js/user';


const Dialogs = (props) => {
    let state = props.dialogPage;
    
    let namesElement = state.names.
        map((n) => <User name={n.name} id={n.id} img={n.img} />);

    let messageElement = state.messages.
        map((m) => <Message messageTo={m.messageTo} messageFrom={m.messageFrom} img='https://i.pinimg.com/564x/bc/ba/7d/bcba7d5d33eca073e281517fe32864ee.jpg' />);
    
        let newMessageValue = state.newMessageValue;
        
    const message = React.createRef();

    const onAddMessage = () => {
        props.addMessage();
    }

    const onChangeText = (e) => {
        let text = e.target.value
        props.changeText(text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs__items}>
                <input className={classes.search} type='search' placeholder='Search' />
                {namesElement}
            </div>
            <div className={classes.dialogs__messages}>
                {messageElement}
                <div className={classes.text}>
                    <input onChange={onChangeText} ref={message} className={classes.text__input} value={ newMessageValue } type="text" />
                    <button onClick={onAddMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;