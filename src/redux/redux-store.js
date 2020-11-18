import { combineReducers, createStore } from 'redux';
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from './users-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);
window.store = store;

export default store;