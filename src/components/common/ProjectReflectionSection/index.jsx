import React, { Component } from 'react';
import { Fade } from 'react-reveal';

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
        <Fade bottom><h2>Reflection</h2></Fade>
        <div className="reflection-container">
          <div>
            {reflectionSections.map((section) => <p>{section}</p>)}
          </div>
        </div>
        {feedbackSections.length > 0 && (
          <div>
            <div className="section-header">Feedback</div>
            {feedbackSections.map((section) => (
              <p>
                <div className="feedback-section">
                  {`"${section.text}"`}
                  <div className="quote-source">{`--- ${section.source}`}</div>
                </div>
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ProjectReflectionSection;
