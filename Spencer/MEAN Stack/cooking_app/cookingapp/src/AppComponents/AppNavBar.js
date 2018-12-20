import React, { Component } from 'react';
import RecipeAddModal from '../Recipes/RecipeAddModal.js';
import '../Styles/App.css';

class AppNavBar extends Component {
  render() {
    return (
      <div className="topnav">
        <a className="applink">Home</a>
      </div>
    );
  }
}

export default AppNavBar;
