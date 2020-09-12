import React from 'react';
import { Link } from 'react-scroll';
import './index.scoped.scss';

const NavLink = ({
  to, label, className = 'link', activeClass = 'active', style,
}) => (
  <Link
    className={className}
    activeClass={activeClass}
    to={to}
    spy
    smooth
    offset={-70}
    duration={400}
    style={style}
  >
    {label}
  </Link>
);

export default NavLink;
