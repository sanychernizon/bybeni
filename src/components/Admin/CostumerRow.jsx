import React, { Component } from "react";

class CostumerRow extends Component {
  render() {
    console.log(this.props.costumer)
    return (
      <tr>
        <th>{this.props.idx}</th>
        <td>{this.props.costumer.name} {this.props.costumer.lastName}</td>
        <td>{this.props.costumer.email}</td>
        <td>{this.props.costumer.orders.length}</td>
      </tr>
    );
  }
}

export default CostumerRow;
