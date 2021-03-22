import React, { Component } from "react";
import Category from "../Category/Category";
import { DragDropContext } from "react-beautiful-dnd";
import { defaultState } from "./defaultState";
import {
  handleDrag,
  handleAddItem,
  handleAddCategory,
  handleDeleteItem,
  handleUpdateItem,
  handleUpdateCategoryTitle,
  handleDeleteCategory,
} from "../utils";
import { API_PUT_PACK } from "../../api";
import { parseDataForVis } from "../utils";
import styled, { keyframes } from "styled-components";
import Vis from "../../vis/index";
import { NewCategoryButton } from "./NewCategoryButton.elem";
import TutorialMessage from "./TutorialMessage";

export default class BackpackData extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }

  writeState = (state) => {
    const { online, token } = state;

    if (online && token) {
      API_PUT_PACK(token, state);
    }
  };

  componentDidMount() {
    const localState = JSON.parse(localStorage.getItem("state"));

    if (localState) {
      this.setState(localState);
    }

    window.onbeforeunload = async () => {
      localStorage.setItem("state", JSON.stringify(this.state));
    };
  }

  handleDrag = (result) => {
    this.setState(handleDrag(result, this.state));
  };

  updateItemContents = (itemId, key, value) => {
    this.setState(handleUpdateItem(itemId, key, value, this.state));
  };

  addItem = (category) => {
    this.setState(handleAddItem(category, this.state), () => {
      this.writeState(this.state);
    });
  };

  addCategory = () => {
    this.setState(handleAddCategory(this.state));
  };

  deleteItem = (item, category) => {
    this.setState(handleDeleteItem(item, category, this.state));
  };

  deleteCategory = (id) => {
    this.setState(handleDeleteCategory(id, this.state));
  };

  updateCategoryTitle = (id, title) => {
    this.setState(handleUpdateCategoryTitle(id, title, this.state));
  };

  checkVisWillRender = () => {
    if (Object.keys(this.state.items).length === 0) {
      return false;
    }
    return true;
  };

  checkTutorialWillRender = () => {
    if (Object.keys(this.state.categories).length === 0) {
      return true;
    }
    return false;
  };

  render() {
    return (
      <DataContainer renderVis={this.checkVisWillRender()}>
        <DragDropContext onDragEnd={this.handleDrag}>
          {this.checkVisWillRender() && (
            <VisContainer>
              <Vis data={parseDataForVis(this.state)} />
            </VisContainer>
          )}
          <div style={{ width: "100%" }}>
            {this.checkTutorialWillRender() && <TutorialMessage />}

            <ListContainer id="listContainer">
              {this.state.categoryOrder.map((categoryId) => {
                const category = this.state.categories[categoryId];
                const items = category.itemIds.map(
                  (itemId) => this.state.items[itemId]
                  // get each item from the state
                );
                return (
                  <Category
                    key={category.id}
                    id={category.id}
                    category={category}
                    items={items}
                    updateItemContents={this.updateItemContents}
                    addItem={this.addItem}
                    deleteItem={this.deleteItem}
                    deleteCategory={this.deleteCategory}
                    updateCategoryTitle={this.updateCategoryTitle}
                  />
                );
              })}

              <NewCategoryButton onClick={this.addCategory} />
            </ListContainer>
          </div>
        </DragDropContext>
      </DataContainer>
    );
  }
}

const visAnimation = keyframes`
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
`;

const VisContainer = styled.div`
  margin-left: 0.3vw;
  margin-top: 3vh;
  animation: ${visAnimation} 0.5s ease;
  position: sticky;
  top: 3vh;
  left: 0.5vw;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -1vw;
  margin-top: 2vh;
  width: 100%;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: ${(props) => (props.renderVis ? "0vw" : "10vh 30vw 0vh 30vw")};
  justify-content: ${(props) => (props.renderVis ? "" : "center")};
  transition: justify-content 1s linear;
`;
