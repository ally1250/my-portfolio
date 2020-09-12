import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-scroll';
import NextArrow from '../../../assets/next-arrow.png';
import PrevArrow from '../../../assets/back-arrow.png';
import { ReactComponent as UpIcon } from '../../../assets/up.svg';

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
  'amazon-internship':
  {
    header: 'The Har Viewer',
    subHeader: 'Web Design and Development',
  },
  'food-delivery':
  {
    header: 'Food Delivery System',
    subHeader: 'Web and Mobile Design and Development',
  },
  together:
  {
    header: 'Together',
    subHeader: 'App Design',
  },
  'art-work':
  {
    header: 'My Other Art Pieces',
    subHeader: 'visual arts',
  },
};

class ProjectFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onClick = (path) => {
    const { history } = this.props;
    history.push(`/${path}`);
  }

  toTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    const { previous, next } = this.props;

    return (
      <div className="footer-main">
        {previous ? (
          <div className="arrow-container" onClick={() => this.onClick(previous)}>
            <img src={PrevArrow} alt="prev arrow" style={{ width: 22 }} />
            <span className="prev-text">{labels[previous].header}</span>
          </div>
        ) : <div />}
        <Link
          to="overview"
          spy
          smooth
          offset={-70}
          duration={300}
        >
          <div className="to-top"><UpIcon className="up-icon" /></div>
        </Link>
        {next ? (
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
        ) : <div />}
      </div>
    );
  }
}

export default compose(withRouter)(ProjectFooter);
