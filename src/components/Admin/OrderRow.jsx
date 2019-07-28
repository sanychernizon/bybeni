import React, { Component } from "react";

class OrderRow extends Component {
  render() {
    let current_datetime = new Date(this.props.order.created_at);
    let formatted_date =
      current_datetime.getDate() +
      "/" +
      (current_datetime.getMonth() + 1) +
      "/" +
      current_datetime.getFullYear();
    return (
      <tr>
        <th>{this.props.idx}</th>
        <td>
          <span
            className={
              this.props.order.status === "paid"
                ? "tag is-success"
                : "tag is-danger"
            }
          >
            {this.props.order.status === "paid" ? 'Aprovado' : 'Recusado'}
          </span>
        </td>
        <td>{formatted_date}</td>
        <td>{this.props.order.userName}</td>
        <td>Cartão de Crédito</td>
        <td>{this.props.order.installments}</td>
        <td>R$ {this.props.order.totalPrice}</td>
      </tr>
    );
  }
}

export default OrderRow;
