import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';
import { addPost } from './redux/state';
import { updateNewText } from './redux/state';
import { sendMessage } from './redux/state';
import { updateNewMessage } from './redux/state';
import { subscribe } from './redux/state';

let rerenderAll = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewText={updateNewText} sendMessage={sendMessage} updateNewMessage={updateNewMessage} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderAll(state);
subscribe(rerenderAll);

reportWebVitals();
