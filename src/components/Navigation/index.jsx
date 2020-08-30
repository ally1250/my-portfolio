import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Navigation, NavLink } from '../common';
import data from '../../Data';
import './index.scoped.scss';

export const NameLink = () => (
  <div className="name">
    <NavLink
      to="landing"
      label={data.name}
      className="name-link"
      activeClass="name-active"
    />
  </div>
);

class index extends Component {
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
      <div className="nav-container">
        <NameLink />
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

export default index;
