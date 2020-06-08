import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import "./_item.scss";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      weight: 0,
      qty: 1
    };
  }

  handleUpdate = evt => {
    this.setState({ [evt.target.name]: evt.target.value }, () => {
      // pass this state up to parent here...
    });
  };

  render() {
    return (
      <Draggable draggableId={this.props.item.id} index={this.props.index}>
        {(provided, snapshot) => (
          <section
            className="item"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder={provided.placeholder || "Name"}
                value={this.props.name}
                onChange={this.handleUpdate}
              />
            </div>

            <div>
              <input
                name="weight"
                type="number"
                value={this.props.weight}
                placeholder="0"
                onChange={this.handleUpdate}
              />
              <select name="units">
                <option value="kg">kg</option>
                <option value="g">g</option>
              </select>
            </div>

            <div>
              <p>Qty</p>
              <input
                type="number"
                value={this.props.qty}
                name="qty"
                placeholder="1"
                onChange={this.handleUpdate}
              />
            </div>
          </section>
        )}
      </Draggable>
    );
  }
}