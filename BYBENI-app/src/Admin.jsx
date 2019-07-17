import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Admin/NavBar";
import Content from "./components/Admin/Content";

class Admin extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Content />
        </BrowserRouter>
      </div>
    );
  }
}

export default Admin;
