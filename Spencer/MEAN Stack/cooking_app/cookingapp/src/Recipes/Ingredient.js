import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupDropdown, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Ingredient extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleQuantityDropDown = this.toggleQuantityDropDown.bind(this);
        this.state = {
          dropdownOpen: false,
          quantityDropDownOpen: false,
          number: props.number
        };
      }
    
      toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      toggleQuantityDropDown() {
        this.setState({
          quantityDropDownOpen: !this.state.quantityDropDownOpen
        });
      }

    render(){
        return(
            <div>
                <InputGroup>
                    <Input id="ingredientName" type="text" placeholder={"Ingredient #" + (parseInt(this.state.number, 10) + 1)}></Input>
                    <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.quantityDropDownOpen} toggle={this.toggleQuantityDropDown}>
                        <Dropdown isOpen={this.state.quantityDropDownOpen} toggle={this.toggleQuantityDropDown}>
                            <DropdownToggle caret>
                                Quantity
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Quantity</DropdownItem>
                                <DropdownItem>0</DropdownItem>
                                <DropdownItem>1/4</DropdownItem>
                                <DropdownItem>1/3</DropdownItem>
                                <DropdownItem>1/2</DropdownItem>
                                <DropdownItem>2/3</DropdownItem>
                                <DropdownItem>3/4</DropdownItem>
                                <DropdownItem>1</DropdownItem>
                                <DropdownItem>5/4</DropdownItem>
                                <DropdownItem>4/3</DropdownItem>
                                <DropdownItem>3/2</DropdownItem>
                                <DropdownItem>5/3</DropdownItem>
                                <DropdownItem>2</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </InputGroupButtonDropdown>
                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                            <DropdownToggle caret>
                                Units
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Units</DropdownItem>
                                <DropdownItem>Oz</DropdownItem>
                                <DropdownItem>Fl Oz</DropdownItem>
                                <DropdownItem>Cups</DropdownItem>
                                <DropdownItem>Tsp</DropdownItem>
                                <DropdownItem>Tbsp</DropdownItem>
                            </DropdownMenu>
                        </Dropdown> 
                    </InputGroupButtonDropdown>
                </InputGroup>
            </div>
        );
    }
}

export default Ingredient;