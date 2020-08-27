/* eslint-disable max-len */
import React, { Component } from 'react';
import { ReactComponent as BasicNeedsSteps } from '../../../assets/basicNeeds/basic-needs-steps.svg';
import { ProjectHeaderSection, Footer, ProjectReflectionSection } from '../../common';

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

export const Image = ({ src, alt, label, style }) => (
  <div>
    <img src={src} alt={alt} style={style} />
    <div className="caption">{label}</div>
  </div>
);

class BasicNeeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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

        <div className="content-container narrow-contianer">

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

        <div className="break-block">
          <img src={IterationIcon} alt="iteration icon" />
          <h2 style={{ margin: 0, color: 'white', marginTop: 40 }}>Design Iterations</h2>
        </div>

        <div className="design-iteration" style={{ backgroundColor: '#375368' }}>
          <div className="content-container iteration-container">
            <h2 className="iteration-header">Iteration 1</h2>
            <div className="iteration-img-layout">
              <Image
                src={DefaultV1}
                alt="default v1"
                label="Default State"
              />
              <Image
                src={RegisteredV1}
                alt="registered v1"
                label="Registered"
              />
              <Image
                src={UnregisteredV1}
                alt="unregistered v1"
                label="Unregistered"
              />
              <Image
                src={LimitExceededV1}
                alt="limit exceeded v1"
                label="RSVP Limit Exceeded"
              />
            </div>
            <div className="description-box">
              <ul>
                <li>Create two buttons to give users the flexibility to register andunregister for events.</li>
                <li>Use notification text to give users clear feedback on their actions.</li>
                <li>Disable the register button when RSVP count has reached the limit.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="design-iteration" style={{ backgroundColor: '#597489' }}>
          <div className="content-container iteration-container">

            <h2 className="iteration-header">Iteration 2</h2>
            <div className="iteration-img-layout">
              <Image
                src={DefaultV2}
                alt="default v2"
                label="Default State (Button)"
              />
              <Image
                src={RegisteredV2}
                alt="registered v2"
                label="Registered (Button)"
              />
              <Image
                src={LimitExceededV2}
                alt="limit exceeded v2"
                label="RSVP Limit Exceeded (Button)"
              />
            </div>
            <div className="iteration-img-layout" style={{ marginTop: '5em' }}>
              <Image
                src={DefaultToggle}
                alt="default toggle"
                label="Default State (Toggle)"
              />
              <Image
                src={RegisteredToggle}
                alt="registered toggle"
                label="Registered (Toggle)"
              />
            </div>
            <div className="description-box">
              Problems with the first prototype
              <ul>
                <li>Noitification text is not intuitive enough to tell which events are registered and which are not.</li>
                <li>The &quot;Maybe Not&quot; button is not necessary and may cause confusion.</li>
                <li>Disabled button is limiting and confusing.</li>
              </ul>
              <div style={{ height: '3em' }} />
              Solution
              <ul>
                <li>Combine the register and unregister buttons into a toogle button.</li>
                <li>Experimente with two approaches for representing the toggle button. The first approach is to use different colors to indicate the on and off states of the toggle button. The second approach directly uses a toggle for more clarity.</li>
                <li>Change the noitification text to show the current RSVP count to give users more context.</li>
                <li>When RSVP limit is reached, display a warning text to notify users that there may not be enough food, instead of disabling the button. This gives users more flexibility and control over their decisions.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="design-iteration" style={{ backgroundColor: '#7A94A8' }}>
          <div className="content-container iteration-container">
            <h2 className="iteration-header">Final Iteration</h2>

            <div className="iteration-img-layout">
              <Image
                src={DefaultV3}
                alt="default v3"
                label="Default State"
              />
              <Image
                src={RegisteredV3}
                alt="registered v3"
                label="Registered"
              />
              <Image
                src={LimitExceededV3}
                alt="limit exceeded v3"
                label="RSVP Limit Exceeded"
              />
            </div>
            <div className="description-box">
              Problems with the second prototype
              <ul>
                <li>The team likes the idea of changing button color to indicate its state. However, users may not know which colors correspond to registered and unregistered.</li>
                <li>The gray background is not a good indicator of the intial state for the toggle button. Users may confuse the gray color for a disabled button instead of an active button.</li>
              </ul>
              Solution
              <ul>
                <li>Add a check box inside the toggle button to help users quickly and easily understand the button state.</li>
                <li>Change the initial state to be an outlined button with an unchecked check box. This is a clearer indication for users that the button is in its off state and is pressable.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-container narrow-contianer" style={{ marginBottom: 20 }}>
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
          <div className="indent-container indent-image">
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

        <ProjectReflectionSection
          reflectionSections={[
            'A search tool is about simplicity for use and clarity for the search results. I streamlined the required search parameters so that the users could simply copy and paste the information from the customer tickets. In addition, I made sure that the search results only display the essential data for identifying an issue, such as time elapsed, status code, etc. so that users can directly locate the data they want. It required a lot of trails and revisions to create a simple design that conveys exactly the information needed.',
            'If I had more time, I would add instrumentation to make this tool a shared component for all other consoles to have network logging.',
          ]}
          feedbackSections={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque feugiat egestas metus neque. Orci consectetur eget est, purus tortor. Nunc, in felis cursus ornare malesuada vitae.',
          ]}
        />

        <Footer
          previous="amazon-internship"
          next="food-delivery"
        />
      </div>
    );
  }
}

export default BasicNeeds;
