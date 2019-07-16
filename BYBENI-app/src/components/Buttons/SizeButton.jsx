import React, { Component } from 'react';

class SizeButton extends Component {

  handleGetProductSize = () => {
    this.props.getProductSize(this.props.size)
  }

    render(){
        return(
          <div onClick={() => this.handleGetProductSize()} className="btn-product-page-size center">
            {this.props.size}
          </div>
        )
    }
}

export default SizeButton;