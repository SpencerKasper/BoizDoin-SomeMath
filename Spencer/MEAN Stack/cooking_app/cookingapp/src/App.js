import React, { Component } from 'react';
import RecipesInput from './Recipes/RecipesInput.js';
import AppHeader from './AppComponents/AppHeader.js';
import './Styles/App.css';
import AppNavBar from './AppComponents/AppNavBar.js';
import RecipeAddModal from './Recipes/RecipeAddModal.js';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <RecipeAddModal buttonLabel="Add Recipe"/>
      </div>
    );
  }
}

export default App;
