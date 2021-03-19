import styled from "styled-components";
import React from "react";

const Spinner = () => (
  <SpinnerContainer>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
        shapeRendering="geometricPrecision"
      />
    </StyledSpinner>
  </SpinnerContainer>
);

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 30px;
  height: 30px;

  & .path {
    stroke: #708f00;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export default Spinner;
