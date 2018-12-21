import React, { Component } from 'react';
import RecipeStep from './RecipeStep';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class RecipeSteps extends React.Component {
    state = {
      numSteps: 0,
      stepEntryButtonLabel: "Add a Step",
      steps: []
    }

    constructor(props) {
        super(props);

        this.removeIngredient = this.removeIngredient.bind(this);
    }

    removeIngredient(id){
        var temp = this.state.ingredients;
        temp.splice(id, 1);

        this.setState({
            steps: temp,
            numSteps: this.state.numSteps - 1
        });
    }
  
    render () {
      const steps = [];
  
      for (var i = 0; i < this.state.numSteps; i += 1) {
        steps.push(<RecipeStep id={"recipeStep" + i} key={i} number={i} />);
        steps.push(<br></br>);
      };

      return (
        <StepList addStepButtonLabel={this.state.stepEntryButtonLabel} addStep={this.onAddStep}>
          {steps}
        </StepList>
      );
    }
  
    onAddStep = () => {
      this.setState({
        numSteps: this.state.numSteps + 1,
      });

      if(this.state.numSteps + 1 > 0){
          this.setState({
            stepEntryButtonLabel: "Add Another Step"
          });
      }
    }
  }
  
  const StepList = props => (
    <div>
      <div>
        {props.children}
      </div>

      <Button color="primary" onClick={props.addStep}>{props.addStepButtonLabel}</Button>
    </div>
  );

  export default RecipeSteps;