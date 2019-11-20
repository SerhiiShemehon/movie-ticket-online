import React from 'react';

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { PrimaryNav } from './PrimaryNav';

import logo from "../images/logo.svg";
import avatar from "../images/avatar.png";

export class Header extends React.Component {
  state = {
    buttonClass: 'no-active',
    menuClass: 'hide-menu'
  };

  toggleMenu = () => {
    this.setState({
      buttonClass: this.state.buttonClass === 'no-active' ? 'is-active' : 'no-active',
      menuClass: this.state.menuClass === 'hide-menu' ? 'show-menu' : 'hide-menu'
    });
  }

  render() {
    const { buttonClass, menuClass } = this.state;
    return (
      <header className="header">
        <div className="container">
          <div className="logo-block">
            <Link to="/" className="logo">
              <img src={logo} alt="ticket logo" />
            </Link>
          </div>

          <div className="nav-block">

            <div className="profile-block">
              <Link to="/profile">
                <img src={avatar} alt="avatar" />
              </Link>
            </div>

            <button className={`hamburger hamburger--spin ${buttonClass}`} onClick={this.toggleMenu}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </button>

            <nav className={`nav-holder ${menuClass}`}>
              <PrimaryNav></PrimaryNav>
            </nav>

          </div>
        </div>
      </header>
    );
  };
}


