import React, { Component } from 'react';
import Ingredient from '../Recipes/Ingredient.js';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddIngredient extends React.Component {
    state = {
      numChildren: 0,
      ingredientEntryButtonLabel: "Add an Ingredient"
    }
  
    render () {
      const children = [];
  
      for (var i = 0; i < this.state.numChildren; i += 1) {
        children.push(<Ingredient key={i} number={i} />);
      };
  
      return (
        <ParentComponent addIngredientButtonLabel={this.state.ingredientEntryButtonLabel} addChild={this.onAddChild}>
          {children}
        </ParentComponent>
      );
    }
  
    onAddChild = () => {
      this.setState({
        numChildren: this.state.numChildren + 1
      });

      if(this.state.numChildren != 0){
          this.setState({
            ingredientEntryButtonLabel: "Add Another Ingredient"
          });
      }
    }
  }
  
  const ParentComponent = props => (
    <div className="card calculator">
      <div id="children-pane">
        {props.children}
      </div>

      <Button onClick={props.addChild}>{props.addIngredientButtonLabel}</Button>
    </div>
  );

  export default AddIngredient;