import React, { Component } from 'react';

class SizeButton extends Component {

  handleGetProductSize = () => {
    this.props.getProductSize(this.props.size, this.props.idx)
  }

    render(){
        return(
          <div onClick={() => this.handleGetProductSize()} className={this.props.selectedSizeBtn === this.props.idx ? "btn-product-page-size isActive center" : "btn-product-page-size center"}>
            {this.props.size}
          </div>
        )
    }
}

export default SizeButton;