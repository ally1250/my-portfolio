import React from 'react';
import { Link } from 'react-scroll';
import './index.scoped.scss';

const NavLink = ({
  to, label, className = 'link', activeClass = 'active',
}) => (
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
);

export default NavLink;
