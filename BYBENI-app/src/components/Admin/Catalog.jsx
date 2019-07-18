import React, { Component } from "react";
import axios from "axios";
import ModalAddProduct from "./ModalAddProduct";
import ModalUpdateProduct from "./ModalUpdateProduct";
import CatalogProduct from "./CatalogProduct";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: "",
      modalIsOpen: false,
      modalUpdateIsOpen: false,
      updateProduct: ""
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    let self = this;
    axios
      .get(`http://localhost:3004/product`)
      .then(function(response) {
        self.setState({ products: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  updateProduct = (
    id,
    name,
    price,
    category,
    availableSizes,
    description,
    isFeatured
  ) => {
    this.getProducts();
    axios
      .put(`http://localhost:3004/product/${id}`, {
        name: name,
        price: price,
        category: category,
        availableSizes: availableSizes,
        description: description,
        imageURL: [
          "https://res.cloudinary.com/bybeni/image/upload/v1562284335/bermuda-preta_a4xt67.jpg"
        ],
        isFeatured: isFeatured
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.closeUpdateModal();
    this.getProducts();
  };

  addProduct = (
    name,
    price,
    category,
    availableSizes,
    description,
    isFeatured
  ) => {
    this.getProducts();
    axios
      .post("http://localhost:3004/product", {
        id: this.state.products.length + 1,
        name: name,
        price: price,
        category: category,
        availableSizes: availableSizes,
        description: description,
        imageURL: [
          "https://res.cloudinary.com/bybeni/image/upload/v1562284335/bermuda-preta_a4xt67.jpg"
        ],
        isFeatured: isFeatured
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    this.closeModal();
    this.getProducts();
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  showProduct = item => {
    this.setState({
      modalUpdateIsOpen: true,
      updateProduct: item
    });
  };

  closeUpdateModal = () => {
    this.setState({ modalUpdateIsOpen: false });
  };

  render() {
    return (
      <div class="center-column">
        <h1 class="title is-4">Catalog</h1>
        {/* <div class="search-bar center">
          <input class="input" type="text" placeholder="Search product" />
          <div class="select">
            <select>
              <option>Nome</option>
              <option>SKU</option>
            </select>
          </div>
        </div> */}
        <div class="tool-bar">
          <h6 class="subtitle is-6">
            <strong>
              {this.state.products ? this.state.products.length : ""}
            </strong>{" "}
            produtos cadastrados
          </h6>
          <div class="btn-add-product" onClick={() => this.openModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="#ffffff"
              stroke="#209cee"
              stroke-width="1"
              stroke-linecap="square"
              stroke-linejoin="arcs"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="16" />
              <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            <p>Adicionar Produto</p>
          </div>
        </div>
        <table class="table is-hoverable is-narrow">
          <thead>
            <tr>
              <th />
              <th>Produto</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Estoque</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products
              ? this.state.products.map((item, idx) => {
                  return (
                    <tr key={idx} onClick={() => this.showProduct(item)}>
                      <CatalogProduct key={idx} product={item} />
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
        {this.state.modalIsOpen ? (
          <ModalAddProduct
            closeModal={this.closeModal}
            addProduct={this.addProduct}
          />
        ) : (
          ""
        )}
        {this.state.modalUpdateIsOpen ? (
          <ModalUpdateProduct
            closeModal={this.closeUpdateModal}
            product={this.state.updateProduct}
            updateProduct={this.updateProduct}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Catalog;
