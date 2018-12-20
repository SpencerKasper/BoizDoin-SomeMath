import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ReactInput extends Component {

  render() {
    return (
      <div>
        <Form>
            <FormGroup>
                <Label for="recipeName">Recipe Name:</Label>
                <Input style={{width: '50%', textAlign: 'center'}} type="text" name="recipename" id="recipeName"/>
            </FormGroup>

            <FormGroup>
                <Label for="recipetext">Recipe:</Label>
                <Input type="textarea" id="recipetext"></Input>
            </FormGroup>

            <FormGroup>
                <Label for="foodPhoto">Upload a photo of your recipe:</Label>
                <Input style={{width: '50%', textAlign: 'center'}} type="file" name="photo" id="foodPhoto"></Input>
            </FormGroup>
            <Button color="success">Submit</Button>
            <Button color="danger">Cancel</Button>
        </Form>
      </div>
    );
  }
}

export default ReactInput;
