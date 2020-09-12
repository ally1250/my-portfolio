import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import NavLink from './NavLink';
import './index.scoped.scss';

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

  toHome = () => {
    const { history } = this.props;
    history.push('/');
    window.scrollTo(0, 0);
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
    const { navigations = [], linkStyle, style } = this.props;
    return (
      <div
        className={classnames('project-nav-bar')}
      >
        <div onClick={this.toHome}>
          <div className={classnames('name-link', { 'name-link--hidden': !visible })} style={style}>HOME</div>
        </div>
        <div className={classnames('nav', { 'nav--hidden': !visible })} style={style}>
          {navigations.map((nav) => (
            <NavLink
              to={nav.to}
              label={nav.label}
              style={linkStyle}
            />
          ))}
          {/* <NavLink
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
          /> */}
        </div>
        {/* <div className="home-link" onClick={this.toHome}>
          Home
        </div> */}
      </div>
    );
  }
}

export default compose(withRouter)(Navigation);
