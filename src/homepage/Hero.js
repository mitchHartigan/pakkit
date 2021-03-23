import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ScrollWrapper from "./ScrollWrapper";

export default function Hero(props) {
  const { scrollPos } = props;

  return (
    <Container>
      <HeroTextContainer>
        <TitleText>Welcome to Pakkit.</TitleText>
        <SubtitleText>The simplest way to visualize your pack.</SubtitleText>

        <ScrollWrapper target="signup-cards">
          <Button>Get Started</Button>
        </ScrollWrapper>
      </HeroTextContainer>
      <ParallaxBackground scrollPos={scrollPos} src="mountains.png" alt="" />
    </Container>
  );
}

const ParallaxBackground = styled.img.attrs((props) => ({
  style: {
    transform: `translate3d(0px, ${props.scrollPos * 0.21}px, 0px)`,
  },
}))`
  align-self: flex-end;
  width: 100%;
  height: auto;
  z-index: -1;
`;

const TitleText = styled.h1`
  font-family: Titillium Web;
  font-size: 100px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0px;
  background-color: transparent;
`;

const SubtitleText = styled(TitleText)`
  font-weight: 400;
  font-size: 30px;
  margin-top: 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: space-between;
  height: 100vh;
`;

const HeroTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 10%;
  @media (max-width: 1500px) {
    justify-content: center;
    padding-top: 20%;
  }
`;
