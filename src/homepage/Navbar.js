import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { scrollPos } = props;

  return (
    <Container scrollPos={scrollPos}>
      <Link to="/" style={LinkStyleOverride}>
        <div>
          <Logo src="HeroMountain.svg" />
        </div>
      </Link>
      <LinkContainer>
        <Link to="/login" style={LinkStyleOverride}>
          <LinkText>Log In</LinkText>
        </Link>

        <Link to="/register" style={LinkStyleOverride}>
          <LinkText>Sign Up</LinkText>
        </Link>
      </LinkContainer>
    </Container>
  );
}

const LinkStyleOverride = {
  textDecoration: "none",
  margin: "0px",
};

const Container = styled.div.attrs((props) => ({
  style: {
    boxShadow: `${props.scrollPos > 0 ? "1px 1px 7px #8c8c89" : "none"}`,
  },
}))`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 50px;
  margin-bottom: -45px;
  position: fixed;
  background-color: #f6f5f0;
  transition: box-shadow 150ms ease-in;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 35.5px;
  width: 75px;
  margin: 10px 0px 10px 2vw;
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
  font-family: Alata;
  font-size: 16px;
  color: black;
`;
