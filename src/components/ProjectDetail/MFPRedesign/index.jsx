import React, { Component } from 'react';
import {
  Navigation, ProjectFooter,
} from '../../common';

import MFP1 from '../../../assets/MFP1.png';
import MFP2 from '../../../assets/MFP2.png';
import MFP3 from '../../../assets/MFP3.png';
import MFP4 from '../../../assets/MFP4.png';
import MFP5 from '../../../assets/MFP5.png';
import MFP6 from '../../../assets/MFP6.png';
import MFP7 from '../../../assets/MFP7.png';

const navigations = [
  {
    to: 'overview',
    label: 'Overview',
  },
  {
    to: 'the-problem',
    label: 'The Problem',
  },
  {
    to: 'ideation',
    label: 'Ideation',
  },
  {
    to: 'design-iterations',
    label: 'Design Iterations',
  },
  {
    to: 'final-design',
    label: 'Final Design',
  },
  {
    to: 'reflection',
    label: 'Reflection',
  },
];

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <Navigation navigations={navigations} />
        <img src={MFP1} alt="MFP1" style={{ width: '100vw' }} />
        <img src={MFP2} alt="MFP2" style={{ width: '100vw' }} className="overview" />
        <img src={MFP3} alt="MFP3" style={{ width: '100vw' }} className="the-problem" />
        <img src={MFP4} alt="MFP4" style={{ width: '100vw' }} className="ideation" />
        <img src={MFP5} alt="MFP5" style={{ width: '100vw' }} className="design-iterations" />
        <img src={MFP6} alt="MFP6" style={{ width: '100vw' }} className="final-design" />
        <img src={MFP7} alt="MFP7" style={{ width: '100vw' }} className="reflection" />
        <ProjectFooter
          previous="basic-needs"
          // next="food-delivery"
        />
      </>
    );
  }
}

export default index;
