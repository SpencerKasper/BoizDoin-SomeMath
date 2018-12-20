import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Ingredient extends React.Component {
    render(){
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label for="ingredientName">Ingredient:</Label>
                        <Input type="text" id="ingredientName"></Input>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const ParentComponent = props => (
    <div className="card calculator">
      <p><a href="#" onClick={props.addChild}>Add Another Child Component</a></p>
      <div id="children-pane">
        {props.children}
      </div>
    </div>
  );

export default Ingredient;