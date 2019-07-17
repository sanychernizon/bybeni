import React, { Component } from "react";

class Costumers extends Component {
  render() {
    return (
      <div>
        <div class="center-column">
          <h1 class="title is-4">Costumers</h1>
          {/* <div class="search-bar center">
            <input class="input" type="text" placeholder="Search costumer" />
              <div class="select">
                <select>
                  <option>ID</option>
                  <option>Nome</option>
                  <option>E-mail</option>
                </select>
              </div>
            </div> */}
            <table class="table is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th><abbr title="ID">#</abbr></th>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Pedidos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>4</th>
                  <td>Sany Chernizon</td>
                  <td>sanychernizon@gmail.com</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>João Carvalho</td>
                  <td>jocarva@outlook.com</td>
                  <td>0</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Frederico Conti</td>
                  <td>fredericonti@gmail.com</td>
                  <td>1</td>
                </tr>
                <tr>
                  <th>1</th>
                  <td>Amanda Martins dos Santos</td>
                  <td>amandinha99@gmail.com</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        );
      }
    }
    
    export default Costumers;
