const ADD_POST = `ADD-POST`;
const UPDATE_NEW_TEXT = `UPDATE-NEW-TEXT`;
const SET_USER_PROfILE = `SET_USER_PROfILE`;

const initialState = {
    posts: [
        { id: '1', message: 'Почему никто не чешет пузико?', name: 'Пряничек', surname: 'Сладенький', count: '15' },
        { id: '2', message: 'How are you', name: 'Ягодка', surname: 'Спелая', count: '15' },
        { id: '3', message: 'Where are you', name: 'Эклерчик', surname: 'Ванильный', count: '20' },
        { id: '4', message: 'I love you', name: 'Кексик', surname: 'Малиновый', count: '25' },
        { id: '5', message: 'Why nobody loves me?', name: 'Кролик', surname: 'Апельсиновый', count: '14' }
    ],
    newTextValue: ``,
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = state.newTextValue;
            return {
                ...state,
                newTextValue: ``,
                posts: [...state.posts, { id: '5', message: text, name: 'Кролик', surname: 'Апельсиновый', count: '14' }]
            };
        case UPDATE_NEW_TEXT: {
            return {
                ...state,
                newTextValue: action.newText
            };
        }
        case SET_USER_PROfILE: {
            return {
                ...state, 
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_TEXT, newText: text });
export const setUserProfileAC = (profile) => ({ type: SET_USER_PROfILE, profile });
export default profileReducer;