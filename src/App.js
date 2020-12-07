import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="gray-background">
        <img src={logo} alt="logo" />
        <h2>Let's play React App!!</h2>
      </div>
    );
  }
}

export default App;
