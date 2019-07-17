import React, { Component } from "react";

class ModalAddProduct extends Component {
  render() {
    return (
      <div id="modal-add-product">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title"></p>
              <button id="btn-close-modal" class="delete" aria-label="close" />
            </header>
            <section class="modal-card-body">
              <div class="field">
                <label class="label">Nome do Produto</label>
                <div class="control">
                  <input class="input" type="text" placeholder="ex. Camiseta Branca Básica" />
                </div>
              </div>
              <div class="field">
                <label class="label">SKU</label>
                <div class="control">
                  <input class="input" type="text" placeholder="ex. CAM1874-221" />
                </div>
              </div>
              <label class="label">Preço</label>
              <div class="field has-addons">
                <p class="control">
                  <a class="button is-static">
                    R$
                  </a>
                </p>
                <p class="control">
                  <input class="input" type="number" placeholder="ex. 125.20" />
                </p>
              </div>
              <div class="field">
                <label class="label">Categoria</label>
                <div class="control">
                  <div class="select">
                    <select>
                      <option>Selecionar categoria</option>
                      <option>Camisa</option>
                      <option>Sapato</option>
                      <option>Jaqueta</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="field">
                <label class="label">Descrição do Produto</label>
                <div class="control">
                  <textarea class="textarea" placeholder="Escreva a descrição aqui..."></textarea>
                </div>
              </div>
              <div class="file has-name">
                <label class="file-label">
                  <input class="file-input" type="file" name="resume" />
                  <span class="file-cta">
                    <span class="file-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="#3b3b3b" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs">
                        <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3" /></svg>
                    </span>
                    <span class="file-label">
                      Escolher imagens…
                    </span>
                  </span>
                  <span class="file-name">
                    Screen Shot 2017-07-29 at 15.54.25.png
                  </span>
                </label>
              </div>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success is-fullwidth">Salvar produto</button>
            </footer>
          </div>
        </div>
    );
  }
}

export default ModalAddProduct;
