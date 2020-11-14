const ADD_POST = `ADD-POST`;
const UPDATE_NEW_TEXT = `UPDATE-NEW-TEXT`;
const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
            id: 5,
            message: state.newTextValue,
            name: 'Кролик',
            count: 0
        }
        state.posts.push(newPost);
        state.newTextValue = '';
        return state;
    case UPDATE_NEW_TEXT: 
        state.newTextValue = action.newText;
        return state;
    default:
 return state;
}
}

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_TEXT, newText: text });

export default profileReducer;