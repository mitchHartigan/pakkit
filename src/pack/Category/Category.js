import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import Item from "../Item/Item";
import { AddANewItemButton, CategoryContainer } from "./Category.elem";
import { CategoryColor } from "./CategoryColor.elem";
import DynamicInput from "../DynamicInput.elem";
import { parseWeightValToString } from "../utils";
import styled from "styled-components";

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.state = {
      collapsed: false,
      hovered: false,
    };
  }

  // TODO: refactor controls/heading of the category out into its own component.
  // Yeah man, this file is wayy too big.

  handleDelete = () => {
    this.props.deleteCategory(this.props.category.id);
  };

  updateTitle = (evt) => {
    this.props.updateCategoryTitle(this.props.id, evt.target.value);
  };

  handleAddItem = () => {
    this.props.addItem(this.props.category);
  };

  render() {
    const { collapsed, hovered } = this.state;
    const { totalWeight } = this.props.category;

    const nameInputProps = {
      inputType: "text",
      fontSize: "20",
      fontFamily: "Alata",
      textAlign: "left",
      inputRef: this.nameInput,
      inputName: "categoryName",
      inputPlaceholder: "Category Title",
      inputValue: this.props.category.title || "",
      handleUpdate: this.updateTitle,
      containerStyles: "margin: 10px; width: 25vw;",
    };

    return (
      <Droppable droppableId={this.props.category.id}>
        {(provided, snapshot) => (
          <CategoryContainer
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            onMouseOver={() => this.setState({ hovered: true })}
            onMouseLeave={() => this.setState({ hovered: false })}
          >
            <CategoryHeader>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "20%",
                }}
              >
                <CategoryColor color={this.props.category.color} />
                <NameInputContainer>
                  <DynamicInput {...nameInputProps} />
                </NameInputContainer>
              </div>

              <CategoryControls>
                <CategoryWeightSum show={collapsed}>
                  {parseWeightValToString(totalWeight)}
                </CategoryWeightSum>

                <CollapseButton
                  onClick={() => this.setState({ collapsed: !collapsed })}
                  collapsed={collapsed}
                  show={hovered}
                >
                  <img src="collapse-button.png" alt="" />
                </CollapseButton>

                <DeleteButton onClick={this.handleDelete} show={hovered}>
                  <img src="button_close.svg" alt="close button." />
                </DeleteButton>
              </CategoryControls>
            </CategoryHeader>
            <ItemsContainer show={!collapsed}>
              {this.props.items.map((item, index) => {
                return (
                  <Item
                    key={item.id}
                    index={index}
                    category={this.props.category}
                    item={item}
                    updateItemContents={this.props.updateItemContents}
                    deleteItem={this.props.deleteItem}
                  />
                );
              })}

              {provided.placeholder}

              <AddANewItemButton
                onClick={this.handleAddItem}
                isDraggingOver={snapshot.isDraggingOver}
              >
                + Add an item
              </AddANewItemButton>
            </ItemsContainer>
          </CategoryContainer>
        )}
      </Droppable>
    );
  }
}

const CollapseButton = styled.button`
  opacity: ${(props) => (props.show ? "1" : "0")};
  border: none;
  cursor: pointer;
  outline: none;
  background: transparent;
  transform: ${(props) =>
    props.collapsed ? "rotate(-180deg)" : "translate(0px, 5px)"};
  transform-origin: center;
  transition: transform 150ms;
  flex-shrink: 0;
  transition: opacity 150ms ease;
  margin-top: -2px;
`;

const DeleteButton = styled.button`
  opacity: ${(props) => (props.show ? "1" : "0")};
  font-family: Alata;
  padding: 5px 25px 0px 0px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  transition: opacity 150ms ease;
`;

const ItemsContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
`;

const CategoryWeightSum = styled.p`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  font-family: Alata;
  font-size: 18px;
  color: #607a00;
`;

const NameInputContainer = styled.div`
  width: 20vw;
`;

const CategoryHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

const CategoryControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
`;
