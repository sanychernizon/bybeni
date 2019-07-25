import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductBox extends Component {
  render() {
    return (
      <div className="product-box">
        <Link to={`/p/${this.props.product._id}`}>
          <div className="product-box-info">
            <div className="product-box-image">
              <img src={this.props.product.imageURL[0]} alt={this.props.product.name}/>
            </div>
            <h4>{this.props.product.name}</h4>
            <div className="product-box-pricing">
              <div className="product-box-cost">
                <span>{parseInt(this.props.product.price).toFixed(2)}</span>
                <span>5x R${(parseInt(this.props.product.price) / 5).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductBox;
