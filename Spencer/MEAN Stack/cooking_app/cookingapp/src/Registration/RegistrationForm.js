import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import InputItemGroup from '../AppComponents/InputItemGroup';
import ErrorMessage from '../Error/ErrorMessage';
var validator = require("email-validator");

class RegistrationForm extends Component {
    //Add code here to set the state values of each of th form inputs
  constructor(props){
      super(props);

      this.state = {
          userName: "",
          userNameError: "",
          firstName: "",
          firstNameError: "",
          lastName: "",
          lastNameError: "",
          email: "",
          emailError: "",
          birthday: "12/23/1996",
          birthdayError: "",
          password1: "",
          password2: "",
          passwordErrors: [],
          phoneNumber: "2245679847",
          phoneNumberError: "",
          type: "Regular"
      }
      
      this.handleUserName = this.handleUserName.bind(this);
      this.handleFirstName = this.handleFirstName.bind(this);
      this.handleLastName = this.handleLastName.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handlePassword1 = this.handlePassword1.bind(this);
      this.handlePassword2 = this.handlePassword2.bind(this);
      this.handleBirthday = this.handleBirthday.bind(this);
  }

  handleUserName(userName, setUserNameError){
    this.setState({
        userName: userName
    }, () => {
        var userNameError = "";

        if(this.state.userName == ""){
            userNameError = "You must enter a user name.";
        }

        setUserNameError(userNameError);

        this.setState({
            userNameError: userNameError
        }, () => {
            this.props.handleUserName(this.state.userName);
        })
    })
  }

  handleFirstName(firstName, setFirstNameError){
    this.setState({
        firstName: firstName
    }, () => {
        var firstNameError = "";

        if(this.state.firstName == ""){
            firstNameError = "You must enter a first name.";
        }

        setFirstNameError(firstNameError);

        this.setState({
            firstNameError: firstNameError
        }, () => {
            this.props.handleFirstName(this.state.firstName);
        })
    })
  }

  handleLastName(lastName, setLastNameError){
    this.setState({
        lastName: lastName
    }, () => {
        var lastNameError = "";

        if(this.state.lastName == ""){
            lastNameError = "You must enter a lasst name.";
        }

        setLastNameError(lastNameError);

        this.setState({
            lastNameError: lastNameError
        }, () => {
            this.props.handleLastName(this.state.lastName);
        })
    })
  }

  handleEmail(email, setEmailError){
    this.setState({
        email: email
    }, () => {
        var emailError = "";

        if(this.state.email == ""){
            emailError = "You must enter an email";
        }

        if(!validator.validate(this.state.email) && !(this.state.email == "")){
            emailError = "Your email must be in the following form: test@test.com"
        }

        setEmailError(emailError);

        this.setState({
            emailError: emailError
        }, () => {
            this.props.handleEmail(this.state.email);
        })
    })
  }

  handleBirthday(event){
      this.setState({
          birthday: event.target.value
      }, () => {
          this.props.handleBirthday(this.state.birthday);
      })
  }

  handlePassword1(event){
    this.setState({
        password1: event.target.value
    }, () => {
        this.props.handlePassword1(this.state.password1);
    })
  }

  handlePassword2(event){
    this.setState({
        password2: event.target.value
    }, () => {
        this.props.handlePassword2(this.state.password2);
    })
  }
  
  render() {
    return (
      <div>
        <Form>
            <InputItemGroup 
                labelName={"User Name:"}
                inputType={"text"}
                placeholder={"Enter your desired user name here."}
                errorMessage={this.state.userNameError}
                shareItemValue={this.handleUserName}
            />

            <InputItemGroup 
                labelName={"First Name:"}
                inputType={"text"}
                placeholder={"Enter your first name here."}
                errorMessage={this.state.firstNameError}
                shareItemValue={this.handleFirstName}
            />

            <InputItemGroup
                labelName={"Last Name:"}
                inputType={"text"}
                placeholder={"Enter your last name here."}
                errorMessage={this.state.lastNameError}
                shareItemValue={this.handleLastName}
            />

            <InputItemGroup
                labelName={"Email:"}
                inputType={"email"}
                placeholder={"Enter your email here. (Ex: myemail@email.com"}
                errorMessage={this.state.emailError}
                shareItemValue={this.handleEmail}
            />

            <FormGroup>
                <Label for="birthday">Birthday:</Label>
                <Input type="text" name="birthday" id="birthday" placeholder="Enter your birthday" onBlur={this.handleBirthday}></Input>
            </FormGroup>

            <FormGroup>
                <Label for="password">Password:</Label>
                <Input type="password" name="password" id="password" placeholder="Enter your password here. " onBlur={this.handlePassword1}></Input>
            </FormGroup>

            <FormGroup>
                <Label for="passwordConfirm">Enter passsword again:</Label>
                <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Please re-enter your password here." onBlur={this.handlePassword2}></Input>
            </FormGroup>
        </Form>
      </div>
    );
  }
}

export default RegistrationForm;
