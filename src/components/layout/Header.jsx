import React from 'react';

import { Link } from "react-router-dom";

import { PrimaryNav } from './PrimaryNav';

import logo from "../../images/logo.svg";
import avatar from "../../images/avatar.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-block">
          <Link to="/" className="logo">
            Ticket <span>ON</span>
          </Link>
        </div>

        <nav className={`nav-holder`}>
          <PrimaryNav></PrimaryNav>
        </nav>


        <div className="profile-block">
          <Link to="/profile">
            <img src={avatar} alt="avatar" />
          </Link>
        </div>

      </div>
    </header>
  );
}


