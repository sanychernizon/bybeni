import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuButton from "./Buttons/MenuButton";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          name: "camisa",
          slug: "camisa",
          icon:
            "https://res.cloudinary.com/bybeni/image/upload/v1562344969/camisa_z39iud.svg"
        },
        {
          name: "camiseta",
          slug: "camiseta",
          icon:
            "https://res.cloudinary.com/bybeni/image/upload/v1562344971/shirt_qt7vo1.svg"
        },
        {
          name: "calça",
          slug: "calca",
          icon:
            "https://res.cloudinary.com/bybeni/image/upload/v1562344970/jeans_salrcc.svg"
        },
        {
          name: "bermuda",
          slug: "bermuda",
          icon:
            "https://res.cloudinary.com/bybeni/image/upload/v1562344971/short_hb6xvl.svg"
        },
        {
          name: "sapato",
          slug: "sapato",
          icon:
            "https://res.cloudinary.com/bybeni/image/upload/v1562344971/shoes_r5wzq7.svg"
        },
        {
          name: "jaqueta",
          slug: "jaqueta",
          icon:
            "https://res.cloudinary.com/bybeni/image/upload/v1562344970/leather-biker-jacket_sxsqpy.svg"
        }
      ]
    };
  }

  handleLogout = () => {
    this.props.logoutUser()
  }

  handleMenuToggle = event => {
    this.props.menuFunc(event);
  };

  render() {
    return (
      <nav
        className={
          this.props.menuIsOpen ? "menu-container menu-on" : "menu-container"
        }
      >
        <div className="user-menu">
          {this.props.userIsLoged ? (
            <div
              className="user-menu-box"
              onClick={event => this.handleMenuToggle(event)}
            >
              <div className="user-login">
                <p>Olá {this.props.user.name} !</p>
              </div>
              <div className="btn-logout" onClick={() => this.handleLogout()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f1f1f1" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg>
              </div>
            </div>
          ) : (
            <Link to="/identify">
              <div
                className="user-menu-box"
                onClick={event => this.handleMenuToggle(event)}
              >
                <div className="user-thumbnail">
                  <img
                    src="https://res.cloudinary.com/bybeni/image/upload/v1562344972/user_zd2wcl.svg"
                    alt="user-icon"
                  />
                </div>
                <div className="user-login">
                  <p>Logar ou criar minha conta.</p>
                </div>
              </div>
            </Link>
          )}
        </div>
        <ul>
          {this.state.categories.map((item, idx) => {
            return (
              <Link key={idx} to={`/moda-masculina/${item.slug}`}>
                <MenuButton
                  key={idx}
                  props={item}
                  menuFunc={this.props.menuFunc}
                />
              </Link>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Menu;
