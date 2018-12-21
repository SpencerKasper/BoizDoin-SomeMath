import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RecipeInput from './RecipesInput.js';

class RecipeAddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      recipeName: ''
    };

    this.toggle = this.toggle.bind(this);
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
            <RecipeInput />
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