import React, { Component } from 'react';

class NavBar extends Component {
    render(){
        return(
            <div className="nav-bar">
                <div className="btn-nav center" onclick="toggleNav()">
                    <div className="hamburger" id="hamburger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
                <div className="btn-nav-home">
                    <a className="img-logo" href="app.html"><img className="img-logo" src="img/logo.png" alt="bybeni-logo"/></a>
                </div>
                <div className="btn-nav center" onclick="openCart()">
                    <div className="btn-shopping-bag">
                        <div className="cart-reddot center">1</div>
                        <img className="shoppingbag" src="img/svg/shoppingbag.svg" alt="shoppingbag" />
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;