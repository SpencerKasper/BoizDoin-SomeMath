import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ReactInput extends Component {

  render() {
    return (
      <div>
        <Form>
            <FormGroup>
                <Label for="recipeName">Recipe Name</Label>
                <Input style={{width: '50%', textAlign: 'center'}} type="text" name="recipename" id="recipeName"/>
            </FormGroup>
        </Form>
      </div>
    );
  }
}

export default ReactInput;
