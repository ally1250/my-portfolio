import React, { Component } from 'react';
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
      <div>
        <div className="content-container">
          <h1 style={headerStyle}>{header}</h1>
          <h2>Project Overview</h2>
          <div className="two-col-container">
            <div>
              {overviewSections.map((overview) => <p>{overview}</p>)}
            </div>
            <div className="sections">
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
              <p>
                <div className="section-header">Links</div>
                {links.map((link) => <a href={link.url}>{link.label}</a>)}
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
