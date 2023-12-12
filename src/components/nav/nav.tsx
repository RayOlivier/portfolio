import React from 'react';
// import { Link } from 'react-router-dom';
// import { HashLink, NavHashLink } from 'react-router-hash-link';
import Logo from '../logo/logo';
import './nav.scss';

type NavProps = {
  children?: React.ReactNode;
};

const Nav: React.FC<NavProps> = () => {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <Logo></Logo>
        Ray Olivier
      </div>
      <div className="navbar__links">
        {/* <NavHashLink className="navbar__link" smooth to="/#about">
          About
        </NavHashLink>
        <NavHashLink
          className="navbar__link"
          smooth
          to="/#work"
          // activeClass="selected"
          // activeStyle={{ color: 'red' }}
          // etc...
        >
          Work
        </NavHashLink> */}
      </div>
    </header>
  );
};

export default Nav;
