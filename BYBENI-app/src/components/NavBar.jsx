import React, { Component } from 'react';

class NavBar extends Component {

    handleMenuToggle = (event) => {
        this.props.menuBtnFunc(event)
    }

    render(){
        return(
            <div className="nav-bar">
                <div className="btn-nav center" onClick={(event) => this.handleMenuToggle(event)}>
                    <div className={ this.props.isOpen ? 'hamburger is-active' : 'hamburger'} id="hamburger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
                <div className="btn-nav-home">
                    <img className="img-logo" src="https://res.cloudinary.com/bybeni/image/upload/v1562344950/logo_h0kavt.png" alt="bybeni-logo"/>
                </div>
                <div className="btn-nav center" onClick={null}>
                    <div className="btn-shopping-bag">
                        <div className="cart-reddot center">1</div>
                        <img className="shoppingbag" src="https://res.cloudinary.com/bybeni/image/upload/v1562344971/shoppingbag_estdjb.svg" alt="shoppingbag" />
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;