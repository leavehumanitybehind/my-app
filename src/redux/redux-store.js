import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;