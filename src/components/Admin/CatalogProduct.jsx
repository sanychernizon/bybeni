import React, { Component } from "react";

class CatalogProduct extends Component {

  render() {
    return (
      <>
        <td className="thumb-img">
          <img src={this.props.product.imageURL ? this.props.product.imageURL[0] : null} alt="product-img"/>
        </td>
        <td className="td-product">
          <div className="product-info">
            <h1>{this.props.product.name}</h1>
            <h3>ID: {this.props.product._id}</h3>
          </div>
        </td>
        <td>
          <div className="td-margin">{this.props.product.category}</div>
        </td>
        <td>
          <div className="td-margin">R$ {parseFloat(this.props.product.price).toFixed(2)}</div>
        </td>
      </>
    );
  }
}

export default CatalogProduct;
