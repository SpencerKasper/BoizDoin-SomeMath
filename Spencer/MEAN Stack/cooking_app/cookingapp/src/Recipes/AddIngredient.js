import React, { Component } from 'react';
import Ingredient from '../Recipes/Ingredient.js';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddIngredient extends React.Component {
    state = {
      numIngredients: 0,
      ingredientEntryButtonLabel: "Add an Ingredient"
    }
  
    render () {
      const ingredients = [];
  
      for (var i = 0; i < this.state.numIngredients; i += 1) {
        ingredients.push(<Ingredient key={i} number={i} />);
        ingredients.push(<br></br>);
      };
  
      return (
        <IngredientList addIngredientButtonLabel={this.state.ingredientEntryButtonLabel} addIngredient={this.onAddIngredient}>
          {ingredients}
        </IngredientList>
      );
    }
  
    onAddIngredient = () => {
      this.setState({
        numIngredients: this.state.numIngredients + 1
      });

      if(this.state.numIngredients + 1 > 0){
          this.setState({
            ingredientEntryButtonLabel: "Add Another Ingredient"
          });
      }
    }
  }
  
  const IngredientList = props => (
    <div>
      <div>
        {props.children}
      </div>

      <Button onClick={props.addIngredient}>{props.addIngredientButtonLabel}</Button>
    </div>
  );

  export default AddIngredient;