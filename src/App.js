import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/dialogs/dialogsContainer';
import HeaderContainer from './components/header/header-container';
import NavContainer from './components/nav/nav-container';
import Music from './components/music/music';
import News from './components/news/news';
import ProfileContainer from './components/profile/profile-Container';
import Settings from './components/settings/settings';
import UsersContainer from './components/users/users-container';
import Login from './components/login/login';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <NavContainer />
        <div className="wrapper__content">
          <Route path='/profile/:userId?' render={() => (<ProfileContainer/>)} />
          <Route path='/dialogs' render={() => <DialogsContainer/> } />
          <Route path='/news' render={() => (<News />)} />
          <Route path='/music' render={() => (<Music />)} />
          <Route path='/settings' render={() => (<Settings />)} />
          <Route path='/login' render={() => (<Login />)} />
          <Route path='/users' render={() => (<UsersContainer />)} />
        </div>

      </div>
    </BrowserRouter>
  );
}


export default App;
