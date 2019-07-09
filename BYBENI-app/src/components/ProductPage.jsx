import React, { Component } from "react";
import axios from "axios";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product:''
    };
  }

  getProducts = productId => {
    let self = this;
    axios
      .get(`http://localhost:3004/product?id=${productId}`)
      .then(function(response) {
        self.setState({ product: response.data[0] });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getProducts(this.props.props.match.params.productId);
  }

  render() {
    console.log(typeof this.state.product.imageURL);
    console.log(this.state);
    return (
      <div className="product-page">
        <div className="product-page-image">
          <div className="product-thumbs">
            <img src={this.state.product.imageURL ? this.state.product.imageURL[1] : null} alt={this.state.product.name + '-2'}/>
            <img src={this.state.product.imageURL ? this.state.product.imageURL[2] : null} alt={this.state.product.name+ '-3'}/>
            <img src={this.state.product.imageURL ? this.state.product.imageURL[3] : null} alt={this.state.product.name+ '-4'}/>
          </div>
          <div className="product-carousel">
            <img src={this.state.product.imageURL ? this.state.product.imageURL[0] : null} alt={this.state.product.name}/>
          </div>
        </div>
        <div className="product-page-info">
          <h1>{this.state.product.name}</h1>
          <div className="product-page-cost">
            <span>R$ 140,00</span>
            <span>4x R$ 35,00</span>
          </div>
          <div className="product-page-sizes">
            <h5>Tamanho:</h5>
            <div className="product-page-sizes-selector">
              <div className="btn-product-page-size center">PP</div>
              <div className="btn-product-page-size center">P</div>
              <div className="btn-product-page-size center">M</div>
              <div className="btn-product-page-size center">G</div>
              <div className="btn-product-page-size center">GG</div>
            </div>
          </div>
          <div className="add-product-box center">
            <div className="btn-checkout">Adicionar à sacola</div>
          </div>
          <div className="product-page-description">
            <h5>Descrição:</h5>
            <p>
              Com bolso embutido, a bermuda chino básica vem em duas opções de
              cores, viabilizando mais opções de looks para o dia-a-dia. Com
              bolso embutido, a bermuda chino básica vem em duas opções de
              cores, viabilizando mais opções de looks para o dia-a-dia.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
