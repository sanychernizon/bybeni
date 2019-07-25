import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="center">
          <h1 className="title is-4">Dashboard</h1>
        </div>
        <div className="dashboard">
          <div className="dashboard-box message is-success">
            <div className="center-column message-body">
              <strong>30</strong>
              <div>Pedidos Aprovados</div>
            </div>
          </div>
          <div className="dashboard-box message is-danger">
            <div className="center-column message-body">
              <strong>4</strong>
              <div>Pedidos Cancelados</div>
            </div>
          </div>
          <div className="dashboard-box message">
            <div className="center-column message-body">
              <strong>25</strong>
              <div>Clientes Cadastrados</div>
            </div>
          </div>
          <div className="dashboard-box message">
            <div className="center-column message-body">
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
