import React, { Component } from "react";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      weight: 0,
      quantity: 1
    };
  }

  handleUpdate = evt => {
    this.setState({ [evt.target.name]: evt.target.value }, () => {
      // pass this state up to parent here...
    });
  };

  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleUpdate}
          />
        </td>

        <td>
          <input
            name="weight"
            type="number"
            placeholder="0"
            onChange={this.handleUpdate}
          />
          <select name="units">
            <option value="kg">kg</option>
            <option value="g">g</option>
          </select>
        </td>

        <td>
          <p>Qty</p>
          <input
            type="number"
            name="quantity"
            placeholder="1"
            onChange={this.handleUpdate}
          />
        </td>
      </tr>
    );
  }
}
