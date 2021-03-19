import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import DynamicInput from "../../pack/DynamicInput.elem";
import { Link, Redirect } from "react-router-dom";
import { API_REGISTER } from "../../api";
import Spinner from "./_Spinner";
import { validateForm } from "./utils";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.confirmPassword = React.createRef();

    this.state = {
      email: "billyray@gmail.com",
      password: "billyray",
      confirmPassword: "billyray",
      errorMessage: "",
      displaySpinner: false,
    };
  }

  _handleUpdate = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  _postForm = async () => {
    await this.setState({ displaySpinner: true });

    const { email, password, confirmPassword } = this.state;
    const formStatus = validateForm(email, password, confirmPassword);

    console.log(formStatus);
    console.log("msg", formStatus.message);

    if (formStatus.message) {
      this.setState({
        errorMessage: formStatus.message,
        displaySpinner: false,
      });
    }

    if (formStatus.valid) {
      const { token, message } = await API_REGISTER(email, password);

      if (token) {
        localStorage.setItem("token", token);
        this.setState({ redirect: true });
      }

      if (message) {
        this.setState({ errorMessage: message, displaySpinner: false });
      }
    }
  };

  render() {
    const {
      redirect,
      email,
      password,
      confirmPassword,
      errorMessage,
      displaySpinner,
    } = this.state;

    // Redirect the user once they've successfully registered.
    if (redirect) {
      return <Redirect to="/pack" />;
    }

    return (
      <Form>
        <Title>Login</Title>
        <FieldWrapper>
          <DynamicInput
            inputType="text"
            inputName="email"
            inputRef={this.emailInput}
            inputValue={email}
            inputPlaceholder="Email"
            fontSize="18"
            handleUpdate={this._handleUpdate}
            inputWidth="100%"
            underlineWidth="100%"
            alwaysShowUnderline
          />
        </FieldWrapper>

        <FieldWrapper>
          <DynamicInput
            inputType="password"
            inputName="password"
            inputRef={this.passwordInput}
            inputValue={password}
            inputPlaceholder="Password"
            fontSize="18"
            handleUpdate={this._handleUpdate}
            underlineWidth="100%"
            inputWidth="100%"
            alwaysShowUnderline
          />
        </FieldWrapper>

        <FieldWrapper>
          <DynamicInput
            inputType="password"
            inputName="confirmPassword"
            inputRef={this.confirmPassword}
            inputValue={confirmPassword}
            inputPlaceholder="Confirm Password"
            fontSize="18"
            handleUpdate={this._handleUpdate}
            underlineWidth="100%"
            inputWidth="100%"
            alwaysShowUnderline
          />
        </FieldWrapper>

        {displaySpinner ? (
          <Spinner />
        ) : (
          <ErrorMessage>{errorMessage}</ErrorMessage>
        )}

        <Button onClick={this._postForm}>Sign Up</Button>
        <Link to="/login">
          <RedirectText>Already have an account? Sign In instead</RedirectText>
        </Link>
      </Form>
    );
  }
}

const Title = styled.h1`
  font-family: Alata;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  width: 100%;
  margin: 5px 0px 0px 0px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  border-radius: 5px;
  box-shadow: 2px 1px 5px gray;
  background-color: white;
  padding: 10px 10px 10px 10px;
`;

const FieldWrapper = styled.div`
  margin: 25px 60px 15px 60px;
`;

const ErrorMessage = styled.p`
  font-family: Alata;
  font-size: 16px;
  color: red;
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  margin: 15px 60px 10px 60px;
  font-family: Alata;
  font-size: 18px;
  padding: 5px 0px 7px 0px;
  cursor: pointer;
  background-color: #607a00;
  &: hover {
    background-color: #708f00;
    transition: background-color 120ms;
  }
  outline: none;
  border: none;
  color: white;
`;

const RedirectText = styled.p`
  font-family: Alata;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  color: black;
`;
