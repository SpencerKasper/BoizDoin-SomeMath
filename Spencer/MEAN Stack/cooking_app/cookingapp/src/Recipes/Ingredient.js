import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupDropdown, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Ingredient extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.setQuantityDropDown = this.setQuantityDropDown.bind(this);
        this.toggleQuantityDropDown = this.toggleQuantityDropDown.bind(this);
        this.setUnitsDropDown = this.setUnitsDropDown.bind(this);
        this.state = {
          dropdownOpen: false,
          quantityDropDownOpen: false,
          number: props.number,
          quantityDropDownValue: "Quantity",
          unitsDropDownValue: "Units"
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

      setQuantityDropDown(e){
          this.setState({
            quantityDropDownValue: e.currentTarget.textContent
          });
      }

      setUnitsDropDown(e){
          this.setState({
              unitsDropDownValue: e.currentTarget.textContent
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
                                {this.state.quantityDropDownValue}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Quantity</DropdownItem>
                                <DropdownItem onClick={this.setQuantityDropDown}>0</DropdownItem>
                                <DropdownItem onClick={this.setQuantityDropDown}>1/4</DropdownItem>
                                <DropdownItem onClick={this.setQuantityDropDown}>1/3</DropdownItem>
                                <DropdownItem onClick={this.setQuantityDropDown}>1/2</DropdownItem>
                                <DropdownItem onClick={this.setQuantityDropDown}>2/3</DropdownItem>
                                <DropdownItem onClick={this.setQuantityDropDown}>3/4</DropdownItem>
                                <DropdownItem onClick={this.setQuantityDropDown}>1</DropdownItem>
                                <DropdownItem onClick={this.setQuantityDropDown}>5/4</DropdownItem>
                                <DropdownItem onClick={this.setQuantityDropDown}>4/3</DropdownItem>
                                <DropdownItem onClick={this.setQuantityDropDown}>3/2</DropdownItem>
                                <DropdownItem onClick={this.setQuantityDropDown}>5/3</DropdownItem>
                                <DropdownItem onClick={this.setQuantityDropDown}>2</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </InputGroupButtonDropdown>
                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                            <DropdownToggle caret>
                                {this.state.unitsDropDownValue}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Units</DropdownItem>
                                <DropdownItem onClick={this.setUnitsDropDown}>Oz</DropdownItem>
                                <DropdownItem onClick={this.setUnitsDropDown}>Fl Oz</DropdownItem>
                                <DropdownItem onClick={this.setUnitsDropDown}>Cups</DropdownItem>
                                <DropdownItem onClick={this.setUnitsDropDown}>Tsp</DropdownItem>
                                <DropdownItem onClick={this.setUnitsDropDown}>Tbsp</DropdownItem>
                            </DropdownMenu>
                        </Dropdown> 
                    </InputGroupButtonDropdown>
                </InputGroup>
            </div>
        );
    }
}

export default Ingredient;