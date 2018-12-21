import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupButtonDropdown, Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Ingredient extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.setQuantityDropDown = this.setQuantityDropDown.bind(this);
        this.toggleQuantityDropDown = this.toggleQuantityDropDown.bind(this);
        this.setUnitsDropDown = this.setUnitsDropDown.bind(this);
        this.handleIngredientName = this.handleIngredientName.bind(this);

        this.state = {
          dropdownOpen: false,
          quantityDropDownOpen: false,
          number: props.number,
          quantityDropDownValue: "Quantity",
          unitsDropDownValue: "Units",
          ingredientName: ""
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
          }, () => {
            this.props.handleQuantity(this.state.quantityDropDownValue);

            if(this.state.ingredientName != "" && this.state.quantityDropDownValue != "Quantity" && this.state.unitsDropDownValue != "Units"){
                this.props.handleIngredients({
                    name: this.state.ingredientName,
                    quantity: this.state.quantityDropDownValue,
                    units: this.state.unitsDropDownValue
                })
            }
          })
      }

      setUnitsDropDown(e){
          this.setState({
              unitsDropDownValue: e.currentTarget.textContent
          }, () => {
            this.props.handleIngredientUnits(this.state.unitsDropDownValue);

            if(this.state.ingredientName != "" && this.state.quantityDropDownValue != "Quantity" && this.state.unitsDropDownValue != "Units"){
                this.props.handleIngredients({
                    name: this.state.ingredientName,
                    quantity: this.state.quantityDropDownValue,
                    units: this.state.unitsDropDownValue
                })
            }
          });   
      }

      handleIngredientName(e){
          this.setState({
              ingredientName: e.target.value
          }, () => {
            this.props.handleName(this.state.ingredientName);

            if(this.state.ingredientName != "" && this.state.quantityDropDownValue != "Quantity" && this.state.unitsDropDownValue != "Units"){
              this.props.handleIngredients({
                  name: this.state.ingredientName,
                  quantity: this.state.quantityDropDownValue,
                  units: this.state.unitsDropDownValue
              })
            }
          })

          
      }

    render(){
        return(
            <div id={"ingredientEntry" + this.state.number}>
                <InputGroup>
                    <Input 
                        id={"ingredientName" + this.state.number} 
                        type="text" 
                        placeholder={"Ingredient #" + (parseInt(this.state.number, 10) + 1)} 
                        value={this.state.ingredientName} 
                        onChange={this.handleIngredientName}>
                    </Input>
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
                    <InputGroupAddon addonType="append">
                        <Button color="danger">X</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }
}

export default Ingredient;