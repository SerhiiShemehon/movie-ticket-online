import React from 'react';

import { Link } from "react-router-dom";

import { PrimaryNav } from './PrimaryNav';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-block">
          <Link to="/" className="logo">
            Ticket <span>ON</span>
          </Link>
        </div>
        <nav className="nav-holder">
          <PrimaryNav />
        </nav>
      </div>
    </header>
  );
}


