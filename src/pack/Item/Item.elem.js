import styled from "styled-components";

const colorPrimary = "transparent";
const colorSecondary = "lightgrey";

export const ItemContainer = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props =>
    props.isDragging ? colorSecondary : colorPrimary};
  transition: background-color 0.1s ease-out;
  &: hover {
    background-color: ${colorSecondary};
    transition: none;
  }
`;

export const ItemInput = styled.input`
  background-color: ${props =>
    props.isDragging ? colorSecondary : colorPrimary};
`;
