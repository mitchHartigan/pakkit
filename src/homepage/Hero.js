import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ScrollWrapper from "./ScrollWrapper";
import animData from "./pakkit_hero_animation.json";
import LottieAnimation from "./HeroAnimation";

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
      <ParallaxBackground scrollPos={scrollPos}>
        <LottieAnimation lotti={animData} height={959} width={1902} />
      </ParallaxBackground>
    </Container>
  );
}

const ParallaxBackground = styled.div.attrs((props) => ({
  style: {
    transform: `translate3d(0px, ${props.scrollPos * 0.21}px, 0px)`,
  },
}))`
  align-self: flex-end;
  width: 100%;
  height: auto;
  margin-top: -469px;
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
  margin-bottom: -130px;
  @media (max-width: 1500px) {
    justify-content: center;
    padding-top: 20%;
  }
`;
