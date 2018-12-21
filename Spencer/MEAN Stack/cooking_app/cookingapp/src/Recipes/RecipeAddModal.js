import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RecipeInput from './RecipesInput.js';

class RecipeAddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      recipeName: "",
      ingredients: [],
      recipeSteps: []
    }

    this.handleName = this.handleName.bind(this);
    this.handleIngredients = this.handleIngredients.bind(this);
    this.toggle = this.toggle.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
  }

  handleName(name){
    this.setState({
      recipeName: name
    }, () => {

    })
  }

  handleIngredients(ingredients){
    this.setState({
      ingredients: ingredients
    })
  }

  submitRecipe(){
    alert(this.state.recipeName);
    alert(JSON.stringify(this.state.ingredients));
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a Recipe</ModalHeader>
          <ModalBody>
            <RecipeInput 
              handleRecipe={this.handleRecipe} 
              handleRecipeName={this.handleName}
              handleIngredients={this.handleIngredients}/>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.submitRecipe}>Add Recipe</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RecipeAddModal;