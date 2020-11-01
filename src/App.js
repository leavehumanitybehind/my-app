import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Dialogs from './components/dialogs/dialogs';
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
      <Nav />
      <div className="wrapper__content">
        <Route path='/dialogs' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
      </div>
      
    </div>
    </BrowserRouter>
  );
}


export default App;
