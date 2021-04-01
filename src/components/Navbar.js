import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types";
import Search from "./Search";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
          <div className="container">
            <a href="#" className="navbar-brand">
              <i className={this.props.icon}></i>
              {this.props.title}
            </a>
            <ul className="navbar-nav flex-row">
              <li className="nav-item mr-2">
                <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutus" className="nav-link" activeClassName="active">About Us</NavLink>
              </li>
            </ul>
            <Search searchUsers= {this.props.searchUsers}/>
          </div>
        </nav>
    );
  }
}

Navbar.defaultProps = {
  title: "Navbar default title",
  icon: "Navbar default icon"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
