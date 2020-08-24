import React, { Component } from 'react';
import { ReactComponent as BasicNeedsSteps } from '../../../assets/basicNeeds/basic-needs-steps.svg';
import { ProjectHeaderSection, Footer } from '../../common';

import IterationIcon from '../../../assets/basicNeeds/iteration-icon.png';

import DefaultV1 from '../../../assets/basicNeeds/default-v1.png';
import LimitExceededV1 from '../../../assets/basicNeeds/limit-exceeded-v1.png';
import RegisteredV1 from '../../../assets/basicNeeds/registered-v1.png';
import UnregisteredV1 from '../../../assets/basicNeeds/unregistered-v1.png';

import DefaultV2 from '../../../assets/basicNeeds/default-v2.png';
import LimitExceededV2 from '../../../assets/basicNeeds/limit-exceeded-v2.png';
import RegisteredV2 from '../../../assets/basicNeeds/registered-v2.png';

import DefaultToggle from '../../../assets/basicNeeds/default-toggle.png';
import RegisteredToggle from '../../../assets/basicNeeds/registered-toggle.png';

import DefaultV3 from '../../../assets/basicNeeds/default-v3.png';
import LimitExceededV3 from '../../../assets/basicNeeds/limit-exceeded-v3.png';
import RegisteredV3 from '../../../assets/basicNeeds/registered-v3.png';

import BasicNeedsWorkflow from '../../../assets/basicNeeds/basic-needs-workflow.png';
import BasicNeedsStructure from '../../../assets/basicNeeds/basic-needs-structure.png';

import './index.scss';

const overview = [
  'Basic Needs is an organization at UCSD that aims to provide free food resources to students in needs from other participating organizations. Students who are interested can sign up for free food notifications through the UCSD Mobile App.',
  'To help Basic Needs facilitate event attendance tracking, we created an RSVP feature in the UC San Diego mobile app for students to conveniently register for events and check food availability.',
  'My task was to design and implement the RSVP feature to integrate it with the current campus event notifications in the app.',
];

const headerSections = {
  timeline: 'Janurary 2020 - Present',
  role: 'Designer, Developer',
  tools: 'Figma, Flutter, AWS, WSO2',
  links: [
    {
      url: 'https://github.com/ally1250/campus-mobile',
      label: 'Github Fork',
    },
    {
      url: 'https://mobile.ucsd.edu/',
      label: 'UC San Diego App',
    },
  ],
};

class BasicNeeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="basic-needs-main">
        <ProjectHeaderSection
          header="Basic Needs Attendance Tracking"
          overviewSections={overview}
          headerSections={headerSections}
          problemStatement="Basic Needs and the participating departments need a way to
                            know an approximate number of students attending the free food
                            events in order to prepare food accordingly."
          solution="I created an RSVP option to all free food notifications in the UC San Diego app,
                    allowing us to easily and accurately keep track of the number of students attending."
        />

        <div className="divider" />

        <div className="content-container">

          <h2>Design Process</h2>

          <h3>Understand Client Needs</h3>
          <ul>
            <li>
              Do background research on Basic Needs to learn the objective of the organization.
            </li>
            <li>
              Communicate with Basic Needs to learn their challenges and expectations.
            </li>
          </ul>

          <h3>Understand User Needs</h3>
          <ul>
            <li>
              <i>Think like a user.</i>
              {' '}
              Identify what information the students need to know before registering for an event.
            </li>
          </ul>
          <div className="indent-container">
            As a user...
            <ul className="indented-list">
              <li>I want to know how many people are going before I make my decision.</li>
              <li>I want to know how many servings of food will be offered.</li>
              <li>I want to know whether there will be enough food at the event.</li>
            </ul>
          </div>

          <h3>Make Iterative Improvements</h3>
          <div className="basic-needs-steps-container">
            <BasicNeedsSteps className="steps-svg" />
          </div>
        </div>

        <div className="iterations-divider">
          <img src={IterationIcon} alt="iteration icon" />
          <h2 style={{ margin: 0, color: 'white', marginTop: 40 }}>Design Iterations</h2>
        </div>

        <div className="design-iteration" style={{ backgroundColor: '#5B7A92' }}>
          <div className="iteration-img-layout">
            <img src={DefaultV1} alt="default v1" />
            <img src={LimitExceededV1} alt="limit exceeded v1" />
            <img src={RegisteredV1} alt="registered v1" />
            <img src={UnregisteredV1} alt="unregistered v1" />
          </div>
        </div>
        <div className="design-iteration" style={{ backgroundColor: '#93ACBF' }}>
          <div className="iteration-img-layout three-col">
            <img src={DefaultV2} alt="default v2" />
            <img src={LimitExceededV2} alt="limit exceeded v2" />
            <img src={RegisteredV2} alt="registered v2" />
          </div>
          <div className="iteration-img-layout grid-gap">
            <img src={DefaultToggle} alt="default toggle" />
            <img src={RegisteredToggle} alt="registered toggle" />
          </div>
        </div>
        <div className="design-iteration" style={{ backgroundColor: '#B3C6D4' }}>
          <div className="iteration-img-layout three-col">
            <img src={DefaultV3} alt="default v3" />
            <img src={LimitExceededV3} alt="limit exceeded v3" />
            <img src={RegisteredV3} alt="registered v3" />
          </div>
        </div>

        <div className="divider" />

        <div className="content-container" style={{ marginBottom: 20 }}>
          <h2>Development Process</h2>
          <h3>Create Backend Architecture</h3>
          <div className="center small-indent" style={{ marginTop: '2em' }}>
            <img src={BasicNeedsStructure} alt="workflow structure" style={{ width: 600 }} />
          </div>
          <p>
            Before diving into the implementation, I created a workflow diagram
            and a design document
            to help configure the backend structure.
            I made sure that the tools are reusable and compatible
            for the intergation of other campus events in the future.
          </p>
          <div className="indent-container">
            <img src={BasicNeedsWorkflow} alt="basic needs workflow" style={{ width: 730 }} />
          </div>
          <div className="caption">Backend Workflow Diagram</div>
          <h3>Develop Client Side</h3>
          <ul>
            <li>Implement the design in Flutter.</li>
            <li>Store user&apos;s attendance information in local storage.</li>
            <li>Integrate AWS API endpoints to retrieve and update attendance data.</li>
          </ul>

          <h3>Create a detailed checklist for testing</h3>
          <h3>Submit the final pull request for review and deploy to production</h3>
        </div>

        <div className="divider" />

        <div className="content-container">
          <h2>Reflection</h2>
          <div className="two-col-container">
            <div>
              <p>
                The result of adding a feature to an existing design
                may look simple but the process of figuring out how to
                incorporate the new design with the predefined ones
                is difficult. Since the layout for notifications is fixed,
                I was given little flexibility to make changes to the
                original component. Therefore, to make the design intuitive
                to users, I spent a lot of effort exploring different approaches.
              </p>
            </div>
            <div className="sections">
              <div className="section-header">Feedback</div>
              <p>
                <div className="feedback-section">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque feugiat egestas metus neque. Orci consectetur eget est, purus tortor. Nunc, in felis cursus ornare malesuada vitae.”
                </div>
              </p>
            </div>
          </div>
        </div>

        <Footer
          previous="birch-search"
          next="core-platform"
        />
      </div>
    );
  }
}

export default BasicNeeds;
