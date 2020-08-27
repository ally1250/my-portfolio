import React, { Component } from 'react';

import './index.scss';

class ProjectReflectionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { feedbackSections = [], reflectionSections = [], source = '' } = this.props;

    return (
      <div className="content-container narrow-contianer" id="project-reflection-main">
        <h2>Reflection</h2>
        <div className="reflection-container">
          <div>
            {reflectionSections.map((section) => <p>{section}</p>)}
          </div>
        </div>
        <div className="section-header">Feedback</div>
        {feedbackSections.map((section) => (
          <p>
            <div className="feedback-section">
              {`"${section}"`}
              <div className="quote-source">{`--- ${source}`}</div>
            </div>
          </p>
        ))}
      </div>
    );
  }
}

export default ProjectReflectionSection;
