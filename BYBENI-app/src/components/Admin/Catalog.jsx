import React, { Component } from "react";
import ModalAddProduct from './ModalAddProduct';

class Catalog extends Component {
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
          <h6 class="subtitle is-6">114 produtos cadastrados</h6>
          <div class="btn-add-product">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#ffffff"
              stroke="#209cee" stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <p>Adicionar Produto</p>
          </div>
          <ModalAddProduct />
        </div>
        <table class="table is-hoverable is-narrow is-fluid">
          <thead>
            <tr>
              <th></th>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Estoque</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="thumb-img">
                <img src="./img/camisa.PNG" />
              </td>
              <td class="td-product">
                <div class="product-info">
                  <h1>Camisa de Seda Contreau</h1>
                  <h3>SKU: CAM1432-020</h3>
                </div>
              </td>
              <td>
                <div class="td-margin">Camisa</div>
              </td>
              <td>
                <div class="td-margin">R$ 159,00</div>
              </td>
              <td>
                <div class="td-margin">20</div>
              </td>
            </tr>
            <tr>
              <td class="thumb-img">
                <img src="./img/camisa.PNG" />
              </td>
              <td class="td-product">
                <div class="product-info">
                  <h1>Camisa de Seda Contreau</h1>
                  <h3>SKU: CAM1432-020</h3>
                </div>
              </td>
              <td>
                <div class="td-margin">Camisa</div>
              </td>
              <td>
                <div class="td-margin">R$ 159,00</div>
              </td>
              <td>
                <div class="td-margin">20</div>
              </td>
            </tr>
            <tr>
              <td class="thumb-img">
                <img src="./img/camisa.PNG" />
              </td>
              <td class="td-product">
                <div class="product-info">
                  <h1>Camisa de Seda Contreau</h1>
                  <h3>SKU: CAM1432-020</h3>
                </div>
              </td>
              <td>
                <div class="td-margin">Camisa</div>
              </td>
              <td>
                <div class="td-margin">R$ 159,00</div>
              </td>
              <td>
                <div class="td-margin">20</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Catalog;
