import React, { Component } from "react";
import styled from "styled-components";
import Register from "./Register";
import Login from "./Login";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: true,
    };
  }

  toggleForm = () => {
    this.setState({ showLogin: !this.state.showLogin });
  };

  // validateEmail = (email) => {
  //   const regex = /\S+@\S+\.\S+/;
  //   return regex.test(email);
  // };

  render() {
    return (
      <Container>
        {this.state.showLogin ? (
          <Login
            toggleForm={this.toggleForm}
            validateEmail={this.validateEmail}
          />
        ) : (
          <Register toggleForm={this.toggleForm} />
        )}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f6f5f0;
`;
