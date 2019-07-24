import React, { Component } from "react";
import axios from "axios";
import SizeButton from "./Buttons/SizeButton";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      productSelected: null,
      sizeAlert: false,
      selectedSizeBtn: null
    };
  }

  getProducts = productId => {
    let self = this;
    axios
      .get(`http://localhost:3004/api/product?id=${productId}`)
      .then(function(response) {
        self.setState({ product: response.data[0] });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getProductSize = (size, idx) => {
    let copyProduct = this.state.product;
    copyProduct.selectedSize = size;
    copyProduct.id = copyProduct + size;
    this.setState({ productSelected: copyProduct });
    this.setState({ sizeAlert: false });
    this.setState({ selectedSizeBtn: idx });
    console.log(this.state.selectedSizeBtn)
  };

  handleAddToCart = () => {
    if (this.state.productSelected === null) {
      this.setState({ sizeAlert: true });
    } else {
      this.props.addToCart(this.state.productSelected);
    }
  };

  componentDidMount() {
    this.getProducts(this.props.props.match.params.productId);
  }

  render() {
    return (
      <section className="content-container">
        <div className="product-page">
          <div className="product-page-image">
            <div className="product-thumbs">
              <img
                src={
                  this.state.product.imageURL
                    ? this.state.product.imageURL[1]
                    : null
                }
                alt={this.state.product.name + "-2"}
              />
              <img
                src={
                  this.state.product.imageURL
                    ? this.state.product.imageURL[2]
                    : null
                }
                alt={this.state.product.name + "-3"}
              />
              <img
                src={
                  this.state.product.imageURL
                    ? this.state.product.imageURL[3]
                    : null
                }
                alt={this.state.product.name + "-4"}
              />
            </div>
            <div className="product-carousel">
              <img
                src={
                  this.state.product.imageURL
                    ? this.state.product.imageURL[0]
                    : null
                }
                alt={this.state.product.name}
              />
            </div>
          </div>
          <div className="product-page-info">
            <h1>{this.state.product.name}</h1>
            <div className="product-page-cost">
              <span>
                {this.state.product.price
                  ? parseInt(this.state.product.price).toFixed(2)
                  : null}
              </span>
              <span>5x R${(parseInt(this.state.product.price) / 5).toFixed(2)}</span>
            </div>
            <div className="product-page-sizes">
              <h5>Tamanho:</h5>
              <div className="form-product-page">
                <div className="product-page-sizes-selector">
                  {this.state.product.availableSizes
                    ? this.state.product.availableSizes.map((item, idx) => {
                        return (
                          <SizeButton
                            key={idx}
                            idx={idx}
                            size={item}
                            getProductSize={this.getProductSize}
                            selectedSizeBtn={this.state.selectedSizeBtn}
                          />
                        );
                      })
                    : null}
                </div>
                {this.state.sizeAlert ? "Por favor, selecione um tamanho" : ""}
                <div className="add-product-box center">
                  <div
                    onClick={() => this.handleAddToCart()}
                    className="btn-checkout"
                  >
                    Adicionar à sacola
                  </div>
                </div>
              </div>
            </div>
            <div className="product-page-description">
              <h5>Descrição:</h5>
              <p>{this.state.product.description}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductPage;
