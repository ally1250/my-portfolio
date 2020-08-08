import React, { Component } from 'react';
import { ReactComponent as Background } from '../../assets/background.svg';
import './index.scss';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <Background />
      </div>
    );
  }
}

export default About;
