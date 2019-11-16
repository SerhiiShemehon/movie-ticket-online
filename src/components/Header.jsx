import React from 'react';

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { toggleMenu } from "../actions";

import logo from "../images/logo.svg";
import avatar from "../images/avatar.png";

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-block">
          <Link to="/" className="logo">
            <img src={logo} alt="ticket logo"/>
          </Link>
        </div>

        <div className="nav-block">

          <div className="profile-block">
            <Link to="/profile">
              <img src={avatar} alt="avatar"/>
            </Link>
          </div>

          <button className={`hamburger hamburger--spin ${props.buttonClass}`} onClick={props.toggleMenu}>
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </button>

          <nav className={`nav-holder ${props.menuClass}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  buttonClass: state.toggleMenuReducer.buttonClass,
  menuClass: state.toggleMenuReducer.menuClass
})

const mapDispatchToProps = {
  toggleMenu
};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

