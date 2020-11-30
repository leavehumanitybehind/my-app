import React from 'react';
import { sendMessageActionCreater, updateNewMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './dialogs';
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/authRedirect";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

let mapStatetoProps = (state) => { //сидят данные из стейта
    return {
        dialogPage: state.dialogPage,
    }
}

let mapDispatchtoProps = (dispatch) => {
    return {
        addMessage: () => { dispatch(sendMessageActionCreater()) },
        changeMessage: (text) => { dispatch(updateNewMessageActionCreator(text)) }
    };
}
export default compose(
    connect(mapStatetoProps, mapDispatchtoProps),
    withRouter,
    withAuthRedirect
)(Dialogs);
