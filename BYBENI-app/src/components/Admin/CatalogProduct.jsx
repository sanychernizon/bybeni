import React, { Component } from "react";

class CatalogProduct extends Component {
  render() {
    return (
      <>
        <td class="thumb-img">
          <img src={this.props.product.imageURL[0]} alt="product-img"/>
        </td>
        <td class="td-product">
          <div class="product-info">
            <h1>{this.props.product.name}</h1>
            <h3>ID: {this.props.product.id}</h3>
          </div>
        </td>
        <td>
          <div class="td-margin">{this.props.product.category}</div>
        </td>
        <td>
          <div class="td-margin">R$ {this.props.product.price}</div>
        </td>
        <td>
          <div class="td-margin">20</div>
        </td>
      </>
    );
  }
}

export default CatalogProduct;
