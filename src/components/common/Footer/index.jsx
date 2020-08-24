import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import NextArrow from '../../../assets/next-arrow.png';
import PrevArrow from '../../../assets/back-arrow.png';

import './index.scss';

const labels = {
  'core-platform':
  {
    header: 'The CORE Platform',
    subHeader: 'Web Design and Development',
  },
  'basic-needs':
  {
    header: 'Basic Needs Attendance Tracking',
    subHeader: 'Mobile Design and Development',
  },
  'birch-search':
  {
    header: 'Birch Search',
    subHeader: 'Mobile Design',
  },
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onClick = (path) => {
    const { history } = this.props;
    history.push(`/${path}`);
  }

  render() {
    const { previous, next } = this.props;

    return (
      <div className="footer-main">
        <div className="arrow-container" onClick={() => this.onClick(previous)}>
          <img src={PrevArrow} alt="prev arrow" style={{ width: 22 }} />
          <span className="prev-text">{labels[previous].header}</span>
        </div>
        <div
          className="arrow-container"
          style={{ flexDirection: 'column' }}
          onClick={() => this.onClick(next)}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="next-header">{labels[next].header}</div>
            <img src={NextArrow} alt="next arrow" style={{ width: 60 }} />
          </div>
          <div className="next-sub-header">{labels[next].subHeader}</div>
        </div>
      </div>
    );
  }
}

export default compose(withRouter)(Footer);
