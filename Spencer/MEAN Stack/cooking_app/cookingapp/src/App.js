import React, { Component } from 'react';
import RecipesInput from './Recipes/RecipesInput.js';
import AppHeader from './AppComponents/AppHeader.js';
import './Styles/App.css';
import AppNavBar from './AppComponents/AppNavBar.js';
import RecipeAddModal from './Recipes/RecipeAddModal.js';
import LoginModal from './Login/LoginModal.js';

const buttonRow = {
  display: "flex",
  flexDirection: "row"
};

class App extends Component {

  render() {
    return (
      <div>
        <AppHeader />
        <AppNavBar />
        <div style={buttonRow}>
          <RecipeAddModal buttonLabel="Add Recipe"/>
          <LoginModal buttonLabel="Log In" />
        </div>
        
      </div>
    );
  }
}

export default App;
