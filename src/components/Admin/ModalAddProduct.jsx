import React, { Component } from "react";
import axios from "axios";

class ModalAddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null,
      price: null,
      category: null,
      availableSizes: [],
      description: null,
      imageURL: null,
      isFeatured: false,
      file: null
    };
  }

  handleCloseModal = () => {
    this.props.closeModal();
  };

  handleAddProduct = () => {
    this.props.addProduct(
      this.state.name,
      this.state.price,
      this.state.category,
      this.state.availableSizes,
      this.state.description,
      this.state.imageURL,
      this.state.isFeatured
    );
  };

  handleName = event => {
    this.setState({ name: event.target.value });
  };

  handlePrice = event => {
    this.setState({ price: event.target.value });
  };

  handleCategory = event => {
    this.setState({ category: event.target.value });
  };

  handleAvailableSizes = event => {
    if (event.target.checked) {
      let copyAvailableSizes = this.state.availableSizes;
      copyAvailableSizes.push(event.target.value);
      this.setState({ availableSizes: copyAvailableSizes });
    } else {
      let copyAvailableSizes = this.state.availableSizes;
      var idx = copyAvailableSizes.indexOf(event.target.value);
      copyAvailableSizes.splice(idx, 1);
      this.setState({ availableSizes: copyAvailableSizes });
    }
  };

  handleDescription = event => {
    this.setState({ description: event.target.value });
  };

  handleImageUrl = event => {
    const formData = new FormData();
    formData.append("photo", this.state.file);

    let self = this;
    axios({
      method: "post",
      url: "https://bybeni-back.herokuapp.com/api/product/upload",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(function(response) {
        self.setState({ imageURL: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleFile = e => {
    console.log(e.target.files[0])
    this.setState({ file: e.target.files[0] });
  };

  handleIsFeatured = event => {
    if (event.target.checked) {
      this.setState({ isFeatured: true });
    } else {
      this.setState({ isFeatured: false });
    }
  };

  render() {
    return (
      <div id="modal-add-product">
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title" />
            <button
              id="btn-close-modal"
              className="delete"
              aria-label="close"
              onClick={() => this.handleCloseModal()}
            />
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Nome do Produto</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="ex. Camiseta Branca Básica"
                  onChange={e => this.handleName(e)}
                />
              </div>
            </div>
            <label className="label">Preço</label>
            <div className="field has-addons">
              <p className="control">
                <a className="button is-static">R$</a>
              </p>
              <p className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="ex. 125.20"
                  onChange={e => this.handlePrice(e)}
                />
              </p>
            </div>
            <div className="field">
              <label className="label">Tamanhos Disponíveis</label>
              <div className="control">
                <label className="radio">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="PP"
                    value="PP"
                    onChange={e => this.handleAvailableSizes(e)}
                  />
                  PP
                </label>
                <label className="radio">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="P"
                    value="P"
                    onChange={e => this.handleAvailableSizes(e)}
                  />
                  P
                </label>
                <label className="radio">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="M"
                    value="M"
                    onChange={e => this.handleAvailableSizes(e)}
                  />
                  M
                </label>
                <label className="radio">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="G"
                    value="G"
                    onChange={e => this.handleAvailableSizes(e)}
                  />
                  G
                </label>
                <label className="radio">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="GG"
                    value="GG"
                    onChange={e => this.handleAvailableSizes(e)}
                  />
                  GG
                </label>
              </div>
            </div>
            <div className="field">
              <label className="label">Categoria</label>
              <div className="control">
                <div className="select">
                  <select onChange={e => this.handleCategory(e)}>
                    <option>Selecionar categoria</option>
                    <option value="camisa">Camisa</option>
                    <option value="camiseta">Camiseta</option>
                    <option value="calca">Calça</option>
                    <option value="bermuda">Bermuda</option>
                    <option value="sapato">Sapato</option>
                    <option value="jaqueta">Jaqueta</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="radio">
                  <input
                    className="checkbox"
                    type="checkbox"
                    name="isFeatured"
                    value="true"
                    onChange={e => this.handleIsFeatured(e)}
                  />
                  Produto em destaque?
                </label>
              </div>
            </div>
            <div className="field">
              <label className="label">Descrição do Produto</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Escreva a descrição aqui..."
                  onChange={e => this.handleDescription(e)}
                />
              </div>
            </div>
            <img className='thumb-img' src={this.state.imageURL} alt='img'/>
            <div className="file has-name">
              <label className="file-label">
                <div className="file-cta">
                  <input
                    className="file-label"
                    type="file"
                    name="photos"
                    onChange={e => this.handleFile(e)}
                  />
                </div>
                <input
                  className="button"
                  type="submit"
                  value="Salvar"
                  onClick={e => this.handleImageUrl(e)}
                />
              </label>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success is-fullwidth"
              onClick={() => this.handleAddProduct()}
            >
              Salvar produto
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default ModalAddProduct;
