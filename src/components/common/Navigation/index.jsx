import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import './index.scoped.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  toHome = () => {
    const { history } = this.props;
    history.push('/');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div
        className="nav-container"
      >
        <div className="name" onClick={this.toHome}>
          <div className="name-link">DANLING W.</div>
        </div>
        {/* <div className="home-link" onClick={this.toHome}>
          Home
        </div> */}
      </div>
    );
  }
}

export default compose(withRouter)(Navigation);
