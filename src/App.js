import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/dialogs/dialogsContainer';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Music from './components/music/music';
import News from './components/news/news';
import Profile from './components/profile/profile';
import Settings from './components/settings/settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav sideBar={props.state.sideBar.menus} />
        <div className="wrapper__content">
          <Route path='/profile' render={() => (<Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
            store = {props.store} />)} />
          <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/> } />
          <Route path='/news' render={() => (<News />)} />
          <Route path='/music' render={() => (<Music />)} />
          <Route path='/settings' render={() => (<Settings />)} />
        </div>

      </div>
    </BrowserRouter>
  );
}


export default App;
