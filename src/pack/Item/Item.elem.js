import styled from "styled-components";

const colorPrimary = "transparent";
const colorSecondary = "lightgrey";

export const ItemContainer = styled.div`
  padding: 10px;
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => (props.isDragging ? "white" : "transparent")};
  box-shadow: ${props => (props.isDragging ? "1px 2px 10px grey" : "none")};
  transition: background-color 0.3 ease-out;
  &: hover {
    box-shadow: 1px 2px 10px grey;
    transition: box-shadow 0.2s ease-out;
  }
`;

export const ItemInput = styled.input`
  background-color: ${props => (props.isDragging ? "white" : "transparent")};
`;
