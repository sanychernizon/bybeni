import React, { Component } from "react";

class Overlay extends Component {
  overlayIsOn() {
    return this.props.cartIsOpen ? "overlay" : "";
  }

  handleCartToggle = (event) => {
    this.props.cartFunc(event)
  }

  render() {
    return <div className={this.overlayIsOn()} onClick={(event) => this.handleCartToggle(event)}/>;
  }
}

export default Overlay;
