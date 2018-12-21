import React, { Component } from 'react';
import Ingredient from '../Recipes/Ingredient.js';
import { Button, Form } from 'reactstrap';

class AddIngredient extends React.Component {
    state = {
      numIngredients: 0,
      ingredientEntryButtonLabel: "Add an Ingredient",
      ingredients: []
    }

    constructor(props) {
        super(props);

        this.removeIngredient = this.removeIngredient.bind(this);
        this.handleIngredientName = this.handleIngredientName.bind(this);
        this.handleIngredientQuantity = this.handleIngredientQuantity.bind(this);
        this.handleIngredientUnits = this.handleIngredientUnits.bind(this);
        this.handleIngredients = this.handleIngredients.bind(this);
    }

    removeIngredient(id){
        var temp = this.state.ingredients;
        temp.splice(id, 1);

        this.setState({
            ingredients: temp,
            numIngredients: this.state.numIngredients - 1,
            ingredientName: "",
            ingredientQuantity: "",
            ingredientUnits: "",
        });
    }

    handleIngredientName(name){
      this.setState({
        ingredientName: name
      }, () => {

      })
    }

    handleIngredientQuantity(quantity){
      this.setState({
        ingredientQuantity: quantity
      }, () => {

      })
    }

    handleIngredientUnits(units){
      this.setState({
        ingredientUnits: units
      }, () => {

      })

      
    }

    handleIngredients(ingredient){
      var temp = this.state.ingredients;

      temp.push(ingredient);

      this.setState({
        ingredients: temp
      }, () => {
        this.props.handleIngredients(this.state.ingredients);
      })

      
    }
  
    render () {
      const ingredients = [];
  
      for (var i = 0; i < this.state.numIngredients; i += 1) {
        ingredients.push(<Ingredient id={"ingredient" + i} key={i} number={i} handleIngredients={this.handleIngredients} handleName={this.handleIngredientName} handleQuantity={this.handleIngredientQuantity} handleIngredientUnits={this.handleIngredientUnits} />);
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

      <Button color="primary" onClick={props.addIngredient}>{props.addIngredientButtonLabel}</Button>
    </div>
  );

  export default AddIngredient;