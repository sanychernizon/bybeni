import React, { Component } from "react";

class CheckboxSize extends Component {
  
  handleAvailableSizes = (event) => {
    this.props.handleAvailableSizes(event)
  }

  render() {
    return (
      <label class="radio">
        <input
          class="checkbox"
          type="checkbox"
          name={this.props.size}
          value={this.props.size}
          checked={this.props.availableSizes.includes(this.props.size) ? true : false}
          onChange={e => this.handleAvailableSizes(e)}
        />
        {this.props.size}
    </label>
    );
  }
}

export default CheckboxSize;