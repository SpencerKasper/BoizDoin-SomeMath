import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AddIngredient from './AddIngredient';
import RecipeSteps from './RecipeSteps';

class ReactInput extends Component {

  render() {
    return (
      <div>
        <Form>
            <FormGroup>
                <Label for="recipeName">Recipe Name:</Label>
                <Input  type="text" name="recipename" id="recipeName" placeholder="Enter a recipe name here."/>
            </FormGroup>

            <FormGroup>
                <Label for="ingredientEntry">Ingredient Entry:</Label>
                <AddIngredient id="ingredientEntry"></AddIngredient>
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
