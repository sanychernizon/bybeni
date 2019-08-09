import React, { Component } from "react";
import api from "../../services/api"

class Dashboard extends Component {

  constructor(props){
    super(props)
    this.state = {
      paidOrders: 0,
      refusedOrders: 0,
      costumers: 0,
      products: 0
    }
  }

  getOrdersPaid = () => {
    let self = this;
    api
      .get("/api/order/paid")
      .then(response => {
        let paidOrders = response.data.length
        self.setState({ paidOrders: paidOrders });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getOrdersRefused = () => {
    let self = this;
    api
      .get("/api/order/refused")
      .then(response => {
        let refusedOrders = response.data.length
        self.setState({ refusedOrders: refusedOrders });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getCostumers = () => {
    let self = this;
    api
      .get("/api/user")
      .then(response => {
        self.setState({ costumers: response.data.length });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getProducts = () => {
    let self = this;
    api
      .get(`/api/product`)
      .then(function(response) {
          self.setState({ products: response.data.length });          
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount(){
    this.getOrdersPaid()
    this.getOrdersRefused()
    this.getCostumers()
    this.getProducts()
  }

  render() {
    return (
      <div>
        <div className="center">
          <h1 className="title is-4">Dashboard</h1>
        </div>
        <div className="dashboard">
          <div className="dashboard-box message is-success">
            <div className="center-column message-body">
              <strong>{this.state.paidOrders ? this.state.paidOrders : ''}</strong>
              <div>Pedidos Aprovados</div>
            </div>
          </div>
          <div className="dashboard-box message is-danger">
            <div className="center-column message-body">
              <strong>{this.state.refusedOrders ? this.state.refusedOrders : ''}</strong>
              <div>Pedidos Cancelados</div>
            </div>
          </div>
          <div className="dashboard-box message">
            <div className="center-column message-body">
              <strong>{this.state.costumers ? this.state.costumers : ''}</strong>
              <div>Clientes Cadastrados</div>
            </div>
          </div>
          <div className="dashboard-box message">
            <div className="center-column message-body">
              <strong>{this.state.products ? this.state.products : ''}</strong>
              <div>Produtos Cadastrados</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
