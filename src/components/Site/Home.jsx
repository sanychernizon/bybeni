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
      .get(`http://localhost:3004/api/product?isFeatured=true`)
      .then(function(response) {
        self.setState({ products: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentWillMount() {
    this.getProducts();
  }

  render() {
    return (
      <section className="content-container">
        <div className="catalog-grid">
          {this.state.products.map((item, idx) => {
            return <ProductBox key={idx} product={item} />;
          })}
        </div>
      </section>
    );
  }
}

export default Home;
