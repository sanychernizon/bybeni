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
    console.log('GET PRODUCTS')
    let self = this;
    axios
      .get(`https://bybeni-back.herokuapp.com/api/product`)
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
    imageURL,
    isFeatured
  ) => {
    const getProducts = this.getProducts;
    axios
      .put(`https://bybeni-back.herokuapp.com/api/product/${id}`, {
        name: name,
        price: price,
        category: category,
        availableSizes: availableSizes,
        description: description,
        imageURL: imageURL,
        isFeatured: isFeatured
      })
      .then((response) => {
        getProducts();
      })
      .catch(function(error) {
        console.log(error);
      });
    this.closeUpdateModal();
  };

  addProduct = (
    name,
    price,
    category,
    availableSizes,
    description,
    imageURL,
    isFeatured
  ) => {
    const getProducts = this.getProducts;
    const newProduct = {
      name: name,
      price: price,
      category: category,
      availableSizes: availableSizes,
      description: description,
      imageURL: imageURL,
      isFeatured: isFeatured
    };
    axios
      .post("https://bybeni-back.herokuapp.com/api/product", newProduct)
      .then(function(response) {
        console.log('add')
        getProducts();
      })
      .catch(function(error) {
        console.log(error);
      });
    this.closeModal();
  };

  deleteProduct = (id) => {
    const getProducts = this.getProducts;
    axios
      .delete(`https://bybeni-back.herokuapp.com/api/product/${id}`)
      .then((response) => {
        getProducts();
      })
      .catch(function(error) {
        console.log(error);
      });
    this.closeUpdateModal();
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
      <div className="center-column">
        <h1 className="title is-4">Catalog</h1>
        {/* <div className="search-bar center">
          <input className="input" type="text" placeholder="Search product" />
          <div className="select">
            <select>
              <option>Nome</option>
              <option>SKU</option>
            </select>
          </div>
        </div> */}
        <div className="tool-bar">
          <h6 className="subtitle is-6">
            <strong>
              {this.state.products ? this.state.products.length : ""}
            </strong>{" "}
            produtos cadastrados
          </h6>
          <div className="btn-add-product" onClick={() => this.openModal()}>
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
        <table className="table is-hoverable is-narrow">
          <thead>
            <tr>
              <th />
              <th>Produto</th>
              <th>Categoria</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products
              ? this.state.products.map((item, idx) => {
                  return (
                    <tr key={idx} onClick={() => this.showProduct(item)}>
                      <CatalogProduct
                        key={idx}
                        product={item}
                        deleteFunc={this.deleteProduct}
                      />
                    </tr>
                  );
                }).reverse()
              : ""}
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
            deleteFunc={this.deleteProduct}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Catalog;
