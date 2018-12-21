import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AddIngredient from './AddIngredient';
import RecipeSteps from './RecipeSteps';

class ReactInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            recipeName: "",
            ingredients: [],
            recipeSteps: []
        };

        this.handleRecipeName = this.handleRecipeName.bind(this);
        this.handleIngredients = this.handleIngredients.bind(this);
    }

    handleRecipeName(event){
        this.setState({
            recipeName: event.target.value
        }, () => {
            this.props.handleRecipeName(this.state.recipeName);
        });
    }

    handleIngredients(ingredients){
        this.setState({
            ingredients: ingredients
        }, () => {
            this.props.handleIngredients(ingredients);
        });
    }

  render() {
    return (
      <div>
        <Form>
            <FormGroup>
                <Label for="recipeName">Recipe Name:</Label>
                <Input  
                    type="text" 
                    name="recipename" 
                    id="recipeName" 
                    placeholder="Enter a recipe name here."
                    value={this.state.recipeName}
                    onChange={this.handleRecipeName}/>
            </FormGroup>

            <FormGroup>
                <Label for="ingredientEntry">Ingredient Entry:</Label>
                <AddIngredient id="ingredientEntry" handleIngredients={this.handleIngredients}></AddIngredient>
            </FormGroup>

            <FormGroup>
                <Label for="recipe">Recipe:</Label>
                <RecipeSteps id="recipeSteps"></RecipeSteps>
            </FormGroup>

            <FormGroup>
                <Label for="foodPhoto">Upload a photo of your recipe:</Label>
                <Input type="file" name="photo" id="foodPhoto"></Input>
            </FormGroup>
        </Form>
      </div>
    );
  }
}

export default ReactInput;
