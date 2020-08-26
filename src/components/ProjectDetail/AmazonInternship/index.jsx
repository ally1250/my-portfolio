import React, { Component } from 'react';
import { ProjectHeaderSection, Footer, ProjectReflectionSection } from '../../common';

import './index.scss';

const overview = [
  'In the scenario when a customer files a ticket complaining about a really long page load, it is almost impossible for developers to quickly identify the cause if not enough context about the client-side activity is provided. Therefore, the objective of my intern project at Amazon was to design and build a tool for developers to check client-side network traffic.',
  'More specifically, the tool is an HTTP analyzer that visualizes network requests for production traffic. With this tool, developers can easily pinpoint any cause of slow performance by tracing API call details within a given time range.',
];

const headerSections = {
  timeline: 'June - September 2019',
  role: 'Designer, Developer',
  tools: 'React, CSS, SQL, HTML, AWS',
  links: [
    {
      url: 'https://docs.google.com/document/d/1fi_lv-3GkB6cXRbZv-2gmjITDgHbVK04kgzBg5cApU0/edit?usp=sharing',
      label: 'Design Document',
    },
  ],
};

class AmazonInternship extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="amazon-main">
        <ProjectHeaderSection
          header="Amazon Internship Project"
          overviewSections={overview}
          headerSections={headerSections}
          problemStatement="Developers need a convenient way to learn about client-side activity in order to identify and analyze performance issues."
          solution="I created a tool that displays a detailed timeline view of network requests for production traffic, allowing users to check the details for each API call within a specified time period."
        />

        <div className="content-container">

          <h2>Design Process</h2>

          <h3>Background Research</h3>
          <ul>
            <li>
              Consult mentor and project manager to learn about the resources available and suitable for the project. 
            </li>
            <li>
              Set up meetings with other AWS service teams to discuss the details on working toward the objective of the project.
            </li>
            <li>
              Construct survey for engineers to understand their expectations and needs.
            </li>
          </ul>

          <h3>Understand User Workflow</h3>
          <ul>
            <li>
              Create user stories:
            </li>
          </ul>
          <div className="indent-container">
            <ul className="indented-list">
              <li>Alice is a developer on the RDS console team. She is resolving a customer ticket that complains about a slow page load.</li>
              <li>Alice wants to know about how long the page load took to determine whether the delay in performance is caused by a slow internet connection or an actual server error.</li>
              <li>The load time is uncommonly long. Alice wants to get the detailed information and time elapsed for each API call triggered on the client-side, in order to find out which or if any API call has caused the delay.</li>
              <li>Alice finds that one API call took much longer than usual so she wants to find out if any error occurred during that API call.</li>
            </ul>
          </div>
          <ul>
            <li>
              Determine a general workflow that applies to all scenarios above:
            </li>
          </ul>
          <div className="indent-container">
            <ol className="indented-list">
              <li>The user launches the tool and selects the service as RDS, environment, and region.</li>
              <li>The user enters the Customer Id in the search box, specifies a start time, and clicks "scan".</li>
              <li>The user now sees a list of all API calls within the ten-minute period after the start time, including the total load time in seconds, and the total number of API calls triggered by the page load.</li>
              <li>The user clicks on an API name to check the details and error message for that API call.</li>
            </ol>
          </div>

          <h3>Generate Ideas</h3>

          {/* <h3>Make Iterative Improvements</h3>
          <div className="basic-needs-steps-container">
            <BasicNeedsSteps className="steps-svg" />
          </div> */}
        </div>

        {/* <div className="iterations-divider">
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

        <ProjectReflectionSection
          reflectionSections={[
            'The result of adding a feature to an existing design may look simple but the process of figuring out how to incorporate the new design with the predefined ones is difficult. Since the layout for notifications is fixed, I was given little flexibility to make changes to the original component. Therefore, to make the design intuitive to users, I spent a lot of effort exploring different approaches.',
          ]}
          feedbackSections={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque feugiat egestas metus neque. Orci consectetur eget est, purus tortor. Nunc, in felis cursus ornare malesuada vitae.',
          ]}
        /> */}

        {/* <Footer
          previous="amazon-internship"
          next="food-delivery"
        /> */}
      </div>
    );
  }
}

export default AmazonInternship;
