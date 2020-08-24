import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import classnames from 'classnames';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import data from '../../Data';
// import './index.css';
import './index.scss';

export const NavLink = ({
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

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    const { visible } = this.state;

    return (
      <div
        className="nav-container"
      >
        <div className="name" onClick={this.logS}>
          <NavLink
            to="landing"
            label={data.name}
            className="name-link"
            activeClass="name-active"
          />
        </div>
        <div className="nav">
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
        </div>
      </div>
    );
  }
}

export default Navigation;
