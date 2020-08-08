import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Nav, NavItem } from 'react-bootstrap';
import data from '../../Data';
// import './index.css';
import './index.scss';

export const NavLink = ({
  to, label, className = 'link', activeClass = 'active',
}) => (
  <NavItem>
    <Link
      className={className}
      activeClass={activeClass}
      to={to}
      spy
      smooth
      offset={-70}
      duration={500}
    >
      {label}
    </Link>
  </NavItem>
);

const Navigation = () => (
  <div className="container">
    <Nav className="name">
      <NavLink
        to="landing"
        label={data.name}
        className="name-link"
        activeClass="name-active"
      />
    </Nav>
    <Nav className="nav">
      <NavLink
        to="about"
        label="ABOUT"
      />
      <NavLink
        to="projects"
        label="PROJECTS"
      />
      <NavLink
        to="resume"
        label="RESUME"
      />
      <NavLink
        to="contact"
        label="CONTACT"
      />
    </Nav>
  </div>
);

export default Navigation;
