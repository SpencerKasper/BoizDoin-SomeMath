import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupButtonDropdown, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class RecipeStep extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: this.props.number
        };
      }

    render(){
        return(
            <div id={"recipeStepEntry" + this.state.number}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>{"Step #" + parseInt(this.props.number + 1, 10).toString()}</InputGroupText>
                    </InputGroupAddon>
                    <Input id={"recipeStepName" + this.state.number} type="text" placeholder={"Enter step " + parseInt(this.state.number + 1, 10).toString() + " of the recipe."}></Input>
                    <InputGroupAddon addonType="append">
                        <Button color="danger">X</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }
}

export default RecipeStep;