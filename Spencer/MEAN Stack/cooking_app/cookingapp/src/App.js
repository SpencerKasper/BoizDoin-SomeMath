import React, { Component } from 'react';
import RecipesInput from './Recipes/RecipesInput.js';
import AppHeader from './AppComponents/AppHeader.js';
import './Styles/App.css';
import AppNavBar from './AppComponents/AppNavBar.js';
import RecipeAddModal from './Recipes/RecipeAddModal.js';
import LoginModal from './Login/LoginModal.js';
import RegistrationModal from './Registration/RegistrationModal';

const buttonRow = {
  display: "flex",
  flexDirection: "row",
  padding: "10px"
};

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      userLoggedIn: false,
      loggedInUserName: "Log In or Sign Up!"
    }
  }

  render() {
    return (
      <div>
        <AppHeader />
        <AppNavBar />
        <div style={buttonRow}>
          <RecipeAddModal buttonLabel="Add Recipe"/>
        </div>
        
      </div>
    );
  }
}

export default App;
