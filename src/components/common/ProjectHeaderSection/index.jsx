import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import './index.scss';

class ProjectHeaderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      header,
      overviewSections, // array of string
      headerSections, // map, links: { url: '', label: ''}
      problemStatement,
      solution,
      headerStyle,
    } = this.props;

    const {
      timeline, role, tools, links,
    } = headerSections;

    return (
      <div className="overview">
        <div className="content-container">
          <h1 style={{ ...headerStyle, width: '12em' }}>{header}</h1>
          <Fade bottom><h2>Project Overview</h2></Fade>
          <div className="two-col-container">
            <div>
              {overviewSections.map((overview) => <p>{overview}</p>)}
            </div>
            <div className="sections">
              <p>
                <div className="section-header">Links</div>
                {links.map((link) => <a href={link.url} target="_blank" rel="noreferrer" className="project-link">{link.label}</a>)}
              </p>
              <p>
                <div className="section-header">Timeline</div>
                {timeline}
              </p>
              <p>
                <div className="section-header">Role</div>
                {role}
              </p>
              <p>
                <div className="section-header">Tools</div>
                {tools}
              </p>
            </div>
          </div>
        </div>
        <div className="divider" />

        <div className="break-section" style={{ backgroundColor: 'rgba(224, 108, 98, 0.1)' }}>
          <div className="header">Problem Statement</div>
          <p>
            {problemStatement}
          </p>
        </div>
        <div className="break-section" style={{ backgroundColor: 'rgba(255, 216, 147, 0.1)' }}>
          <div className="header">Solution</div>
          <p>
            {solution}
          </p>
        </div>

        {/* <div className="divider" /> */}
      </div>
    );
  }
}

export default ProjectHeaderSection;
