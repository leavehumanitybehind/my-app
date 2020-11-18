import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/dialogs/dialogsContainer';
import Header from './components/header/header';
import NavContainer from './components/nav/nav-container';
import Music from './components/music/music';
import News from './components/news/news';
import ProfileContainer from './components/profile/profile-Container';
import Settings from './components/settings/settings';
import UsersContainer from './components/users/users-container';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <NavContainer store={props.store} />
        <div className="wrapper__content">
          <Route path='/profile' render={() => (<ProfileContainer store ={props.store} />)} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/> } />
          <Route path='/news' render={() => (<News />)} />
          <Route path='/music' render={() => (<Music />)} />
          <Route path='/settings' render={() => (<Settings />)} />
          <Route path='/users' render={() => (<UsersContainer store={props.store} />)} />
        </div>

      </div>
    </BrowserRouter>
  );
}


export default App;
