import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Container>
      <Logo src="HeroMountain.svg" />
      <LinkContainer>
        <Link to="/login">
          <LinkText>Log In</LinkText>
        </Link>

        <Link to="/register">
          <LinkText>Sign Up</LinkText>
        </Link>
      </LinkContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  height: 50px;
  margin-bottom: -45px;
`;

const Logo = styled.img`
  margin: 10px 0px 0px 3vw;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 10vw;
  margin: 0px 3vw 0px 0px;
`;

const LinkText = styled.p`
  text-decoration: none;
`;
