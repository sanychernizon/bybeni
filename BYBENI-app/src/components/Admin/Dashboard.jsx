import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div class="center">
          <h1 class="title is-4">Dashboard</h1>
        </div>
        <div class="dashboard">
          <div class="dashboard-box message is-success">
            <div class="center-column message-body">
              <strong>30</strong>
              <div>Pedidos Aprovados</div>
            </div>
          </div>
          <div class="dashboard-box message is-danger">
            <div class="center-column message-body">
              <strong>4</strong>
              <div>Pedidos Cancelados</div>
            </div>
          </div>
          <div class="dashboard-box message">
            <div class="center-column message-body">
              <strong>25</strong>
              <div>Clientes Cadastrados</div>
            </div>
          </div>
          <div class="dashboard-box message">
            <div class="center-column message-body">
              <strong>150</strong>
              <div>Produtos Cadastrados</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
