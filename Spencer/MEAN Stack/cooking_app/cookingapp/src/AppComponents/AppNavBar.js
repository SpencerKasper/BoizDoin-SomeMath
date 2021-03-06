import React, { Component } from 'react';
import RecipeAddModal from '../Recipes/RecipeAddModal.js';
import '../Styles/App.css';
import RegistrationModal from '../Registration/RegistrationModal';
import LoginModal from '../Login/LoginModal';

const loggedInText = {
  color: "white"
};

class AppNavBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedInUserName: ""
    }
  }

  render() {
    return (
      <div className="topnav">
        <a style={loggedInText} className="applink">Home</a>
        <RecipeAddModal buttonLabel="Add Recipe"/>
        <LoginModal buttonLabel="Log In" />
        <RegistrationModal />
        <p style={loggedInText}>{this.state.loggedInUserName}</p>
      </div>
    );
  }
}

export default AppNavBar;
