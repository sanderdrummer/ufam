import React from 'react';
import { Link } from 'gatsby';
import './navbar.css';

export const NavBar = () => (
  <nav className="main-nav">
    <Link activeClassName="active" to="/">
      Band
    </Link>
    <Link activeClassName="active" to="gigs">
      Gigs
    </Link>
    <Link activeClassName="active" to="music">
      Music
    </Link>
  </nav>
);

NavBar.displayName = 'NavBar';
