import React, { Component } from 'react';
import RecipeAddModal from '../Recipes/RecipeAddModal.js';
import '../Styles/App.css';

const loggedInText = {
  textAlign: "right", 
  padding: "10px", 
  color: "white"
};

class AppNavBar extends Component {
  render() {
    return (
      <div className="topnav">
        <a className="applink" href="#">Home</a>
        <p style={loggedInText}>Logged in as Spencer Kasper</p>
      </div>
    );
  }
}

export default AppNavBar;
