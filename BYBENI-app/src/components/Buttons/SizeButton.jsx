import React, { Component } from 'react';

class SizeButton extends Component {
    render(){
        return(
          <label className="btn-product-page-size center">
            {this.props.size}
            <input type="radio" name="size" value={this.props.size} />
            <span class="checkmark"></span>
          </label>
        )
    }
}

export default SizeButton;