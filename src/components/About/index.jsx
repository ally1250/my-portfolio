import React, { Component } from 'react';
// import { ReactComponent as Background } from '../../assets/background.png';
import { ReactComponent as DesignerIcon } from '../../assets/designer-icon.svg';
import { ReactComponent as DeveloperIcon } from '../../assets/developer-icon.svg';
import data from '../../Data';

import Background from '../../assets/background.png';

import './index.scoped.scss';

const DetailSection = ({ section }) => (
  <div>
    {section.detail.map((detail) => (
      <div className="section">
        <div className="section-title">
          {detail.title.join('\r\n')}
        </div>
        <div className="section-detail">
          {detail.detail.join('\r\n')}
        </div>
      </div>
    ))}
  </div>
);

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="about">
        <img src={Background} alt="about-background-circles" className="background" />
        {/* <Background className="background" /> */}
        <div className="label-container">
          <div className="label-section">
            <DesignerIcon />
            <div className="designer">
              Designer
              <DetailSection
                section={data.designerSection}
              />
            </div>
          </div>
          <div className="label-section">
            <div className="overlap">
              <DetailSection
                section={data.overlapSection}
              />
            </div>
          </div>
          <div className="label-section">
            <DeveloperIcon />
            <div className="developer">
              Developer
              <DetailSection
                section={data.developerSection}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
