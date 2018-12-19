import React, { Component } from 'react';
import '../Styles/App.css';

class AppNavBar extends Component {
  render() {
    return (
      <div className="topnav">
        <a style={{color:'white'}} className="App-link">Home</a>
        <a style={{color:'white'}} className="App-link">Add Recipe</a>
        <a style={{color:'white'}} className="App-link">About Us</a>
        <a style={{color:'white'}} className="App-link">Contact Us</a>
        <a style={{color:'white'}} className="App-link">Log In</a>
      </div>
    );
  }
}

export default AppNavBar;
