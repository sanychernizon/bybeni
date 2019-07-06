import React, { Component } from "react";
import axios from "axios";
import ProductBox from "./ProductBox";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  getProducts = () => {
    let self = this;
    axios
      .get(`http://localhost:3004/product?isFeatured=true`)
      .then(function(response) {
        self.setState({products: response.data})
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentWillMount() {
    this.getProducts()
  }

  render() {
    console.log(this.state.products);
    return (
      <div className="catalog-grid">
        {this.state.products.map((item) => {
          return <ProductBox product={item} />
        })}
      </div>
    );
  }
}

export default Home;
