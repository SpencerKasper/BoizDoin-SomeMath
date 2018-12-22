import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupButtonDropdown, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

class RecipeStep extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: this.props.number,
            stepNumber: this.props.number + 1,
            recipeStepValue: "",
            steps: this.props.steps
        };

        this.handleRecipeStepValue = this.handleRecipeStepValue.bind(this);
      }

    handleRecipeStepValue(event){
        var temp = this.state.steps;
        
        this.setState({
            recipeStepValue: event.target.value
        }, () => {
            for(var item in temp){
                if(temp[item].stepNumber == this.state.stepNumber){
                    delete temp[item];
                }
            }

            temp.push({
                stepNumber: this.state.stepNumber,
                recipeStepValue: this.state.recipeStepValue
            })

            this.setState({
                steps: temp
            }, () => {
                this.props.handleSteps(this.state.steps);
            })           
        })

        
    }

    render(){
        return(
            <div id={"recipeStepEntry" + this.state.number}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>{"Step #" + parseInt(this.props.number + 1, 10).toString()}</InputGroupText>
                    </InputGroupAddon>
                    <Input id={"recipeStepName" + this.state.number} 
                        type="textarea" 
                        placeholder={"Enter step " + parseInt(this.state.number + 1, 10).toString() + " of the recipe."} 
                        onBlur={this.handleRecipeStepValue}></Input>
                    <InputGroupAddon addonType="append">
                        <Button color="danger">X</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }
}

export default RecipeStep;