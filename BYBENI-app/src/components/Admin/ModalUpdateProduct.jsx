import React, { Component } from "react";

class ModalUpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.product.id,
      name: this.props.product.name,
      price: this.props.product.price,
      category: this.props.product.category,
      availableSizes: this.props.product.availableSizes,
      description: this.props.product.description,
      imageURL: [],
      isFeatured: this.props.product.isFeatured
    };
  }

  handleCloseModal = () => {
    this.props.closeModal();
  };

  handleUpdateProduct = () => {
    this.props.updateProduct(
      this.state.id,
      this.state.name,
      this.state.price,
      this.state.category,
      this.state.availableSizes,
      this.state.description,
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
        <div class="modal-background" />
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title" />
            <button
              id="btn-close-modal"
              class="delete"
              aria-label="close"
              onClick={() => this.handleCloseModal()}
            />
          </header>
          <section class="modal-card-body">
            <div class="field">
              <label class="label">Nome do Produto</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="ex. Camiseta Branca Básica"
                  value={this.state.name}
                  onChange={e => this.handleName(e)}
                />
              </div>
            </div>
            <label class="label">Preço</label>
            <div class="field has-addons">
              <p class="control">
                <span class="button is-static">R$</span>
              </p>
              <p class="control">
                <input
                  class="input"
                  type="number"
                  placeholder="ex. 125.20"
                  value={this.state.price}
                  onChange={e => this.handlePrice(e)}
                />
              </p>
            </div>
            <div class="field">
              <label class="label">Tamanhos Disponíveis</label>
              <div class="control">
                <label class="radio">
                  <input
                    class="checkbox"
                    type="checkbox"
                    name="PP"
                    value="PP"
                    onChange={e => this.handleAvailableSizes(e)}
                  />
                  PP
                </label>
                <label class="radio">
                  <input
                    class="checkbox"
                    type="checkbox"
                    name="P"
                    value="P"
                    onChange={e => this.handleAvailableSizes(e)}
                  />
                  P
                </label>
                <label class="radio">
                  <input
                    class="checkbox"
                    type="checkbox"
                    name="M"
                    value="M"
                    onChange={e => this.handleAvailableSizes(e)}
                  />
                  M
                </label>
                <label class="radio">
                  <input
                    class="checkbox"
                    type="checkbox"
                    name="G"
                    value="G"
                    onChange={e => this.handleAvailableSizes(e)}
                  />
                  G
                </label>
                <label class="radio">
                  <input
                    class="checkbox"
                    type="checkbox"
                    name="GG"
                    value="GG"
                    // { ...this.state.availableSizes["M"] ?  'checked' : null }
                    onChange={e => this.handleAvailableSizes(e)}
                  />
                  GG
                </label>
              </div>
            </div>
            <div class="field">
              <label class="label">Categoria</label>
              <div class="control">
                <div class="select">
                  <select onChange={e => this.handleCategory(e)} value={this.state.category}>
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
            <div class="field">
              <div class="control">
                <label class="radio">
                  <input
                    class="checkbox"
                    type="checkbox"
                    name="isFeatured"
                    // value={this.state.isFeatured}
                    onChange={e => this.handleIsFeatured(e)}
                  />
                  Produto em destaque?
                </label>
              </div>
            </div>
            <div class="field">
              <label class="label">Descrição do Produto</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Escreva a descrição aqui..."
                  value={this.state.description}
                  onChange={e => this.handleDescription(e)}
                />
              </div>
            </div>
            <div class="file has-name">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" />
                <span class="file-cta">
                  <span class="file-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3b3b3b"
                      stroke-width="2"
                      stroke-linecap="square"
                      stroke-linejoin="arcs"
                    >
                      <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3" />
                    </svg>
                  </span>
                  <span class="file-label">Escolher imagens…</span>
                </span>
                <span class="file-name">
                  Screen Shot 2017-07-29 at 15.54.25.png
                </span>
              </label>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success is-fullwidth" onClick={() => this.handleAddProduct()}>
              Salvar produto
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default ModalUpdateProduct;
