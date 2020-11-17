import React from 'react';
import { sendMessageActionCreater, updateNewMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './dialogs';
import { connect } from "react-redux";

let mapStatetoProps = (state) => { //сидят данные из стейта
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchtoProps = (dispatch) => {
    return {
        addMessage: () => { dispatch(sendMessageActionCreater())},
        changeMessage: (text) => { dispatch(updateNewMessageActionCreator(text))}
    };
}

const DialogsContainer = connect(mapStatetoProps, mapDispatchtoProps) (Dialogs); // dialogs законекть к стору!

export default DialogsContainer;