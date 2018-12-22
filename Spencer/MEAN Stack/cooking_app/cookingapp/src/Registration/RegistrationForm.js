import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class RegistrationForm extends Component {
    //Add code here to set the state values of each of th form inputs

  render() {
    return (
      <div>
        <Form>
            <FormGroup>
                <Label for="userName">User Name:</Label>
                <Input  type="text" name="userName" id="userName" placeholder="Enter your user name here."/>
            </FormGroup>

            <FormGroup>
                <Label for="firstName">First Name:</Label>
                <Input type="text" name="firstName" id="firstName" placeholder="Enter your first name here." />
            </FormGroup>

            <FormGroup>
                <Label for="lastName">Last Name:</Label>
                <Input type="text" name="lastName" id="lastName" placeholder="Enter your first name here." />
            </FormGroup>

            <FormGroup>
                <Label for="email">Email:</Label>
                <Input type="email" name="email" id="email" placeholder="Enter your email here."></Input>
            </FormGroup>

            <FormGroup>
                <Label for="birthday">Birthday:</Label>
            </FormGroup>

            <FormGroup>
                <Label for="password">Password:</Label>
                <Input type="password" name="password" id="password" placeholder="Enter your password here. "></Input>
            </FormGroup>

            <FormGroup>
                <Label for="passwordConfirm">Enter passsword again:</Label>
                <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Please re-enter your password here."></Input>
            </FormGroup>
        </Form>
      </div>
    );
  }
}

export default RegistrationForm;
