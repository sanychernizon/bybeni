import React, { Component } from "react";
import api from "../../services/api"

import OrderRow from './OrderRow';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: ''
    };
  }

  getOrders = () => {
    let self = this
    api
      .get("/api/order")
      .then(response => {
        self.setState({ orders: response.data});
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount(){
    this.getOrders()
  }

  render() {
    return (
      <div className="center-column">
        <h1 className="title is-4">Orders</h1>
        {/* <div className="search-bar center">
          <input className="input" type="text" placeholder="Search order" />
          <div className="select">
            <select>
              <option>ID</option>
              <option>Status</option>
              <option>Cliente</option>
            </select>
          </div>
        </div> */}
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>
                <abbr title="ID">#</abbr>
              </th>
              <th>Status</th>
              <th>Data</th>
              <th>Cliente</th>
              <th>Pagamento</th>
              <th>Parcelas</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.orders ?
                this.state.orders.map((item, idx) => {
                  return <OrderRow key={idx} idx={idx} order={item} />
                }).reverse()
                :
                ''
              }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Orders;
