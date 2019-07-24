import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-box">
          <Link to="/admin">
            <img
              src="https://res.cloudinary.com/bybeni/image/upload/v1562344950/llogo-admin-349-77_cif94r.png"
              alt="logo admin bybeni"
            />
          </Link>
          <ul className="main-menu">
            <Link to="/admin/orders">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="square"
                  stroke-linejoin="arcs"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                </svg>
                <div className="menu-item">Orders</div>
              </li>
            </Link>
            <Link to="/admin/costumers">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="square"
                  stroke-linejoin="arcs"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <div className="menu-item">Costumers</div>
              </li>
            </Link>
            <Link to="/admin/catalog">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="1"
                  stroke-linecap="square"
                  stroke-linejoin="arcs"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
                <div className="menu-item">Catalog</div>
              </li>
            </Link>
          </ul>
          <ul className="center side-menu">
            <a href="/">
              <li className="center menu-logout">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="square"
                  stroke-linejoin="arcs"
                >
                  <path d="M16 17l5-5-5-5M19.8 12H9M10 3H4v18h6" />
                </svg>
              </li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
