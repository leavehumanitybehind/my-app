const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = `UPDATE-NEW-MESSAGE`;

const dialogReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                messageTo: state.newMessageValue,
                messageFrom: ''
            };
            state.messages.push(newMessage);
            state.newMessageValue = ``;
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageValue = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreater = () => ({ type: SEND_MESSAGE });
export const updateNewMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE, newText: text });

export default dialogReducer;