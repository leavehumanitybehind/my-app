import React from 'react';
import { sendMessageActionCreater, updateNewMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './dialogs';

const DialogsContainer = (props) => {
        let state = props.store.getState().dialogPage;
        
    const addMessage = () => {
        props.store.dispatch(sendMessageActionCreater());
    }
    const changeText = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    return (<Dialogs addMessage={ addMessage } changeText={ changeText } dialogPage={state} />);
};

export default DialogsContainer;