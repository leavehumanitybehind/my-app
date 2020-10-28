import React from 'react';
import './App.css';
import Profile from './components/profile';
import Header from './components/header';
import Nav from './components/nav';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}


export default App;
