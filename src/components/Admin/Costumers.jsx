import React, { Component } from "react";
import axios from "axios";
import CostumerRow from "./CostumerRow";

class Costumers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      costumers: ""
    };
  }

  getCostumers = () => {
    let self = this;
    axios
      .get("http://localhost:3004/api/user")
      .then(response => {
        self.setState({ costumers: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getCostumers();
  }

  render() {
    return (
      <div>
        <div className="center-column">
          <h1 className="title is-4">Costumers</h1>
          {/* <div className="search-bar center">
            <input className="input" type="text" placeholder="Search costumer" />
              <div className="select">
                <select>
                  <option>ID</option>
                  <option>Nome</option>
                  <option>E-mail</option>
                </select>
              </div>
            </div> */}
          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>
                  <abbr title="ID">#</abbr>
                </th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Pedidos</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.costumers
                ? this.state.costumers.map((item, idx) => {
                    return <CostumerRow key={idx} idx={idx} costumer={item} />;
                  })
                : ""
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Costumers;
