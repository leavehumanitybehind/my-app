const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = `UPDATE-NEW-MESSAGE`;

const initialState = {
    names: [
        { name: "Hanna", id: '1', img: 'https://i.pinimg.com/564x/11/e5/3f/11e53f8bec11e025f0074171f06abe19.jpg' },
        { name: "Ulrich", id: '2', img: 'https://i.pinimg.com/564x/4f/57/f5/4f57f5f1bebf9abbd2bbcd768f8960d4.jpg' },
        { name: "Mikkel", id: '3', img: 'https://i.pinimg.com/564x/24/de/49/24de4970f8c3b4100357bee5a8d93f52.jpg' },
        { name: "Katarina", id: '4', img: 'https://i.pinimg.com/564x/89/b2/ea/89b2ea984f0503b463c80eb827076196.jpg' },
        { name: 'Johnas', id: '5', img: 'https://i.pinimg.com/564x/17/9d/39/179d39e4321a754522645ae781240c26.jpg' }
    ],
    messages: [
        { messageTo: 'Привет', messageFrom: "Здарова" },
        { messageTo: 'Гулять пойдешь? ', messageFrom: "Да нет, там что-то холодно" },
        { messageTo: 'Ну так оденься потеплей!', messageFrom: "Ой да ну..." },
    ],
    newMessageValue: ``
};

const dialogReducer = (state = initialState, action) => {
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