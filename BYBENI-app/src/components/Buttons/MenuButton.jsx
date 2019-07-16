import React, { Component } from 'react';

class MenuButton extends Component {

  handleMenuToggle = (event) => {
    this.props.menuFunc(event)
  }

    render(){
        return(
            <li>
                <div className="btn-menu" onClick={(event) => this.handleMenuToggle(event)}>
                    <div className="btn-menu-content">
                        <div className="btn-menu-icon"><img src={this.props.props.icon} alt={this.props.props.name}/></div>
                        <div className="btn-menu-title">{this.props.props.name}</div>
                    </div>
                    <div className="btn-menu-arrow"><img src="https://res.cloudinary.com/bybeni/image/upload/v1562344969/arrow_sqgto1.svg" alt="arrow-icon" /></div>
                </div>
            </li>
        )
    }
}

export default MenuButton;