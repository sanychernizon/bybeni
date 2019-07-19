import React, { Component } from "react";

class CatalogProduct extends Component {

  handleDeleteProduct = (id) => {
    this.props.deleteFunc(id)
  }

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
          <div class="td-margin">R$ {parseFloat(this.props.product.price).toFixed(2)}</div>
        </td>
      </>
    );
  }
}

export default CatalogProduct;
