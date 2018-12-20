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

export default Ingredient;